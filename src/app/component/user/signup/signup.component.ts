import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AppConst } from '../../../const/app.const';
import { SignupService } from '../../../service/signup.service';
import { UserSignupRequestDto } from '../../../dto/interface/user-signup-request.dto';
import { TaskManagerCode } from '../../../codedef/task-manager-code';
import { UserSignupResponseDto } from '../../../dto/interface/user-signup-response.dto';
import { Router } from '@angular/router';
import { ServiceConst } from '../../../const/service-const';
import { CommonDeliveryService } from '../../../service/common-delivery.service';
import { StringUtil } from '../../../util/string-util';
import { CookieService } from 'ngx-cookie-service';
import { Errors } from '../../../dto/common/errors';
import { ApiErrorCode } from '../../../codedef/api-error-code.enum';
import { ObjectUtil } from '../../../util/object.util';
import { AnimationUtil } from '../../../util/animation-util';

/**
 * 利用者サインアップコンポーネントクラス。
 */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    /**
     * デフォルトコンストラクタ
     */
    constructor(private signupService: SignupService, private router: Router, private commonDeliveryService: CommonDeliveryService, private cookieService: CookieService) { 
        this.router = router;
    }

    ngOnInit() {
    }

    /**
     * ルートコンポーネント、およびタスクコンポーネントに渡す利用者IDプロパティ、イベント出力
     */
    @Output()
    public userId = new EventEmitter<String>();

    /** 
     * バリデーションチェック結果
     */
    public checkedResult: string;

    /**
     * 会員登録エラー
     */
    public signupError: string;

    /**
     * スピナーのランディング用DOM要素。
     */
    @ViewChild("spinner") public spinner: ElementRef;

    /**
     * 利用者情報登録フォームグループ
     */
    public signupForm: FormGroup = new FormGroup({
        userNameControl: new FormControl("", [Validators.required, Validators.maxLength(AppConst.USER_NAME_MAX_LENGTH)]),
        emailControl: new FormControl("", [Validators.required, Validators.maxLength(AppConst.USER_EMAIL_MAX_LENGTH), 
            Validators.email]),
        passwordControl: new FormControl("", [Validators.required, Validators.maxLength(AppConst.USER_PASSWORD_MAX_LENGTH),
            Validators.minLength(AppConst.USER_PASSWORD_MIN_LENGTH), Validators.pattern(StringUtil.REGEX_FORMAT_HALF_SIZE)]),
        passwordConfirmationControl: new FormControl("", [Validators.required, Validators.maxLength(AppConst.USER_PASSWORD_MAX_LENGTH),
          Validators.pattern(StringUtil.REGEX_FORMAT_HALF_SIZE)])
    })

    /**
     * サインアップを実行します。
     */
    public signup(): void {
        if (!this.violateRistriction()) {

            AnimationUtil.startSpinner(this.spinner);

            // リクエストの生成
            var req: UserSignupRequestDto = new UserSignupRequestDto();
            req.userName = this.signupForm.get("userNameControl").value;
            req.email = this.signupForm.get("emailControl").value;
            req.password = this.signupForm.get("passwordControl").value;
            req.usedFlag = TaskManagerCode.USER_USED_FLAG_USED;

            // Serviceクラスを実行します。
            this.signupService.signup(req).subscribe((res: UserSignupResponseDto) => {
                
                AnimationUtil.destroySpinner(this.spinner);

                // すでに使われているメールアドレスの場 合は、エラーメッセージを表示して何もしない
                if (!ObjectUtil.isNullOrUndefined(res.errors)) {
                    this.signupError = AppConst.USER_ALREADY_REGISTERD;
                } else {
                    this.commonDeliveryService.emitUserIdChange(res.userId);
                    this.cookieService.set("currentUser", res.userId, 1);
                    this.router.navigateByUrl(ServiceConst.BASE_SLASH + ServiceConst.URL_WEB_TASK);
                }
                },
                (error: Errors) => {
                    // console.error(error.errors);
                    console.log(JSON.stringify(error));
                    if(error.codes[0] === ApiErrorCode.ERR999999) this.signupError = AppConst.SYSTEM_ERROR;
                    else this.signupError = AppConst.USER_ALREADY_REGISTERD;
                },
            )
        }
    }

    /**
     * 入力チェックに適合していることをチェックします。
     * @returns boolean
     */
    public violateRistriction(): boolean{
        var userName: AbstractControl = this.signupForm.get("userNameControl");
        // 名前の入力チェック。
        if (userName.hasError('required') && (userName.dirty || userName.touched)) {
          this.checkedResult = AppConst.USER_SIGNUP_USERNAME_REQUIRED_VIOLATED;
          return true;
        } else if (userName.hasError('maxlength') && (userName.dirty || userName.touched)) {
          this.checkedResult = AppConst.USER_SIGNUP_USERNAME_LENGTH_VIOLATED;
          return true;
        }

        var email: AbstractControl = this.signupForm.get("emailControl");
        // メールアドレスの入力チェック。
        if (email.hasError('required') && (email.dirty || email.touched)) {
          this.checkedResult = AppConst.USER_SIGNUP_EMAIL_REQUIRED_VIOLATED;
          return true;
        } else if (email.hasError('maxlength') && (email.dirty || email.touched)) {
          this.checkedResult = AppConst.USER_SIGNUP_EMAIL_LENGTH_VIOLATED;
          return true;
        } else if (email.hasError('email') && (email.dirty || email.touched)) {
            this.checkedResult = AppConst.USER_EMAIL_NOT_HALF_SIZED;
            return true;
        }

        var password: AbstractControl = this.signupForm.get("passwordControl");
        // パスワードの入力チェック。
        if (password.hasError('required') && (password.touched || password.dirty)) {
          this.checkedResult = AppConst.USER_SIGNUP_PASSWORD_REQUIRED_VIOLATED;
          return true;
        } else if (password.hasError('maxlength') && (password.touched || password.dirty)) {
          this.checkedResult = AppConst.USER_SIGNUP_PASSWORD_LENGTH_VIOLATED;
          return true;        
        } else if (password.hasError('minlength') && (password.touched || password.dirty)) {
          this.checkedResult = AppConst.USER_SIGNUP_PASSWORD_LENGTH_TOO_SHORT;
          return true;
        } else if (password.hasError('pattern') && (password.touched || password.dirty)) {
            this.checkedResult = AppConst.USER_PASSWORD_NOT_HALF_SIZED;
            return true;
        }

        // パスワード一致チェック
        var passwordConfirmation: AbstractControl = this.signupForm.get("passwordConfirmationControl");
        if(password.value !== passwordConfirmation.value) {
            this.checkedResult = AppConst.USER_PASSWORD_NOT_MATCHED;
            return true;
        }

        return false;
    }

}
