import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { FetchTaskResponseDto } from '../../dto/interface/fetch-task-response';
import { Task } from '../../entity/task';
import { RegistTaskRequest } from '../../dto/interface/regist-task-request';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { AppConst } from '../../const/app.const';
import { ObjectUtil } from '../../util/object.util';
import { TaskCompleteRequestDto } from '../../dto/interface/task-complete-request.dto';
import { TaskCompleteResponseDto } from '../../dto/interface/task-complete-response.dto';
import { _ } from 'underscore';
import { CommonDeliveryService } from '../../service/common-delivery.service';
import { Router } from '@angular/router';
import { ServiceConst } from '../../const/service-const';
import { RegistTaskResponse } from '../../dto/interface/regist-task-response';
import { DateUtil } from '../../util/date-util';
import { Errors } from '../../dto/common/errors';
import { ApiErrorCode } from '../../codedef/api-error-code.enum';

/**
 * タスクの業務処理コンポーネント
 */
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

    constructor(private taskService: TaskService, private router: Router, public commonDeliveryService: CommonDeliveryService) {}

    /**
     * 利用者ID
     */ 
    public userId: string;

    ngOnInit() {
        this.commonDeliveryService.observableUserId.subscribe((userId: string) => {
            this.userId = userId;
        });

        // 利用者IDが正常に設定されていない場合、リダイレクトしてアクセスを拒否する
        if (ObjectUtil.isNullOrUndefined(this.userId)) {
            this.router.navigateByUrl(ServiceConst.BASE_SLASH + ServiceConst.URL_WEB_USER_SIGNIN);
        }
        
        // タスクのリストをプロパティに設定
        this.fetchTasks(this.userId);
        this.checkedResult = "";
    }

    /**
     * タスクリスト 
     */ 
    public tasks: Task[] = [];

    /**
     * タスク登録のフォームグループ
     */
    public taskForm: FormGroup = new FormGroup({
        taskTitleControl: new FormControl(null, [Validators.required, Validators.maxLength(AppConst.TASK_TITLE_MAX_LENGTH)]),
        taskLabelControl: new FormControl(""),
        startDateControl: new FormControl(null),
        deadlineControl: new FormControl(null),
        taskNoteControl: new FormControl("", Validators.maxLength(AppConst.TASK_NOTE_MAX_LENGTH))
    });

    /** 
     * タスクチェック結果
     */
    public checkedResult: string;

    /**
     * API処理結果
     */
    public processedResult: string;

    /**
     * サービスクラスから、タスクの一覧を取得します.
     * @param userId: string
    */
    public fetchTasks(userId: string): void {
        this.taskService.fetchTask(userId).subscribe((res: FetchTaskResponseDto) => this.commonDeliveryService.userTasks = res.tasks);
    }

    /**
     * テンプレートから受け取ったタスクを登録します.
     * @param registTaskRequestDto: RegistTaskRequest
     * @returns void
    */
    public registTask(): void {
        // 入力チェックを違反していない場合、タスク登録処理を実行します
        if (this.isNotNull() && !this.violateRistriction()) {
            var registTaskRequestDto: RegistTaskRequest = new RegistTaskRequest();
            // 登録リクエストDTOの生成
            registTaskRequestDto.setTaskTitle(this.taskForm.get("taskTitleControl").value);
            this.taskForm.get("taskLabelControl").value != "" ? registTaskRequestDto.setTaskLabel(this.taskForm.get("taskLabelControl").value)
                : registTaskRequestDto.setTaskLabel(null);
            if (ObjectUtil.isNullOrUndefined(this.taskForm.get("startDateControl").value)) {
                registTaskRequestDto.setStartDate(new Date());
            } else { 
                registTaskRequestDto.setStartDate(this.taskForm.get("startDateControl").value);
            }
            registTaskRequestDto.setDeadline(this.taskForm.get("deadlineControl").value);
            registTaskRequestDto.setTaskNote(this.taskForm.get("taskNoteControl").value);
            registTaskRequestDto.setUserId(this.userId);

            this.taskService.registTask(registTaskRequestDto).subscribe(
                (res: RegistTaskResponse) => {},
                (error: Errors) => {
                    if(error.codes[0] === ApiErrorCode.ERR999999) this.processedResult = AppConst.SYSTEM_ERROR;
                }
            );

            // 登録したタスクをリストに追加して、随時表を更新します。
            var newTask: Task = new Task();
            newTask.setTaskTitle(registTaskRequestDto.getTaskTitle());
            newTask.setTaskLabel(registTaskRequestDto.getTaskLabel());
            newTask.setTaskNote(registTaskRequestDto.getTaskNote());
            newTask.setStartDate(registTaskRequestDto.getStartDate());
            newTask.setDeadline(registTaskRequestDto.getDeadline());
            this.commonDeliveryService.userTasks.push(newTask);
        }
    }

    /**
     * 入力必須項目に値が入っていることを確認します。
     * @returns boolean
     */
    private isNotNull(): boolean {
        if(ObjectUtil.isNullOrUndefined(this.taskForm.get("taskTitleControl").value)){
            this.checkedResult = AppConst.TASK_TITLE_REQUIRED_VIOLATED;
            return false;
        }
        return true;
    }

    /**
     * 入力チェックに適合していることをチェックします。
     * @returns boolean
     */
    public violateRistriction(): boolean {
        // タスクタイトル。必須入力チェック
        var taskTitle: AbstractControl = this.taskForm.get("taskTitleControl");
        if (ObjectUtil.isNullOrUndefined(this.taskForm.get("taskTitleControl").value) && taskTitle.hasError('required') && (taskTitle.dirty || taskTitle.touched)) {
            this.checkedResult = AppConst.TASK_TITLE_REQUIRED_VIOLATED;
            return true;
        }

        if (taskTitle.hasError('maxlength') && (taskTitle.dirty || taskTitle.touched)) {
            this.checkedResult = AppConst.TASK_TITLE_LENGTH_VIOLATED;
            return true;
        }

        // タスクメモ。200文字以内であることをチェックする
        var note: AbstractControl = this.taskForm.get("taskNoteControl");
        if (note.hasError('maxlength') && (note.dirty || note.touched)) {
            this.checkedResult =  AppConst.TASK_NOTE_LENGTH_VIOLATED;
            return true;
        }

        // 終了日。開始日との関係が正常であることを確認する
        var deadline: string = this.taskForm.get("deadlineControl").value;
        var startdate: string = this.taskForm.get("startDateControl").value;
        if(!ObjectUtil.isNullOrUndefined(deadline) && DateUtil.isForwardFromComparison(deadline, startdate)) {
            this.checkedResult = AppConst.DEADLINE_SET_BEFORE_START_DATE;
            return true;
        }

        return false;
    }

    /**
     * タスクを完了します。
     * @param taskId: string
     * @returns void
     */
    public complete(taskId: string): void {
        var taskCompleteRequestDto: TaskCompleteRequestDto = new TaskCompleteRequestDto();
        taskCompleteRequestDto.setTaskId(taskId);

        this.taskService.complete(taskCompleteRequestDto).subscribe((res: TaskCompleteResponseDto) => {
            if (!ObjectUtil.isNullOrUndefined(res.taskId)) {
                  // 完了したタスクを抽出
                  var completedTask: Task = _.where(this.commonDeliveryService.userTasks, {taskId : res.taskId});
                  // 完了したタスクのINDEXを取得
                  var index: number = _.indexOf(this.commonDeliveryService.userTasks, completedTask);
                  // タスクのリストから削除
                  this.commonDeliveryService.userTasks.splice(index, 1);
            }
        });
    }

    /**
     * タスクの期間を更新します。
     */
    public concatPeriod(task: Task): string {

        console.log(task.startDate);
        console.log(task.deadline);

        if (ObjectUtil.isNullOrUndefined(task.deadline)) {
            return DateUtil.formatDateYMDWithSlash(task.startDate) + " ~ ";
        }

        return DateUtil.formatDateYMDWithSlash(task.startDate) + " ~ " + DateUtil.formatDateYMDWithSlash(task.deadline);
    }

}
