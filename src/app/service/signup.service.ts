import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceConst } from '../const/service-const';
import { catchError } from 'rxjs/operators';
import { GlobalErrorHandler } from '../exception/global-error-handler';
import { UserSignupRequestDto } from '../dto/interface/user-signup-request.dto';
import { UserSignupResponseDto } from '../dto/interface/user-signup-response.dto';
import { Errors } from '../dto/common/errors';

/**
 * 利用者サインアップServiceクラス。
 */
@Injectable()
export class SignupService {

    /**
     * デフォルトコンストラクタ。
     */
    constructor(private http: HttpClient) { }

    /**
     * 更新系リクエスト共通HTTPヘッダー
     */
    private httpHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Access-Control-Allow-Origin': '*'
    });

    /**
     * 新規利用者のサインアップを実施します。
     * @param userSigninRequestDto
     * @returns Observable<UserSignupResponseDto>
     */
    public signup(userSignupRequestDto: UserSignupRequestDto): Observable<UserSignupResponseDto | Errors> {
        return this.http.post<UserSignupRequestDto>(ServiceConst.URL_USER_REGIST, userSignupRequestDto, { headers : this.httpHeaders })
            .pipe(catchError(GlobalErrorHandler.handleError));
    }

}
