import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceConst } from '../const/service-const';
import { catchError } from 'rxjs/operators';
import { GlobalErrorHandler } from '../exception/global-error-handler';
import { UserSigninResponseDto } from '../dto/interface/user-signin-response.dto';
import { UserSigninRequestDto } from '../dto/interface/user-signin-request.dto';

/**
 * 利用者サインインサービスクラス。
 */
@Injectable()
export class SigninService {

    /**
     * デフォルトコンストラクタ。
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
     * 新規利用者のサインインを実施します。
     * @param userSigninRequestDto
     * @returns Observable<UserSigninResponseDto>
     */
    public signin(userSigninRequestDto: UserSigninRequestDto): Observable<UserSigninResponseDto> {
        return this.http.post<UserSigninRequestDto>(ServiceConst.URL_USER_SIGNIN, userSigninRequestDto, { headers : this.httpHeaders })
            .pipe((res: Observable<UserSigninResponseDto>) => {
                // セッションの保存
                res.subscribe((res: UserSigninResponseDto) => localStorage.setItem('id', res.userId));
                return res;
            })
            .pipe(catchError(GlobalErrorHandler.handleError));
    }

}
