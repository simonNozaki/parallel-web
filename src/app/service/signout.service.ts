import { Injectable } from '@angular/core';
import { CommonDeliveryService } from './common-delivery.service';
import { ObjectUtil } from '../util/object.util';
import { CookieService } from 'ngx-cookie-service';

/**
 * 利用者サインアウトサービスクラス。
 */
@Injectable()
export class SignoutService {

    constructor(private commonDeliveryService: CommonDeliveryService, private cookieService: CookieService) { }

    /**
     * サインイン状態フラグ
     */
    private signedinFlag: boolean;

    /**
     * サインアウトを実施します。
     */
    public signout(): void {
        if(this.isSignedin()) {
            this.cookieService.delete("currentUser");
            this.commonDeliveryService.finalize();
        };
    };

    /**
     * 認証状態をチェックします。
     * @returns signedinFlag: boolean 認証フラグの状態
     */
    public isSignedin(): boolean {
        this.commonDeliveryService.observableUserId.subscribe((userId: string) => {
            if (ObjectUtil.isNullOrUndefined(userId)) {
                this.signedinFlag = false;
            } else {
                this.signedinFlag = true;
            }
        });
        return this.signedinFlag;
    };

}
