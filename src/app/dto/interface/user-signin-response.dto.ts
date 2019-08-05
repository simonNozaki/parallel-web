import { GeneralError } from "../common/general-error";

/**
 * 利用者サインインリクエストDTO。
 */
export class UserSigninResponseDto {

    public authenticationToken: string;

    /**
     * 利用者ID
     */
    public userId: string;

    /**
     * 利用者名
     */
    public userName: string;

    /**
     * 利用者メールアドレス
     */
    public email: string;

    /**
     * 利用者パスワード
     */
    public password: string;

    /**
     * エラーコード
     */
    public errors: GeneralError;
}