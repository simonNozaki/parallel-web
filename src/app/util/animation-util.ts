import { ElementRef } from "@angular/core";

/**
 * アニメーション関連の操作を提供するユーティリティクラスです。
 */
export class AnimationUtil {

    /**
     * スピナーを開始します。
     * @param スピナーを表示するDOM要素。ViewChild経由で取得されることを想定する。
     */
    public static startSpinner(spinner: ElementRef): void {
        let source = spinner.nativeElement;

        if(source.classList.contains("hidden")) {
            source.classList.remove("hidden");
        }
    }

    /**
     * スピナーを終了します。
     * @param spinner スピナーとなるDOM要素。
     */
    public static destroySpinner(spinner: ElementRef): void {
        let source = spinner.nativeElement;

        if(!source.classList.contains("hidden")) {
            source.classList.add("hidden");
        }
    }
}
