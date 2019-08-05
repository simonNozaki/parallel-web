import { Errors } from "../common/errors";

/**
 * 利用者サインアップレスポンスDTO。
 */
export class UserSignupResponseDto {

    /**
     * 利用者ID
     */
    public userId: string;

    /**
     * 利用者名
     */
    public userName: string;

    /**
     * エラーコード
     */
    public errors: Errors;
}