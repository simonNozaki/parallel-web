import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { ServiceConst } from '../const/service-const';
import { FetchTaskResponseDto } from '../dto/interface/fetch-task-response';
import { RegistTaskRequest } from '../dto/interface/regist-task-request';
import { GlobalErrorHandler } from '../exception/global-error-handler';
import { TaskCompleteRequestDto } from '../dto/interface/task-complete-request.dto';
import { TaskCompleteResponseDto } from '../dto/interface/task-complete-response.dto';
import { RegistTaskResponse } from '../dto/interface/regist-task-response';
import { Errors } from '../dto/common/errors';


/**
 * タスクの処理を行うServiceクラスです.
 */
@Injectable()
export class TaskService {

  /** 
   * デフォルトコンストラクタ 
   */
  constructor(private http: HttpClient) { }

    /**
     * 更新系リクエスト共通HTTPヘッダー
     */
    private httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    /** 
     * タスクの一覧を取得するAPIをコールします.
     */
    public fetchTask(userId: string): Observable<FetchTaskResponseDto> {
        // APIをコールして、結果を取得します.
        return this.http.get<FetchTaskResponseDto>(
            ServiceConst.URL_TASK_FETCH,
            { params: {
                userId: userId
              }
            })
            .pipe(catchError(GlobalErrorHandler.handleError));
    }

    /** 
     * 新規タスクを登録するAPIをコールします.
     * @param registTaskRequest: RegistTaskRequest
     * @returns Observable<RegistTaskRequest>
     */
    public registTask(registTaskRequest: RegistTaskRequest): Observable<RegistTaskResponse | Errors> {
        return this.http.post<RegistTaskRequest>(ServiceConst.URL_TASK_REGIST, registTaskRequest, { headers : this.httpHeaders })
            .pipe(catchError(GlobalErrorHandler.handleError));
    }

    /**
     * タスクを完了します。
     * @param taskCompleteRequestDto 
     * @returns Observable<TaskCompleteResponseDto>
     */
    public complete(taskCompleteRequestDto: TaskCompleteRequestDto): Observable<TaskCompleteResponseDto> {
        return this.http.patch<TaskCompleteRequestDto>(ServiceConst.URL_TASK_COMPLETE, taskCompleteRequestDto, { headers : this.httpHeaders })
            .pipe(catchError(GlobalErrorHandler.handleError));

    }
    

}
