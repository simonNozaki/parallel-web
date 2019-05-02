webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ヘッダー -->\n<header>\n    <nav id=\"task-manager-common-header\">\n        <!-- 共通アプリタイトル -->\n        <a routerLink=\"/\" id=\"task-manager-common-header-title\">\n            Parallel\n        </a>\n    </nav>\n    <nav id=\"task-manager-header-links\">\n        <!-- 共通ナビゲーションリンク -->\n        <ul class=\"task-manager-header-items\">\n            <li *ngIf=\"isSignedin()\">\n                <a routerLink=\"/task\">管理する</a>\n            </li>\n            <li>\n                <a routerLink=\"/signup\">新しく始める</a>\n            </li>\n            <li *ngIf=\"!isSignedin()\">\n                <a routerLink=\"/signin\">ログインする</a>\n            </li>\n            <li *ngIf=\"isSignedin()\">\n                <a href=\"#\" (onclick)=\"signout()\">ログアウトする</a>\n            </li>\n        </ul>\n    </nav>\n    <router-outlet></router-outlet>\n</header>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style {\n  margin: 20px 20px;\n  text-align: center;\n  color: red; }\n/* ----------------------\n * 共通\n ----------------------*/\n/* 枠線反映しない */\ninput, button {\n  border-style: none;\n  border-radius: 5px; }\n/* リスト表示しない */\nul li {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n/* リンクの装飾を無効化 */\na {\n  text-decoration: none;\n  color: #000000; }\n/* 画面全体 */\nhtml {\n  height: 100%; }\n/* 共通フォント */\nbody {\n  height: 100%;\n  font-family: NotoSansCJKjp, メイリオ, Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; }\n/* タイトル用独自定義フォント */\n@font-face {\n  font-family: 'Product Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format(\"woff2\"); }\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style {\n  text-align: center;\n  color: red; }\n/* スタイルの変化仕様、ゆっくり */\n.base-transition-ease, #task-manager-header-links li:hover {\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-delay: 0;\n          transition-delay: 0; }\n/* 登録ボタン共通仕様。幅は利用箇所で指定する */\n.common-button-submit {\n  height: 40px;\n  font-size: 18px;\n  letter-spacing: normal;\n  text-align: center;\n  color: #000;\n  background-color: #00b686; }\n/* ----------------------\n * ヘッダーナビゲーション\n * ----------------------/\n/* ヘッダータイトル行 */\n#task-manager-common-header {\n  width: 100%;\n  height: 70px;\n  background-color: #1ef5bf;\n  padding: 0px;\n  margin: 0px;\n  border-bottom: 1px solid #bdbdbd; }\n#task-manager-common-header a {\n    font-family: Product Sans;\n    font-size: 60px; }\n/* 共通ヘッダー（リンクナビゲーション） */\n#task-manager-header-links {\n  width: 100%;\n  height: 50px;\n  background-color: #1ef5bf;\n  padding: 0px;\n  margin: 0;\n  text-align: right; }\n#task-manager-header-links ul {\n    display: inline-block;\n    padding: 0;\n    margin: 5px; }\n#task-manager-header-links li {\n    display: inline-block;\n    font-size: 20px;\n    border: 1px solid #bdbdbd;\n    border-radius: 3px; }\n#task-manager-header-links li:hover {\n    background-color: #bdbdbd; }\n/* ----------------------\n * 使い回しパーツ\n * ----------------------/\n\n/* マージン */\n.mt-50 {\n  margin-top: 50px; }\n.mt-20-centered {\n  margin: 20px 0 0 0; }\n.mt-50-centered {\n  margin: 50px 0 0 0; }\n.mt-20 {\n  margin-top: 20px; }\n.mb-50 {\n  margin-bottom: 50px; }\n.ml-20 {\n  margin-left: 20px; }\n/* パディング */\n.pt-50 {\n  padding-top: 50px; }\n.pt-50-centered {\n  padding: 50px 0 0 0; }\n.pt-20 {\n  padding-top: 20px; }\n.pr-20 {\n  padding-right: 20px; }\n.padding-leftright-10, #task-manager-common-header a, #task-manager-header-links li {\n  padding: 0 10px 0 10px; }\n.pl-20 {\n  padding-left: 20px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_signout_service__ = __webpack_require__("./src/app/service/signout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__const_service_const__ = __webpack_require__("./src/app/const/service-const.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * アプリケーションルートコンポーネントクラス。
 */
var AppComponent = /** @class */ (function () {
    /**
     * デフォルトコンストラクタ。
     */
    function AppComponent(signoutService, router) {
        this.signoutService = signoutService;
        this.router = router;
    }
    AppComponent.prototype.isSignedin = function () {
        return this.signoutService.isSignedin();
    };
    /**
     * ログアウトを実施して、トップページにリダイレクトします。
     */
    AppComponent.prototype.signout = function () {
        this.signoutService.signout();
        this.router.navigateByUrl(__WEBPACK_IMPORTED_MODULE_3__const_service_const__["a" /* ServiceConst */].BASE_SLASH);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_signout_service__["a" /* SignoutService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_task_task_component__ = __webpack_require__("./src/app/component/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes_web_web_module__ = __webpack_require__("./src/app/routes/web/web.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_task_service__ = __webpack_require__("./src/app/service/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_web_web_routing_module__ = __webpack_require__("./src/app/routes/web/web-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_user_signup_signup_component__ = __webpack_require__("./src/app/component/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_signup_service__ = __webpack_require__("./src/app/service/signup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_common_delivery_service__ = __webpack_require__("./src/app/service/common-delivery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_user_signin_signin_component__ = __webpack_require__("./src/app/component/user/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_signin_service__ = __webpack_require__("./src/app/service/signin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_task_label_service__ = __webpack_require__("./src/app/service/task-label.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_signout_service__ = __webpack_require__("./src/app/service/signout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_tasklabel_tasklabel_component__ = __webpack_require__("./src/app/component/tasklabel/tasklabel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_taskline_taskline_component__ = __webpack_require__("./src/app/component/taskline/taskline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__introduction_introduction_introduction_component__ = __webpack_require__("./src/app/introduction/introduction/introduction.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__component_task_task_component__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_user_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_15__component_user_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_19__component_tasklabel_tasklabel_component__["a" /* TasklabelComponent */],
                __WEBPACK_IMPORTED_MODULE_20__component_taskline_taskline_component__["a" /* TasklineComponent */],
                __WEBPACK_IMPORTED_MODULE_21__introduction_introduction_introduction_component__["a" /* IntroductionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__routes_web_web_module__["a" /* WebModule */],
                __WEBPACK_IMPORTED_MODULE_11__routes_web_web_routing_module__["a" /* WebRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCheckboxModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__service_task_service__["a" /* TaskService */],
                __WEBPACK_IMPORTED_MODULE_17__service_task_label_service__["a" /* TaskLabelService */],
                __WEBPACK_IMPORTED_MODULE_13__service_signup_service__["a" /* SignupService */],
                __WEBPACK_IMPORTED_MODULE_16__service_signin_service__["a" /* SigninService */],
                __WEBPACK_IMPORTED_MODULE_18__service_signout_service__["a" /* SignoutService */],
                __WEBPACK_IMPORTED_MODULE_14__service_common_delivery_service__["a" /* CommonDeliveryService */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]
                // ,
                // {
                //   provide: HTTP_INTERCEPTORS,
                //   useClass: XhrGlobalInterceptor, 
                //   multi: true
                // }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/codedef/task-manager-code.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskManagerCode; });
/**
 * task-manager-appのコード定義クラスです.
 */
var TaskManagerCode;
(function (TaskManagerCode) {
    //----------------------------
    // タスクコード定義
    //----------------------------
    /**
     * タスク完了フラグ：0, 登録済み
     */
    TaskManagerCode.TASK_COMPLETED_FLAG_REGISTED = "0";
    /**
     * タスク完了フラグ：1, 完了
     */
    TaskManagerCode.TASK_COMPLETED_FLAG_COMPLETED = "1";
    /**
     * タスク完了フラグ：2, 削除済み
     */
    TaskManagerCode.TASK_COMPLETED_FLAG_DELETED = "2";
    /**
     * タスクラベル利用フラグ：0、登録
     */
    TaskManagerCode.TASK_LABEL_REGISTRED = "0";
    /**
     * タスクラベル利用フラグ：1、削除済み
     */
    TaskManagerCode.TASK_LABEL_DELETED = "1";
    //----------------------------
    // 利用者コード定義
    //----------------------------
    /**
     * 利用者利用フラグ：0, 利用中
     */
    TaskManagerCode.USER_USED_FLAG_USED = "0";
    /**
     * 利用者利用フラグ：1,退会済み
     */
    TaskManagerCode.USER_USED_FLAG_DELETED = "1";
})(TaskManagerCode || (TaskManagerCode = {}));


/***/ }),

/***/ "./src/app/component/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- タスクリスト -->\n<div id=\"task-manager-task-container\">\n    <!-- タグコンテナ -->\n    <app-tasklabel></app-tasklabel>\n\n    <!-- タスクカードコンテナスペース -->\n    <div id=\"task-manager-task-card-container-space\" class=\"mt-50\">\n        <!-- 切り替えswitch -->\n        <div id=\"task-manager-task-switch-box\">\n            <div class=\"task-manager-task-switch-item\">\n                <a routerLink=\"/task\">\n                    <img src=\"../../../assets/images/list-ul-solid.svg\" alt=\"task-switch-item-list\">\n                </a>\n            </div>\n            <div class=\"task-manager-task-switch-item\">\n                <a routerLink=\"/task/timeline\">\n                    <img src=\"../../../assets/images/chart-bar-regular.svg\" alt=\"task-switch-item-list\">\n                </a>\n            </div>\n        </div>\n            \n        <!-- タスクカード -->\n        <div id=\"task-manager-task-cards\">\n            <ul>\n                <li *ngFor=\"let task of this.commonDeliveryService.userTasks\">\n                    <!-- 完了ボタン -->\n                    <button class=\"task-manager-task-cards-complete\" (click)=\"complete(task.taskId)\" ></button>\n                    <p class=\"task-manager-task-cards-title\"> {{ task.taskTitle }} </p>\n                    <p class=\"task-manager-task-cards-period\"> {{ task.startDate }} ~ {{ task.deadline }} </p>\n                    <p class=\"task-manager-task-cards-label\"> {{ task.taskLabel }} </p>\n                    <p> {{ task.taskNote }} </p>        \n                </li>\n                <li>\n                    <!-- タスク登録フォームコンテナ -->\n                    <form id=\"task-manager-task-form-container\" [formGroup]=\"taskForm\">\n                        <input class=\"task-manager-task-cards-title\" formControlName=\"taskTitleControl\" type=\"text\" name=\"taskTitle\" placeholder=\"タスクを入力 ...\" >\n                        <select class=\"task-manager-task-cards-label\" formControlName=\"taskLabelControl\">\n                            <option value='' disabled selected style='display:none;'>\n                                ラベルを選択\n                            </option>\n                            <option></option>\n                            <option *ngFor=\"let labelItem of this.commonDeliveryService.userLabels\" [value]=\"labelItem.taskLabel\" name=\"taskLabel\">\n                                {{ labelItem.taskLabel }}\n                            </option>\n                        </select>\n                        <input formControlName=\"startDateControl\" type=\"date\" name=\"startDate\" placeholder=\"開始日\">\n                         - \n                        <input formControlName=\"deadlineControl\" type=\"date\" name=\"deadline\" placeholder=\"終了日を入力\">\n                        <input class=\"task-manager-task-cards-note\" formControlName=\"taskNoteControl\" type=\"text\" name=\"taskNote\" placeholder=\"メモ\">\n                    </form>\n            </ul>\n            <!-- 登録ボタン -->\n            <button id=\"task-manager-task-submit-button\" class=\"mt-20\" (click)=\"registTask()\" [disabled]=\"\">タスクを追加</button>\n        </div>\n        <!-- 入力チェックエラー表示 -->\n        <div *ngIf=\"violateRistriction()\" class=\"base-error-message-style\"> {{ checkedResult }} </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/component/task/task.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style {\n  margin: 20px 20px;\n  text-align: center;\n  color: red; }\n/* ----------------------\n * 共通\n ----------------------*/\n/* 枠線反映しない */\ninput, button {\n  border-style: none;\n  border-radius: 5px; }\n/* リスト表示しない */\nul li {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n/* リンクの装飾を無効化 */\na {\n  text-decoration: none;\n  color: #000000; }\n/* 画面全体 */\nhtml {\n  height: 100%; }\n/* 共通フォント */\nbody {\n  height: 100%;\n  font-family: NotoSansCJKjp, メイリオ, Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; }\n/* タイトル用独自定義フォント */\n@font-face {\n  font-family: 'Product Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format(\"woff2\"); }\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style {\n  text-align: center;\n  color: red; }\n/* スタイルの変化仕様、ゆっくり */\n.base-transition-ease, #task-manager-header-links li:hover, .task-manager-task-switch-item, .task-manager-task-switch-item:hover, .task-manager-task-cards-complete {\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-delay: 0;\n          transition-delay: 0; }\n/* 登録ボタン共通仕様。幅は利用箇所で指定する */\n.common-button-submit, #task-manager-task-submit-button {\n  height: 40px;\n  font-size: 18px;\n  letter-spacing: normal;\n  text-align: center;\n  color: #000;\n  background-color: #00b686; }\n/* ----------------------\n * ヘッダーナビゲーション\n * ----------------------/\n/* ヘッダータイトル行 */\n#task-manager-common-header {\n  width: 100%;\n  height: 70px;\n  background-color: #1ef5bf;\n  padding: 0px;\n  margin: 0px;\n  border-bottom: 1px solid #bdbdbd; }\n#task-manager-common-header a {\n    font-family: Product Sans;\n    font-size: 60px; }\n/* 共通ヘッダー（リンクナビゲーション） */\n#task-manager-header-links {\n  width: 100%;\n  height: 50px;\n  background-color: #1ef5bf;\n  padding: 0px;\n  margin: 0;\n  text-align: right; }\n#task-manager-header-links ul {\n    display: inline-block;\n    padding: 0;\n    margin: 5px; }\n#task-manager-header-links li {\n    display: inline-block;\n    font-size: 20px;\n    border: 1px solid #bdbdbd;\n    border-radius: 3px; }\n#task-manager-header-links li:hover {\n    background-color: #bdbdbd; }\n/* ----------------------\n * 使い回しパーツ\n * ----------------------/\n\n/* マージン */\n.mt-50 {\n  margin-top: 50px; }\n.mt-20-centered {\n  margin: 20px 0 0 0; }\n.mt-50-centered {\n  margin: 50px 0 0 0; }\n.mt-20 {\n  margin-top: 20px; }\n.mb-50 {\n  margin-bottom: 50px; }\n.ml-20 {\n  margin-left: 20px; }\n/* パディング */\n.pt-50 {\n  padding-top: 50px; }\n.pt-50-centered {\n  padding: 50px 0 0 0; }\n.pt-20 {\n  padding-top: 20px; }\n.pr-20 {\n  padding-right: 20px; }\n.padding-leftright-10, #task-manager-common-header a, #task-manager-header-links li {\n  padding: 0 10px 0 10px; }\n.pl-20 {\n  padding-left: 20px; }\n/* ----------------------\n * 画面全体\n * ----------------------*/\n#task-manager-task-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n/* ----------------------\n * タスクカードコンテナ\n * ----------------------*/\n/* タスクカードコンテナスペース全体 */\n#task-manager-task-card-container-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 50px 50px; }\n/* 表示切り替えswitch, flexboxの親要素にする */\n#task-manager-task-switch-box {\n  margin: 0 auto;\n  padding: 0;\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n/* 切り替えswitchデフォルト */\n.task-manager-task-switch-item, .task-manager-task-switch-item:hover {\n  margin: 0 auto;\n  padding: 0;\n  -webkit-box-flex: 50%;\n      -ms-flex: 50%;\n          flex: 50%;\n  text-align: center; }\n.task-manager-task-switch-item img, .task-manager-task-switch-item:hover img {\n    width: 30px;\n    height: 30px; }\n.task-manager-task-switch-item:hover {\n    border-bottom: 1px solid #1ef5bf; }\n/* ----------------------\n * タスクカード\n * ----------------------*/\n/* カード本体 */\n#task-manager-task-cards ul {\n  margin: 0 auto;\n  padding: 0; }\n#task-manager-task-cards li {\n  margin-top: 20px;\n  height: 50px;\n  background-color: #ffffff;\n  border-bottom: 1px solid  #bdbdbd; }\n#task-manager-task-cards li > * {\n  height: 20px;\n  margin: 0;\n  display: inline-block; }\n/* タスク完了ボタンのスタイル、デフォルト */\n.task-manager-task-cards-complete {\n  width: 30px;\n  height: 30px;\n  background-color: #bdbdbd; }\n.task-manager-task-cards-complete:hover {\n    width: 30px;\n    height: 30px;\n    background-color: #fafafa; }\n.task-manager-task-cards-title {\n  width: 500px;\n  font-size: 20px;\n  letter-spacing: normal;\n  color: #000000; }\n.task-manager-task-cards-label {\n  width: 200px;\n  border-radius: 10px;\n  background-color: #6effe8;\n  font-size: 14px;\n  letter-spacing: normal;\n  color: #000000;\n  text-align: center; }\n.task-manager-task-cards-period {\n  width: 220px; }\n.task-manager-task-cards-note {\n  width: 300px;\n  font-size: 16px;\n  letter-spacing: normal;\n  color: #bdbdbd; }\n/* タスク登録ボタン */\n#task-manager-task-submit-button {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/component/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_task_service__ = __webpack_require__("./src/app/service/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_task__ = __webpack_require__("./src/app/entity/task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dto_interface_regist_task_request__ = __webpack_require__("./src/app/dto/interface/regist-task-request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__const_app_const__ = __webpack_require__("./src/app/const/app.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_object_util__ = __webpack_require__("./src/app/util/object.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dto_interface_task_complete_request_dto__ = __webpack_require__("./src/app/dto/interface/task-complete-request.dto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_common_delivery_service__ = __webpack_require__("./src/app/service/common-delivery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__const_service_const__ = __webpack_require__("./src/app/const/service-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_date_util__ = __webpack_require__("./src/app/util/date-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * タスクの業務処理コンポーネント
 */
var TaskComponent = /** @class */ (function () {
    /**
     * デフォルトコンストラクタ
     */
    function TaskComponent(taskService, router, commonDeliveryService) {
        this.taskService = taskService;
        this.router = router;
        this.commonDeliveryService = commonDeliveryService;
        /**
         * タスクリスト
         */
        this.tasks = [];
        /**
         * タスク登録のフォームグループ
         */
        this.taskForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            taskTitleControl: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].maxLength(__WEBPACK_IMPORTED_MODULE_5__const_app_const__["a" /* AppConst */].TASK_TITLE_MAX_LENGTH)]),
            taskLabelControl: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](""),
            startDateControl: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null),
            deadlineControl: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null),
            taskNoteControl: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].maxLength(__WEBPACK_IMPORTED_MODULE_5__const_app_const__["a" /* AppConst */].TASK_NOTE_MAX_LENGTH))
        });
    }
    /**
     * コンポーネント初期化時の起動処理
    */
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        // リダイレクトされたときに、別のコンポーネントから動的に利用者IDを受け取ります。
        this.commonDeliveryService.observableUserId.subscribe(function (userId) {
            _this.userId = userId;
        });
        // 利用者IDが正常に設定されていない場合、リダイレクトしてアクセスを拒否する
        if (__WEBPACK_IMPORTED_MODULE_6__util_object_util__["a" /* ObjectUtil */].isNullOrUndefined(this.userId)) {
            this.router.navigateByUrl(__WEBPACK_IMPORTED_MODULE_11__const_service_const__["a" /* ServiceConst */].BASE_SLASH + __WEBPACK_IMPORTED_MODULE_11__const_service_const__["a" /* ServiceConst */].URL_WEB_USER_SIGNIN);
        }
        // タスクのリストをプロパティに設定
        this.fetchTasks(this.userId);
        this.checkedResult = "";
    };
    /**
     * サービスクラスから、タスクの一覧を取得します.
     * @param userId: string
    */
    TaskComponent.prototype.fetchTasks = function (userId) {
        var _this = this;
        this.taskService.fetchTask(userId).subscribe(function (res) { return _this.commonDeliveryService.userTasks = res.tasks; });
    };
    /**
     * テンプレートから受け取ったタスクを登録します.
     * @param registTaskRequestDto: RegistTaskRequest
     * @returns void
    */
    TaskComponent.prototype.registTask = function () {
        // 入力チェックを違反していない場合、タスク登録処理を実行します
        if (this.isNotNull() && !this.violateRistriction()) {
            var registTaskRequestDto = new __WEBPACK_IMPORTED_MODULE_3__dto_interface_regist_task_request__["a" /* RegistTaskRequest */]();
            // 登録リクエストDTOの生成
            registTaskRequestDto.setTaskTitle(this.taskForm.get("taskTitleControl").value);
            this.taskForm.get("taskLabelControl").value != "" ? registTaskRequestDto.setTaskLabel(this.taskForm.get("taskLabelControl").value)
                : registTaskRequestDto.setTaskLabel(null);
            // registTaskRequestDto.setTaskLabel(this.taskForm.get("taskLabelControl").value);
            if (__WEBPACK_IMPORTED_MODULE_6__util_object_util__["a" /* ObjectUtil */].isNullOrUndefined(this.taskForm.get("startDateControl").value)) {
                registTaskRequestDto.setStartDate(__WEBPACK_IMPORTED_MODULE_12__util_date_util__["a" /* DateUtil */].formatDateYMDWithSlash(new Date()));
            }
            else {
                registTaskRequestDto.setStartDate(this.taskForm.get("startDateControl").value);
            }
            registTaskRequestDto.setDeadline(this.taskForm.get("deadlineControl").value);
            registTaskRequestDto.setTaskNote(this.taskForm.get("taskNoteControl").value);
            // registTaskRequestDto.setCompletedFlag(TaskManagerCode.TASK_COMPLETED_FLAG_REGISTED);
            registTaskRequestDto.setUserId(this.userId);
            // サービスクラスを実行します。
            this.taskService.registTask(registTaskRequestDto).subscribe(function (res) {
                console.log(JSON.stringify(res));
            });
            // 登録したタスクをリストに追加して、随時表を更新します。
            var newTask = new __WEBPACK_IMPORTED_MODULE_2__entity_task__["a" /* Task */]();
            newTask.setTaskTitle(registTaskRequestDto.getTaskTitle());
            newTask.setTaskLabel(registTaskRequestDto.getTaskLabel());
            newTask.setTaskNote(registTaskRequestDto.getTaskNote());
            newTask.setStartDate(registTaskRequestDto.getStartDate());
            newTask.setDeadline(registTaskRequestDto.getDeadline());
            this.commonDeliveryService.userTasks.push(newTask);
        }
    };
    /**
     * 入力必須項目に値が入っていることを確認します。
     * @returns boolean
     */
    TaskComponent.prototype.isNotNull = function () {
        if (__WEBPACK_IMPORTED_MODULE_6__util_object_util__["a" /* ObjectUtil */].isNullOrUndefined(this.taskForm.get("taskTitleControl").value)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_5__const_app_const__["a" /* AppConst */].TASK_TITLE_REQUIRED_VIOLATED;
            return false;
        }
        return true;
    };
    /**
     * 入力チェックに適合していることをチェックします。
     * @returns boolean
     */
    TaskComponent.prototype.violateRistriction = function () {
        // タスクタイトル。必須入力チェック
        var taskTitle = this.taskForm.get("taskTitleControl");
        if (__WEBPACK_IMPORTED_MODULE_6__util_object_util__["a" /* ObjectUtil */].isNullOrUndefined(this.taskForm.get("taskTitleControl").value) && taskTitle.hasError('required') && (taskTitle.dirty || taskTitle.touched)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_5__const_app_const__["a" /* AppConst */].TASK_TITLE_REQUIRED_VIOLATED;
            return true;
        }
        if (taskTitle.hasError('maxlength') && (taskTitle.dirty || taskTitle.touched)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_5__const_app_const__["a" /* AppConst */].TASK_TITLE_LENGTH_VIOLATED;
            return true;
        }
        // タスクメモ。200文字以内であることをチェックする
        var note = this.taskForm.get("taskNoteControl");
        if (note.hasError('maxlength') && (note.dirty || note.touched)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_5__const_app_const__["a" /* AppConst */].TASK_NOTE_LENGTH_VIOLATED;
            return true;
        }
        // 終了日。開始日との関係が正常であることを確認する
        var deadline = this.taskForm.get("deadlineControl").value;
        var startdate = this.taskForm.get("startDateControl").value;
        if (!__WEBPACK_IMPORTED_MODULE_6__util_object_util__["a" /* ObjectUtil */].isNullOrUndefined(deadline) && __WEBPACK_IMPORTED_MODULE_12__util_date_util__["a" /* DateUtil */].isForwardFromComparison(deadline, startdate)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_5__const_app_const__["a" /* AppConst */].DEADLINE_SET_BEFORE_START_DATE;
            return true;
        }
        return false;
    };
    /**
     * タスクを完了します。
     * @param taskId: string
     * @returns void
     */
    TaskComponent.prototype.complete = function (taskId) {
        var _this = this;
        // リクエストDTOの初期化
        var taskCompleteRequestDto = new __WEBPACK_IMPORTED_MODULE_7__dto_interface_task_complete_request_dto__["a" /* TaskCompleteRequestDto */]();
        taskCompleteRequestDto.setTaskId(taskId);
        // サービスクラスの実行。レスポンスが帰ってきてたら、タスクのリストから削除。
        this.taskService.complete(taskCompleteRequestDto).subscribe(function (res) {
            if (!__WEBPACK_IMPORTED_MODULE_6__util_object_util__["a" /* ObjectUtil */].isNullOrUndefined(res.taskId)) {
                // 完了したタスクを抽出
                var completedTask = __WEBPACK_IMPORTED_MODULE_8_underscore__["_"].where(_this.commonDeliveryService.userTasks, { taskId: res.taskId });
                // 完了したタスクのINDEXを取得
                var index = __WEBPACK_IMPORTED_MODULE_8_underscore__["_"].indexOf(_this.commonDeliveryService.userTasks, completedTask);
                // タスクのリストから削除
                _this.commonDeliveryService.userTasks.splice(index, 1);
            }
        });
    };
    TaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task',
            template: __webpack_require__("./src/app/component/task/task.component.html"),
            styles: [__webpack_require__("./src/app/component/task/task.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_9__service_common_delivery_service__["a" /* CommonDeliveryService */]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/component/tasklabel/tasklabel.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- タグコンテナ -->\n<div id=\"task-manager-task-label-container\">\n    <ul>\n        <li (click)=\"filterTasks($event, null)\">\n            すべて\n        </li>\n        <!-- <li *ngFor=\"let labelItem of labels\" class=\"pt-20\"> -->\n        <li *ngFor=\"let labelItem of this.commonDeliveryService.userLabels\" class=\"pt-20\" (click)=\"filterTasks($event, labelItem)\">\n            {{ labelItem.taskLabel }}\n        </li>\n    </ul>\n\n    <!-- タグ登録フォームコンテナ -->\n    <form [formGroup]=\"taskLabelForm\" id=\"task-manager-task-label-form-container\">\n        <input formControlName=\"taskLabelControl\" type=\"text\" name=\"taskLabel\" placeholder=\"タグを入力\" >\n        <button class=\"mt-20\" (click)=\"registerLabel()\" [disabled]=\"\">タグを追加</button>\n        <!-- 入力チェックエラー表示 -->\n        <div *ngIf=\"violateRistriction()\" id=\"task-manager-task-label-error\">\n            <p>\n                {{ labelCheckedResult }}\n            </p>\n      </div>\n    </form>    \n</div>\n"

/***/ }),

/***/ "./src/app/component/tasklabel/tasklabel.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style, #task-manager-task-label-error {\n  margin: 20px 20px;\n  text-align: center;\n  color: red; }\n/* ----------------------\n * 共通\n ----------------------*/\n/* 枠線反映しない */\ninput, button {\n  border-style: none;\n  border-radius: 5px; }\n/* リスト表示しない */\nul li {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n/* リンクの装飾を無効化 */\na {\n  text-decoration: none;\n  color: #000000; }\n/* 画面全体 */\nhtml {\n  height: 100%; }\n/* 共通フォント */\nbody {\n  height: 100%;\n  font-family: NotoSansCJKjp, メイリオ, Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; }\n/* タイトル用独自定義フォント */\n@font-face {\n  font-family: 'Product Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format(\"woff2\"); }\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style, #task-manager-task-label-error {\n  text-align: center;\n  color: red; }\n/* スタイルの変化仕様、ゆっくり */\n.base-transition-ease, #task-manager-header-links li:hover {\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-delay: 0;\n          transition-delay: 0; }\n/* 登録ボタン共通仕様。幅は利用箇所で指定する */\n.common-button-submit, #task-manager-task-label-form-container button {\n  height: 40px;\n  font-size: 18px;\n  letter-spacing: normal;\n  text-align: center;\n  color: #000;\n  background-color: #00b686; }\n/* ----------------------\n * ヘッダーナビゲーション\n * ----------------------/\n/* ヘッダータイトル行 */\n#task-manager-common-header {\n  width: 100%;\n  height: 70px;\n  background-color: #1ef5bf;\n  padding: 0px;\n  margin: 0px;\n  border-bottom: 1px solid #bdbdbd; }\n#task-manager-common-header a {\n    font-family: Product Sans;\n    font-size: 60px; }\n/* 共通ヘッダー（リンクナビゲーション） */\n#task-manager-header-links {\n  width: 100%;\n  height: 50px;\n  background-color: #1ef5bf;\n  padding: 0px;\n  margin: 0;\n  text-align: right; }\n#task-manager-header-links ul {\n    display: inline-block;\n    padding: 0;\n    margin: 5px; }\n#task-manager-header-links li {\n    display: inline-block;\n    font-size: 20px;\n    border: 1px solid #bdbdbd;\n    border-radius: 3px; }\n#task-manager-header-links li:hover {\n    background-color: #bdbdbd; }\n/* ----------------------\n * 使い回しパーツ\n * ----------------------/\n\n/* マージン */\n.mt-50 {\n  margin-top: 50px; }\n.mt-20-centered, #task-manager-task-label-form-container button {\n  margin: 20px 0 0 0; }\n.mt-50-centered {\n  margin: 50px 0 0 0; }\n.mt-20 {\n  margin-top: 20px; }\n.mb-50 {\n  margin-bottom: 50px; }\n.ml-20 {\n  margin-left: 20px; }\n/* パディング */\n.pt-50 {\n  padding-top: 50px; }\n.pt-50-centered, #task-manager-task-label-container ul {\n  padding: 50px 0 0 0; }\n.pt-20 {\n  padding-top: 20px; }\n.pr-20 {\n  padding-right: 20px; }\n.padding-leftright-10, #task-manager-common-header a, #task-manager-header-links li {\n  padding: 0 10px 0 10px; }\n.pl-20 {\n  padding-left: 20px; }\n/* ----------------------\n * タグコンテナ\n * ----------------------*/\n#task-manager-task-label-container {\n  width: 250px;\n  height: 100vh;\n  background-color: #fafafa;\n  text-align: center; }\n#task-manager-task-label-container ul {\n    height: 430px;\n    padding: 0;\n    overflow: auto;\n    margin: 0 auto; }\n#task-manager-task-label-container ul li {\n    margin: 0 auto;\n    padding: 10px 0;\n    text-align: center; }\n#task-manager-task-label-container li:hover {\n    background-color: #bdbdbd; }\n/* タグ登録フォーム */\n#task-manager-task-label-form-container {\n  border-top: #bdbdbd;\n  width: 100%;\n  text-align: center; }\n#task-manager-task-label-form-container input {\n    width: 200px;\n    height: 40px;\n    font-size: 18px;\n    letter-spacing: normal;\n    display: inline-block;\n    text-align: center;\n    color: #bdbdbd;\n    background-color: #fafafa; }\n#task-manager-task-label-form-container button {\n    width: 200px; }\n/* エラー表示 */\n"

/***/ }),

/***/ "./src/app/component/tasklabel/tasklabel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasklabelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_delivery_service__ = __webpack_require__("./src/app/service/common-delivery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_task_label_service__ = __webpack_require__("./src/app/service/task-label.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_task_label__ = __webpack_require__("./src/app/entity/task-label.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__const_app_const__ = __webpack_require__("./src/app/const/app.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dto_interface_task_label_register_request_dto__ = __webpack_require__("./src/app/dto/interface/task-label-register-request.dto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__codedef_task_manager_code__ = __webpack_require__("./src/app/codedef/task-manager-code.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_task_service__ = __webpack_require__("./src/app/service/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_object_util__ = __webpack_require__("./src/app/util/object.util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * タスクラベル処理コンポーネント
 */
var TasklabelComponent = /** @class */ (function () {
    /**
     * デフォルトコンストラクタ
     */
    function TasklabelComponent(commonDeliveryService, taskLabelService, taskService) {
        this.commonDeliveryService = commonDeliveryService;
        this.taskLabelService = taskLabelService;
        this.taskService = taskService;
        /**
         * ラベルチェック結果
         */
        this.labelCheckedResult = null;
        /**
         * タスクラベルリスト
         */
        this.labels = [];
        /**
         * タスクリスト、コンポーネント内でのタスクのマスタリスト
         */
        this.tasks = [];
        /**
         * タスクラベル登録フォームグループ
         */
        this.taskLabelForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            taskLabelControl: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].maxLength(__WEBPACK_IMPORTED_MODULE_5__const_app_const__["a" /* AppConst */].TASK_LABEL_MAX_LENGTH)])
        });
    }
    TasklabelComponent.prototype.ngOnInit = function () {
        var _this = this;
        // サインイン時のIDを引き受ける
        this.commonDeliveryService.observableUserId.subscribe(function (userId) {
            _this.userId = userId;
        });
        // タスクラベルのリストをプロパティに設定
        this.fetchLabels(this.userId);
        // タスクのリストをプロパティに指定
        this.fetchTasks(this.userId);
    };
    /**
     * 利用者の保持するタスクラベルのリストを取得します。
     * @param userId: string 利用者ID
     */
    TasklabelComponent.prototype.fetchLabels = function (userId) {
        var _this = this;
        this.taskLabelService.fetch(userId).subscribe(function (res) {
            // 共通データ授受サービス内の配列に格納しておく
            _this.commonDeliveryService.userLabels = res.labels;
        });
    };
    /**
     * サービスクラスから、タスクの一覧を取得します.
     * @param userId: string
     */
    TasklabelComponent.prototype.fetchTasks = function (userId) {
        var _this = this;
        this.taskService.fetchTask(userId).subscribe(function (res) { return _this.tasks = res.tasks; });
    };
    /**
     * ラベルを新規登録します。
     */
    TasklabelComponent.prototype.registerLabel = function () {
        var _this = this;
        // リクエストオブジェクトを初期化
        var req = new __WEBPACK_IMPORTED_MODULE_6__dto_interface_task_label_register_request_dto__["a" /* TaskLabelRegisterRequestDto */]();
        req.taskLabel = this.taskLabelForm.get("taskLabelControl").value;
        req.usedFlag = __WEBPACK_IMPORTED_MODULE_7__codedef_task_manager_code__["a" /* TaskManagerCode */].TASK_LABEL_REGISTRED;
        req.userId = this.userId;
        // 正常に登録できたら、リストに追加する
        this.taskLabelService.registerLabel(req).subscribe(function (res) {
            var label = new __WEBPACK_IMPORTED_MODULE_3__entity_task_label__["a" /* TaskLabel */]();
            label.labelId = res.labelId;
            label.taskLabel = res.taskLabel;
            label.usedFlag = __WEBPACK_IMPORTED_MODULE_7__codedef_task_manager_code__["a" /* TaskManagerCode */].TASK_LABEL_REGISTRED;
            label.userId = _this.userId;
            _this.commonDeliveryService.userLabels.push(label);
        });
    };
    /**
     * 入力チェックに適合していることをチェックします。
     * @returns boolean
     */
    TasklabelComponent.prototype.violateRistriction = function () {
        // 20桁以内であることをチェックする、ラベルの最大文字列は登録段階でのみ弾く
        var label = this.taskLabelForm.get("taskLabelControl");
        if (label.hasError('required') && (label.dirty || label.touched)) {
            this.labelCheckedResult = __WEBPACK_IMPORTED_MODULE_5__const_app_const__["a" /* AppConst */].TASK_LABEL_REQUIRED_VIOLATED;
            return true;
        }
        else if (label.hasError('maxlength') && (label.dirty || label.touched)) {
            this.labelCheckedResult = __WEBPACK_IMPORTED_MODULE_5__const_app_const__["a" /* AppConst */].TASK_LABEL_LENGTH_VIOLATED;
            return true;
        }
        return false;
    };
    /**
     * ラベルでタスクをフィルターします。
     */
    TasklabelComponent.prototype.filterTasks = function (event, labelItem) {
        // nullを渡されたらリストを初期化する
        if (__WEBPACK_IMPORTED_MODULE_10__util_object_util__["a" /* ObjectUtil */].isNullOrUndefined(labelItem)) {
            this.commonDeliveryService.userTasks = this.tasks;
        }
        else {
            // 画面から受け取ったラベルに合致するタスクのリストを生成する
            this.commonDeliveryService.userTasks = __WEBPACK_IMPORTED_MODULE_8_underscore__["_"].filter(this.tasks, function (task) { return task.taskLabel === labelItem.taskLabel; });
        }
    };
    TasklabelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tasklabel',
            template: __webpack_require__("./src/app/component/tasklabel/tasklabel.component.html"),
            styles: [__webpack_require__("./src/app/component/tasklabel/tasklabel.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_delivery_service__["a" /* CommonDeliveryService */], __WEBPACK_IMPORTED_MODULE_2__service_task_label_service__["a" /* TaskLabelService */], __WEBPACK_IMPORTED_MODULE_9__service_task_service__["a" /* TaskService */]])
    ], TasklabelComponent);
    return TasklabelComponent;
}());



/***/ }),

/***/ "./src/app/component/taskline/taskline.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"task-manager-taskline-container\">\n    <!-- タグコンテナ -->\n    <app-tasklabel></app-tasklabel>\n\n    <!-- タスクカードコンテナスペース -->\n    <div id=\"task-manager-task-timeline-container-space\" class=\"mt-50\">\n        <!-- 切り替えswitch -->\n        <div id=\"task-manager-task-switch-box\">\n            <div class=\"task-manager-task-switch-item\">\n                <a routerLink=\"/task\">\n                    <img src=\"../../../assets/images/list-ul-solid.svg\" alt=\"task-switch-item-list\">\n                </a>\n            </div>\n            <div class=\"task-manager-task-switch-item\">\n                <a routerLink=\"/task/timeline\">\n                    <img src=\"../../../assets/images/chart-bar-regular.svg\" alt=\"task-switch-item-list\">\n                </a>\n            </div>\n        </div>\n\n        <!-- プロジェクト別表示リスト -->\n        <div id=\"task-manager-timeline-items\" *ngFor=\"let relation of relations\">\n            <h1> {{ relation.taskLabel }} </h1>\n            <!-- タスクごとに小さい表を繰り返し表示する -->\n            <table *ngFor=\"let task of relation.tasks\">\n                <thead>\n                    <tr>\n                        \n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            {{ task.taskTitle }}\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/taskline/taskline.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style {\n  margin: 20px 20px;\n  text-align: center;\n  color: red; }\n/* ----------------------\n * 共通\n ----------------------*/\n/* 枠線反映しない */\ninput, button {\n  border-style: none;\n  border-radius: 5px; }\n/* リスト表示しない */\nul li {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n/* リンクの装飾を無効化 */\na {\n  text-decoration: none;\n  color: #000000; }\n/* 画面全体 */\nhtml {\n  height: 100%; }\n/* 共通フォント */\nbody {\n  height: 100%;\n  font-family: NotoSansCJKjp, メイリオ, Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; }\n/* タイトル用独自定義フォント */\n@font-face {\n  font-family: 'Product Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format(\"woff2\"); }\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style {\n  text-align: center;\n  color: red; }\n/* スタイルの変化仕様、ゆっくり */\n.base-transition-ease, #task-manager-header-links li:hover, .task-manager-task-switch-item, .task-manager-task-switch-item:hover, .task-manager-task-cards-complete {\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-delay: 0;\n          transition-delay: 0; }\n/* 登録ボタン共通仕様。幅は利用箇所で指定する */\n.common-button-submit, #task-manager-task-submit-button {\n  height: 40px;\n  font-size: 18px;\n  letter-spacing: normal;\n  text-align: center;\n  color: #000;\n  background-color: #00b686; }\n/* ----------------------\n * ヘッダーナビゲーション\n * ----------------------/\n/* ヘッダータイトル行 */\n#task-manager-common-header {\n  width: 100%;\n  height: 70px;\n  background-color: #1ef5bf;\n  padding: 0px;\n  margin: 0px;\n  border-bottom: 1px solid #bdbdbd; }\n#task-manager-common-header a {\n    font-family: Product Sans;\n    font-size: 60px; }\n/* 共通ヘッダー（リンクナビゲーション） */\n#task-manager-header-links {\n  width: 100%;\n  height: 50px;\n  background-color: #1ef5bf;\n  padding: 0px;\n  margin: 0;\n  text-align: right; }\n#task-manager-header-links ul {\n    display: inline-block;\n    padding: 0;\n    margin: 5px; }\n#task-manager-header-links li {\n    display: inline-block;\n    font-size: 20px;\n    border: 1px solid #bdbdbd;\n    border-radius: 3px; }\n#task-manager-header-links li:hover {\n    background-color: #bdbdbd; }\n/* ----------------------\n * 使い回しパーツ\n * ----------------------/\n\n/* マージン */\n.mt-50 {\n  margin-top: 50px; }\n.mt-20-centered {\n  margin: 20px 0 0 0; }\n.mt-50-centered {\n  margin: 50px 0 0 0; }\n.mt-20 {\n  margin-top: 20px; }\n.mb-50 {\n  margin-bottom: 50px; }\n.ml-20 {\n  margin-left: 20px; }\n/* パディング */\n.pt-50 {\n  padding-top: 50px; }\n.pt-50-centered {\n  padding: 50px 0 0 0; }\n.pt-20 {\n  padding-top: 20px; }\n.pr-20 {\n  padding-right: 20px; }\n.padding-leftright-10, #task-manager-common-header a, #task-manager-header-links li {\n  padding: 0 10px 0 10px; }\n.pl-20 {\n  padding-left: 20px; }\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style {\n  margin: 20px 20px;\n  text-align: center;\n  color: red; }\n/* ----------------------\n * 共通\n ----------------------*/\n/* 枠線反映しない */\ninput, button {\n  border-style: none;\n  border-radius: 5px; }\n/* リスト表示しない */\nul li {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n/* リンクの装飾を無効化 */\na {\n  text-decoration: none;\n  color: #000000; }\n/* 画面全体 */\nhtml {\n  height: 100%; }\n/* 共通フォント */\nbody {\n  height: 100%;\n  font-family: NotoSansCJKjp, メイリオ, Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; }\n/* タイトル用独自定義フォント */\n@font-face {\n  font-family: 'Product Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format(\"woff2\"); }\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style {\n  text-align: center;\n  color: red; }\n/* スタイルの変化仕様、ゆっくり */\n.base-transition-ease, #task-manager-header-links li:hover, .task-manager-task-switch-item, .task-manager-task-switch-item:hover, .task-manager-task-cards-complete {\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-delay: 0;\n          transition-delay: 0; }\n/* 登録ボタン共通仕様。幅は利用箇所で指定する */\n.common-button-submit, #task-manager-task-submit-button {\n  height: 40px;\n  font-size: 18px;\n  letter-spacing: normal;\n  text-align: center;\n  color: #000;\n  background-color: #00b686; }\n/* ----------------------\n * ヘッダーナビゲーション\n * ----------------------/\n/* ヘッダータイトル行 */\n#task-manager-common-header {\n  width: 100%;\n  height: 70px;\n  background-color: #1ef5bf;\n  padding: 0px;\n  margin: 0px;\n  border-bottom: 1px solid #bdbdbd; }\n#task-manager-common-header a {\n    font-family: Product Sans;\n    font-size: 60px; }\n/* 共通ヘッダー（リンクナビゲーション） */\n#task-manager-header-links {\n  width: 100%;\n  height: 50px;\n  background-color: #1ef5bf;\n  padding: 0px;\n  margin: 0;\n  text-align: right; }\n#task-manager-header-links ul {\n    display: inline-block;\n    padding: 0;\n    margin: 5px; }\n#task-manager-header-links li {\n    display: inline-block;\n    font-size: 20px;\n    border: 1px solid #bdbdbd;\n    border-radius: 3px; }\n#task-manager-header-links li:hover {\n    background-color: #bdbdbd; }\n/* ----------------------\n * 使い回しパーツ\n * ----------------------/\n\n/* マージン */\n.mt-50 {\n  margin-top: 50px; }\n.mt-20-centered {\n  margin: 20px 0 0 0; }\n.mt-50-centered {\n  margin: 50px 0 0 0; }\n.mt-20 {\n  margin-top: 20px; }\n.mb-50 {\n  margin-bottom: 50px; }\n.ml-20 {\n  margin-left: 20px; }\n/* パディング */\n.pt-50 {\n  padding-top: 50px; }\n.pt-50-centered {\n  padding: 50px 0 0 0; }\n.pt-20 {\n  padding-top: 20px; }\n.pr-20 {\n  padding-right: 20px; }\n.padding-leftright-10, #task-manager-common-header a, #task-manager-header-links li {\n  padding: 0 10px 0 10px; }\n.pl-20 {\n  padding-left: 20px; }\n/* ----------------------\n * 画面全体\n * ----------------------*/\n#task-manager-task-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n/* ----------------------\n * タスクカードコンテナ\n * ----------------------*/\n/* タスクカードコンテナスペース全体 */\n#task-manager-task-card-container-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 50px 50px; }\n/* 表示切り替えswitch, flexboxの親要素にする */\n#task-manager-task-switch-box {\n  margin: 0 auto;\n  padding: 0;\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n/* 切り替えswitchデフォルト */\n.task-manager-task-switch-item, .task-manager-task-switch-item:hover {\n  margin: 0 auto;\n  padding: 0;\n  -webkit-box-flex: 50%;\n      -ms-flex: 50%;\n          flex: 50%;\n  text-align: center; }\n.task-manager-task-switch-item img, .task-manager-task-switch-item:hover img {\n    width: 30px;\n    height: 30px; }\n.task-manager-task-switch-item:hover {\n    border-bottom: 1px solid #1ef5bf; }\n/* ----------------------\n * タスクカード\n * ----------------------*/\n/* カード本体 */\n#task-manager-task-cards ul {\n  margin: 0 auto;\n  padding: 0; }\n#task-manager-task-cards li {\n  margin-top: 20px;\n  height: 50px;\n  background-color: #ffffff;\n  border-bottom: 1px solid  #bdbdbd; }\n#task-manager-task-cards li > * {\n  height: 20px;\n  margin: 0;\n  display: inline-block; }\n/* タスク完了ボタンのスタイル、デフォルト */\n.task-manager-task-cards-complete {\n  width: 30px;\n  height: 30px;\n  background-color: #bdbdbd; }\n.task-manager-task-cards-complete:hover {\n    width: 30px;\n    height: 30px;\n    background-color: #fafafa; }\n.task-manager-task-cards-title {\n  width: 500px;\n  font-size: 20px;\n  letter-spacing: normal;\n  color: #000000; }\n.task-manager-task-cards-label {\n  width: 200px;\n  border-radius: 10px;\n  background-color: #6effe8;\n  font-size: 14px;\n  letter-spacing: normal;\n  color: #000000;\n  text-align: center; }\n.task-manager-task-cards-period {\n  width: 220px; }\n.task-manager-task-cards-note {\n  width: 300px;\n  font-size: 16px;\n  letter-spacing: normal;\n  color: #bdbdbd; }\n/* タスク登録ボタン */\n#task-manager-task-submit-button {\n  width: 100%; }\n/* ----------------------\n * 画面全体\n * ----------------------*/\n#task-manager-taskline-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n/* ----------------------\n * タスクカードコンテナ\n * ----------------------*/\n/* タスクカードコンテナスペース全体 */\n#task-manager-task-timeline-container-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 50px 50px; }\n/* タスクカードコンテナ */\n#task-manager-task-card-container {\n  width: 800px;\n  height: 550px;\n  margin: 0 auto;\n  margin-top: 50px;\n  padding: 0;\n  background-color: #fafafa; }\n/* 表示切り替えswitch, flexboxの親要素にする */\n#task-manager-task-switch-box {\n  margin: 0 auto;\n  padding: 0;\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n/* 切り替えswitchデフォルト */\n.task-manager-task-switch-item, .task-manager-task-switch-item:hover {\n  margin: 0 auto;\n  padding: 0;\n  -webkit-box-flex: 50%;\n      -ms-flex: 50%;\n          flex: 50%;\n  text-align: center; }\n.task-manager-task-switch-item img, .task-manager-task-switch-item:hover img {\n    width: 30px;\n    height: 30px; }\n.task-manager-task-switch-item:hover {\n  border-bottom: 1px solid #1ef5bf; }\n"

/***/ }),

/***/ "./src/app/component/taskline/taskline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasklineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_delivery_service__ = __webpack_require__("./src/app/service/common-delivery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_task_service__ = __webpack_require__("./src/app/service/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_object_util__ = __webpack_require__("./src/app/util/object.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__const_service_const__ = __webpack_require__("./src/app/const/service-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dto_task_label_relation__ = __webpack_require__("./src/app/dto/task-label-relation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_collection_util__ = __webpack_require__("./src/app/util/collection-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * タスクタイムラインコンポーネント
 */
var TasklineComponent = /** @class */ (function () {
    function TasklineComponent(taskService, router, commonDeliveryService) {
        this.taskService = taskService;
        this.router = router;
        this.commonDeliveryService = commonDeliveryService;
        /**
         * タスクリスト
         */
        this.tasks = [];
        /**
         * タスクラベル
         */
        this.labels = [];
        /**
         * タスクのラベルと一覧の関係配列オブジェクト
         */
        this.relations = [];
    }
    /**
     * コンポーネント初期化時の起動処理
    */
    TasklineComponent.prototype.ngOnInit = function () {
        var _this = this;
        // リダイレクトされたときに、別のコンポーネントから動的に利用者IDを受け取ります。
        this.commonDeliveryService.observableUserId.subscribe(function (userId) { return _this.userId = userId; });
        // 利用者IDが正常に設定されていない場合、リダイレクトしてアクセスを拒否する
        if (__WEBPACK_IMPORTED_MODULE_4__util_object_util__["a" /* ObjectUtil */].isNullOrUndefined(this.userId)) {
            this.router.navigateByUrl(__WEBPACK_IMPORTED_MODULE_5__const_service_const__["a" /* ServiceConst */].BASE_SLASH + __WEBPACK_IMPORTED_MODULE_5__const_service_const__["a" /* ServiceConst */].URL_WEB_USER_SIGNIN);
        }
        // タスクのリストをプロパティに設定
        this.tasks = this.commonDeliveryService.userTasks;
        // ラベルをプロパティに設定
        this.labels = this.commonDeliveryService.userLabels;
        // ラベル別にソートしたプロジェクトタスクの関係性を設定
        this.setProjects();
        console.log(JSON.stringify(this.relations));
    };
    /**
     * プロジェクトの名前およびタスクの関係を設定します。
     */
    TasklineComponent.prototype.setProjects = function () {
        // ユーザがラベルを登録していることを確認する
        if (__WEBPACK_IMPORTED_MODULE_7__util_collection_util__["a" /* CollectionUtil */].hasItems(this.commonDeliveryService.userLabels) && __WEBPACK_IMPORTED_MODULE_7__util_collection_util__["a" /* CollectionUtil */].hasItems(this.commonDeliveryService.userTasks)) {
            for (var _i = 0, _a = this.commonDeliveryService.userLabels; _i < _a.length; _i++) {
                var label = _a[_i];
                var filteredTasks = [];
                for (var _b = 0, _c = this.tasks; _b < _c.length; _b++) {
                    var task = _c[_b];
                    if (label.taskLabel === task.taskLabel) {
                        filteredTasks.push(task);
                    }
                }
                var relation = new __WEBPACK_IMPORTED_MODULE_6__dto_task_label_relation__["a" /* TaskLabelRelation */]();
                relation.taskLabel = label.taskLabel;
                relation.tasks = filteredTasks;
                // フィルターしたタスクの表とラベル名をリレーションに設定する
                this.relations.push(relation);
            }
        }
    };
    TasklineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-taskline',
            template: __webpack_require__("./src/app/component/taskline/taskline.component.html"),
            styles: [__webpack_require__("./src/app/component/taskline/taskline.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__service_common_delivery_service__["a" /* CommonDeliveryService */]])
    ], TasklineComponent);
    return TasklineComponent;
}());



/***/ }),

/***/ "./src/app/component/user/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <!-- 見出しタイトル -->\n    <h1 id=\"task-manager-signin-title\">\n        サインインしてParallelを続ける\n    </h1>\n\n    <!-- 入力フォームコンテナ -->\n    <form [formGroup]=\"signinForm\" id=\"task-manager-signin-item-container\">\n        <input formControlName=\"emailControl\" type=\"email\" name=\"email\" placeholder=\"メールアドレス\" >\n        <input formControlName=\"passwordControl\" type=\"password\" name=\"password\" placeholder=\"パスワード\" >\n        <button (click)=\"signin()\" [disabled]=\"\">サインイン</button>\n\n        <!-- 入力チェックエラー表示 -->\n        <div *ngIf=\"violateRistriction()\" id=\"task-manager-signin-error\">\n            <p>\n                {{ checkedResult }}\n            </p>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/component/user/signin/signin.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style, #task-manager-signin-error {\n  margin: 20px 20px;\n  text-align: center;\n  color: red; }\n/* ----------------------\n * 共通\n ----------------------*/\n/* 枠線反映しない */\ninput, button {\n  border-style: none;\n  border-radius: 5px; }\n/* リスト表示しない */\nul li {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n/* リンクの装飾を無効化 */\na {\n  text-decoration: none;\n  color: #000000; }\n/* 画面全体 */\nhtml {\n  height: 100%; }\n/* 共通フォント */\nbody {\n  height: 100%;\n  font-family: NotoSansCJKjp, メイリオ, Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; }\n/* タイトル用独自定義フォント */\n@font-face {\n  font-family: 'Product Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format(\"woff2\"); }\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style, #task-manager-signin-error {\n  text-align: center;\n  color: red; }\n/* スタイルの変化仕様、ゆっくり */\n.base-transition-ease, #task-manager-header-links li:hover {\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-delay: 0;\n          transition-delay: 0; }\n/* 登録ボタン共通仕様。幅は利用箇所で指定する */\n.common-button-submit {\n  height: 40px;\n  font-size: 18px;\n  letter-spacing: normal;\n  text-align: center;\n  color: #000;\n  background-color: #00b686; }\n/* ----------------------\n * ヘッダーナビゲーション\n * ----------------------/\n/* ヘッダータイトル行 */\n#task-manager-common-header {\n  width: 100%;\n  height: 70px;\n  background-color: #1ef5bf;\n  padding: 0px;\n  margin: 0px;\n  border-bottom: 1px solid #bdbdbd; }\n#task-manager-common-header a {\n    font-family: Product Sans;\n    font-size: 60px; }\n/* 共通ヘッダー（リンクナビゲーション） */\n#task-manager-header-links {\n  width: 100%;\n  height: 50px;\n  background-color: #1ef5bf;\n  padding: 0px;\n  margin: 0;\n  text-align: right; }\n#task-manager-header-links ul {\n    display: inline-block;\n    padding: 0;\n    margin: 5px; }\n#task-manager-header-links li {\n    display: inline-block;\n    font-size: 20px;\n    border: 1px solid #bdbdbd;\n    border-radius: 3px; }\n#task-manager-header-links li:hover {\n    background-color: #bdbdbd; }\n/* ----------------------\n * 使い回しパーツ\n * ----------------------/\n\n/* マージン */\n.mt-50 {\n  margin-top: 50px; }\n.mt-20-centered {\n  margin: 20px 0 0 0; }\n.mt-50-centered {\n  margin: 50px 0 0 0; }\n.mt-20 {\n  margin-top: 20px; }\n.mb-50 {\n  margin-bottom: 50px; }\n.ml-20 {\n  margin-left: 20px; }\n/* パディング */\n.pt-50 {\n  padding-top: 50px; }\n.pt-50-centered {\n  padding: 50px 0 0 0; }\n.pt-20 {\n  padding-top: 20px; }\n.pr-20 {\n  padding-right: 20px; }\n.padding-leftright-10, #task-manager-common-header a, #task-manager-header-links li {\n  padding: 0 10px 0 10px; }\n.pl-20 {\n  padding-left: 20px; }\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style, #task-manager-signin-error {\n  margin: 20px 20px;\n  text-align: center;\n  color: red; }\n/* ----------------------\n * 画面見出し\n * ---------------------*/\n#task-manager-signin-title {\n  margin: 50px 0 0 0;\n  padding: 0;\n  text-align: center; }\n#task-manager-signin-title h1 {\n  display: inline-block;\n  font-family: Roboto;\n  font-size: 30px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #000000; }\n/* ----------------------\n * 入力フォームコンテナ\n * ----------------------*/\n#task-manager-signin-item-container {\n  width: 576px;\n  height: 420px;\n  border-radius: 10px;\n  background-color: #fafafa;\n  margin: 0 auto;\n  padding: 0;\n  text-align: center; }\n#task-manager-signin-item-container input {\n    width: 300px;\n    height: 40px;\n    font-size: 20px;\n    letter-spacing: normal;\n    color: #bdbdbd;\n    display: inline-block;\n    margin: 50px 0 0 0;\n    text-align: center;\n    background-color: #fafafa; }\n#task-manager-signin-item-container button {\n    width: 300px;\n    height: 40px;\n    font-size: 20px;\n    letter-spacing: normal;\n    text-align: center;\n    margin: 50px 0 0 0;\n    background-color: #00b686; }\n/* ----------------------\n * 入力チェックエラー\n * ----------------------*/\n"

/***/ }),

/***/ "./src/app/component/user/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const_app_const__ = __webpack_require__("./src/app/const/app.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_signin_service__ = __webpack_require__("./src/app/service/signin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_common_delivery_service__ = __webpack_require__("./src/app/service/common-delivery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dto_interface_user_signin_request_dto__ = __webpack_require__("./src/app/dto/interface/user-signin-request.dto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_object_util__ = __webpack_require__("./src/app/util/object.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__const_service_const__ = __webpack_require__("./src/app/const/service-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_string_util__ = __webpack_require__("./src/app/util/string-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * 利用者認証コンポーネントクラス。
 */
var SigninComponent = /** @class */ (function () {
    /**
     * デフォルトコンストラクタ。
     */
    function SigninComponent(signinService, router, commonDeliveryService) {
        this.signinService = signinService;
        this.router = router;
        this.commonDeliveryService = commonDeliveryService;
        /**
         * 利用者認証フォームグループ
         */
        this.signinForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            emailControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(__WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_EMAIL_MAX_LENGTH),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]),
            passwordControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(__WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_PASSWORD_MAX_LENGTH),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__util_string_util__["a" /* StringUtil */].REGEX_FORMAT_HALF_SIZE)])
        });
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    /**
     * サインインを実行します。
     */
    SigninComponent.prototype.signin = function () {
        var _this = this;
        // リクエストの作成。
        var req = new __WEBPACK_IMPORTED_MODULE_6__dto_interface_user_signin_request_dto__["a" /* UserSigninRequestDto */]();
        req.email = this.signinForm.get("emailControl").value;
        req.password = this.signinForm.get("passwordControl").value;
        // サービスクラスを実行します。
        this.signinService.signin(req).subscribe(function (res) {
            // 正常な場合、サービス経由で利用者IDをタスクコンポーネントに引き渡してリダイレクト
            if (__WEBPACK_IMPORTED_MODULE_7__util_object_util__["a" /* ObjectUtil */].isNullOrUndefined(res.errors)) {
                _this.commonDeliveryService.emitUserIdChange(res.userId);
                _this.router.navigateByUrl(__WEBPACK_IMPORTED_MODULE_8__const_service_const__["a" /* ServiceConst */].BASE_SLASH + __WEBPACK_IMPORTED_MODULE_8__const_service_const__["a" /* ServiceConst */].URL_WEB_TASK);
            }
            else {
                _this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_INFO_INVALID;
            }
        });
    };
    /**
     * 入力チェックに適合していることをチェックします。
     * @returns boolean
     */
    SigninComponent.prototype.violateRistriction = function () {
        var email = this.signinForm.get("emailControl");
        // メールアドレスの入力チェック。
        if (email.hasError('required') && (email.dirty || email.touched)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_SIGNUP_EMAIL_REQUIRED_VIOLATED;
            return true;
        }
        else if (email.hasError('maxlength') && (email.dirty || email.touched)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_SIGNUP_EMAIL_LENGTH_VIOLATED;
            return true;
        }
        else if (email.hasError("email") && (email.dirty || email.touched)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_SIGNUP_EMAIL_INVALID_FORMAT;
            return true;
        }
        var password = this.signinForm.get("passwordControl");
        // パスワードの入力チェック。
        if (password.hasError('required') && (password.dirty || password.touched)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_SIGNUP_PASSWORD_REQUIRED_VIOLATED;
            return true;
        }
        else if (password.hasError('maxlength') && (password.dirty || password.touched)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_SIGNUP_PASSWORD_LENGTH_VIOLATED;
            return true;
        }
        else if (password.hasError('pattern') && (password.dirty || password.touched)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_PASSWORD_NOT_HALF_SIZED;
            return true;
        }
        return false;
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/component/user/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/component/user/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_signin_service__["a" /* SigninService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_5__service_common_delivery_service__["a" /* CommonDeliveryService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/component/user/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <!-- 画面見出し -->\n    <h1 id=\"task-manager-signup-title\">\n        Parallelを新しく始める\n    </h1>\n\n    <!-- 入力フォームコンテナ -->\n    <form [formGroup]=\"signupForm\" id=\"task-manager-signup-item-container\">\n        <input formControlName=\"userNameControl\" type=\"text\" name=\"userName\" placeholder=\"名前\" >\n        <input formControlName=\"emailControl\" type=\"text\" name=\"email\" placeholder=\"メールアドレス\" >\n        <input formControlName=\"passwordControl\" type=\"password\" name=\"password\" placeholder=\"パスワード\" >\n        <button (click)=\"signup()\" [disabled]=\"\">サインアップ</button>\n\n        <!-- 入力チェックエラー -->\n        <div *ngIf=\"violateRistriction()\" id=\"task-manager-signup-error\">\n            <p>\n                {{ checkedResult }}\n            </p>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/component/user/signup/signup.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style {\n  margin: 20px 20px;\n  text-align: center;\n  color: red; }\n/* ----------------------\n * 共通\n ----------------------*/\n/* 枠線反映しない */\ninput, button {\n  border-style: none;\n  border-radius: 5px; }\n/* リスト表示しない */\nul li {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n/* リンクの装飾を無効化 */\na {\n  text-decoration: none;\n  color: #000000; }\n/* 画面全体 */\nhtml {\n  height: 100%; }\n/* 共通フォント */\nbody {\n  height: 100%;\n  font-family: NotoSansCJKjp, メイリオ, Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif; }\n/* タイトル用独自定義フォント */\n@font-face {\n  font-family: 'Product Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Open Sans\"), local(\"OpenSans\"), url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format(\"woff2\"); }\n/* ----------------------\n * 共通スタイル変数\n * ----------------------*/\n/* 背景色グレー1番 */\n/* 背景色グレー2番 */\n/* 背景色緑1番 */\n/* 背景色緑2番 */\n/* 背景色緑3番 */\n/* 基本フォント色 */\n/* 入力チェックエラー共通 */\n.base-error-message-style {\n  text-align: center;\n  color: red; }\n/* スタイルの変化仕様、ゆっくり */\n.base-transition-ease, #task-manager-header-links li:hover {\n  -webkit-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  -webkit-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-delay: 0;\n          transition-delay: 0; }\n/* 登録ボタン共通仕様。幅は利用箇所で指定する */\n.common-button-submit {\n  height: 40px;\n  font-size: 18px;\n  letter-spacing: normal;\n  text-align: center;\n  color: #000;\n  background-color: #00b686; }\n/* ----------------------\n * ヘッダーナビゲーション\n * ----------------------/\n/* ヘッダータイトル行 */\n#task-manager-common-header {\n  width: 100%;\n  height: 70px;\n  background-color: #1ef5bf;\n  padding: 0px;\n  margin: 0px;\n  border-bottom: 1px solid #bdbdbd; }\n#task-manager-common-header a {\n    font-family: Product Sans;\n    font-size: 60px; }\n/* 共通ヘッダー（リンクナビゲーション） */\n#task-manager-header-links {\n  width: 100%;\n  height: 50px;\n  background-color: #1ef5bf;\n  padding: 0px;\n  margin: 0;\n  text-align: right; }\n#task-manager-header-links ul {\n    display: inline-block;\n    padding: 0;\n    margin: 5px; }\n#task-manager-header-links li {\n    display: inline-block;\n    font-size: 20px;\n    border: 1px solid #bdbdbd;\n    border-radius: 3px; }\n#task-manager-header-links li:hover {\n    background-color: #bdbdbd; }\n/* ----------------------\n * 使い回しパーツ\n * ----------------------/\n\n/* マージン */\n.mt-50 {\n  margin-top: 50px; }\n.mt-20-centered {\n  margin: 20px 0 0 0; }\n.mt-50-centered {\n  margin: 50px 0 0 0; }\n.mt-20 {\n  margin-top: 20px; }\n.mb-50 {\n  margin-bottom: 50px; }\n.ml-20 {\n  margin-left: 20px; }\n/* パディング */\n.pt-50 {\n  padding-top: 50px; }\n.pt-50-centered {\n  padding: 50px 0 0 0; }\n.pt-20 {\n  padding-top: 20px; }\n.pr-20 {\n  padding-right: 20px; }\n.padding-leftright-10, #task-manager-common-header a, #task-manager-header-links li {\n  padding: 0 10px 0 10px; }\n.pl-20 {\n  padding-left: 20px; }\n/* ----------------------\n * 画面見出し\n * ---------------------*/\n#task-manager-signup-title {\n  margin: 50px 0 0 0;\n  padding: 0;\n  text-align: center; }\n#task-manager-signup-title h1 {\n    display: inline-block;\n    font-family: Roboto;\n    font-size: 30px;\n    letter-spacing: normal;\n    color: #000000; }\n/* ----------------------\n * 入力フォームコンテナ\n * ----------------------*/\n#task-manager-signup-item-container {\n  width: 576px;\n  height: 420px;\n  border-radius: 10px;\n  background-color: #fafafa;\n  margin: 0 auto;\n  padding: 0;\n  text-align: center; }\n#task-manager-signup-item-container input {\n    width: 300px;\n    height: 40px;\n    font-size: 20px;\n    letter-spacing: normal;\n    color: #bdbdbd;\n    display: inline-block;\n    margin: 50px 0 0 0;\n    text-align: center;\n    background-color: #fafafa; }\n#task-manager-signup-item-container button {\n    width: 300px;\n    height: 40px;\n    font-size: 20px;\n    letter-spacing: normal;\n    text-align: center;\n    margin: 50px 0 0 0;\n    background-color: #00b686; }\n/* ----------------------\n * 入力チェックエラー\n * ----------------------*/\n#task-manager-signup-error {\n  text-align: center;\n  color: red; }\n"

/***/ }),

/***/ "./src/app/component/user/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const_app_const__ = __webpack_require__("./src/app/const/app.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_signup_service__ = __webpack_require__("./src/app/service/signup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dto_interface_user_signup_request_dto__ = __webpack_require__("./src/app/dto/interface/user-signup-request.dto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__codedef_task_manager_code__ = __webpack_require__("./src/app/codedef/task-manager-code.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__const_service_const__ = __webpack_require__("./src/app/const/service-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_object_util__ = __webpack_require__("./src/app/util/object.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_common_delivery_service__ = __webpack_require__("./src/app/service/common-delivery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_string_util__ = __webpack_require__("./src/app/util/string-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * 利用者サインアップコンポーネントクラス。
 */
var SignupComponent = /** @class */ (function () {
    //-----------------------------
    // コンポーネント内プロパティ
    //-----------------------------
    /**
     * デフォルトコンストラクタ
     */
    function SignupComponent(signupService, router, commonDeliveryService) {
        this.signupService = signupService;
        this.router = router;
        this.commonDeliveryService = commonDeliveryService;
        /**
         * ルートコンポーネント、およびタスクコンポーネントに渡す利用者IDプロパティ、イベント出力
         */
        this.userId = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * 利用者情報登録フォームグループ
         */
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            userNameControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(__WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_NAME_MAX_LENGTH)]),
            emailControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(__WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_EMAIL_MAX_LENGTH),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]),
            passwordControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(__WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_PASSWORD_MAX_LENGTH),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_10__util_string_util__["a" /* StringUtil */].REGEX_FORMAT_HALF_SIZE)])
        });
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    /**
     * サインアップを実行します。
     */
    SignupComponent.prototype.signup = function () {
        var _this = this;
        if (!this.violateRistriction()) {
            // リクエストの生成
            var req = new __WEBPACK_IMPORTED_MODULE_4__dto_interface_user_signup_request_dto__["a" /* UserSignupRequestDto */]();
            req.userName = this.signupForm.get("userNameControl").value;
            req.email = this.signupForm.get("emailControl").value;
            req.password = this.signupForm.get("passwordControl").value;
            req.usedFlag = __WEBPACK_IMPORTED_MODULE_5__codedef_task_manager_code__["a" /* TaskManagerCode */].USER_USED_FLAG_USED;
            // Serviceクラスを実行します。
            this.signupService.signup(req).subscribe(function (res) {
                console.log(JSON.stringify(res));
                // すでに使われているメールアドレスの場 合は、エラーメッセージを表示して何もしない
                if (!__WEBPACK_IMPORTED_MODULE_8__util_object_util__["a" /* ObjectUtil */].isNullOrUndefined(res.errors)) {
                    _this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_ALREADY_REGISTERD;
                    console.log(_this.checkedResult);
                }
                else {
                    _this.commonDeliveryService.emitUserIdChange(res.userId);
                    _this.router.navigateByUrl(__WEBPACK_IMPORTED_MODULE_7__const_service_const__["a" /* ServiceConst */].BASE_SLASH + __WEBPACK_IMPORTED_MODULE_7__const_service_const__["a" /* ServiceConst */].URL_WEB_TASK);
                }
            }, function (error) {
                console.warn(JSON.stringify(error.error));
            });
        }
    };
    /**
     * 入力チェックに適合していることをチェックします。
     * @returns boolean
     */
    SignupComponent.prototype.violateRistriction = function () {
        var userName = this.signupForm.get("userNameControl");
        // 名前の入力チェック。
        if (userName.hasError('required') && (userName.dirty || userName.touched)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_SIGNUP_USERNAME_REQUIRED_VIOLATED;
            return true;
        }
        else if (userName.hasError('maxlength') && (userName.dirty || userName.touched)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_SIGNUP_USERNAME_LENGTH_VIOLATED;
            return true;
        }
        var email = this.signupForm.get("emailControl");
        // メールアドレスの入力チェック。
        if (email.hasError('required') && (email.dirty || email.touched)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_SIGNUP_EMAIL_REQUIRED_VIOLATED;
            return true;
        }
        else if (email.hasError('maxlength') && (email.dirty || email.touched)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_SIGNUP_EMAIL_LENGTH_VIOLATED;
            return true;
        }
        else if (email.hasError('email') && (email.dirty || email.touched)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_EMAIL_NOT_HALF_SIZED;
            return true;
        }
        var password = this.signupForm.get("passwordControl");
        // パスワードの入力チェック。
        if (password.hasError('required') && (password.touched || password.dirty)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_SIGNUP_PASSWORD_REQUIRED_VIOLATED;
            return true;
        }
        else if (password.hasError('maxlength') && (password.touched || password.dirty)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_SIGNUP_PASSWORD_LENGTH_VIOLATED;
            return true;
        }
        else if (password.hasError('pattern') && (password.touched || password.dirty)) {
            this.checkedResult = __WEBPACK_IMPORTED_MODULE_2__const_app_const__["a" /* AppConst */].USER_PASSWORD_NOT_HALF_SIZED;
            return true;
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "userId", void 0);
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/component/user/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/component/user/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_signup_service__["a" /* SignupService */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_9__service_common_delivery_service__["a" /* CommonDeliveryService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/const/app.const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConst; });
/**
 * アプリケーション共有の定数クラスです。
 */
var AppConst;
(function (AppConst) {
    /**
     * 空文字
     */
    AppConst.BLANK = "";
    /**
     * スラッシュ
     */
    AppConst.SLASH = "/";
    /**
     * 改行コード
     */
    AppConst.STR_NEW_LINE = "\n";
    /**
     * セミコロン
     */
    AppConst.STR_SEMI_COLON = ";";
    //-----------------------------
    // バリデーション定義
    //-----------------------------
    /**
     * タスクタイトル、100桁
     */
    AppConst.TASK_TITLE_MAX_LENGTH = 100;
    /**
     * タスクラベル、50桁
     */
    AppConst.TASK_LABEL_MAX_LENGTH = 50;
    /**
     * 完了フラグ、1桁
     */
    AppConst.COMPLETED_FLAG_LENGTH = 1;
    /**
     * タスクメモ、200桁
     */
    AppConst.TASK_NOTE_MAX_LENGTH = 200;
    /**
     * 利用者名、50桁
     */
    AppConst.USER_NAME_MAX_LENGTH = 50;
    /**
     * 利用者メールアドレス、100桁
     */
    AppConst.USER_EMAIL_MAX_LENGTH = 100;
    /**
     * 利用者パスワード、100桁
     */
    AppConst.USER_PASSWORD_MAX_LENGTH = 100;
    /**
     * 利用者利用フラグ、1桁
     */
    AppConst.USER_USED_FLAG_LENGTH = 1;
    //-----------------------------
    // バリデーション違反メッセージ
    //-----------------------------
    /**
     * タイトルが入力されていません。タイトルは必須です。
     */
    AppConst.TASK_TITLE_REQUIRED_VIOLATED = "タイトルが入力されていません。タイトルは必須です。";
    /**
     * ラベル名が入力されていません。ラベル名は必須入力です。
     */
    AppConst.TASK_LABEL_REQUIRED_VIOLATED = "ラベル名が入力されていません。ラベル名は必須入力です。";
    /**
     * タイトルが長すぎます。100文字までです。
     */
    AppConst.TASK_TITLE_LENGTH_VIOLATED = "タイトルが長すぎます。100文字までです。";
    /**
     * ラベルが長すぎます。50文字までです。
     */
    AppConst.TASK_LABEL_LENGTH_VIOLATED = "ラベルが長すぎます。50文字までです。";
    /**
     * 完了フラグが1桁ではありません。
     */
    AppConst.COMPLETED_FLAG_LENGTH_VIOLATED = "完了フラグが1桁ではありません。";
    /**
     * タスクのメモが長すぎます。メモは200文字までです。
     */
    AppConst.TASK_NOTE_LENGTH_VIOLATED = "タスクのメモが長すぎます。メモは200文字までです。";
    /**
     * 日付の設定に不備があります。終了日を開始日より後に設定してください。
     */
    AppConst.DEADLINE_SET_BEFORE_START_DATE = "日付の設定に不備があります。終了日を開始日より後に設定してください。";
    /**
     * 名前が入力されていません。名前は必須入力です。
     */
    AppConst.USER_SIGNUP_USERNAME_REQUIRED_VIOLATED = "名前が入力されていません。名前は必須入力です。";
    /**
     * 名前が長すぎます。名前は50文字までです。
     */
    AppConst.USER_SIGNUP_USERNAME_LENGTH_VIOLATED = "名前が長すぎます。名前は50文字までです。";
    /**
     * メールアドレスが入力されていません。メールアドレスは必須入力です。
     */
    AppConst.USER_SIGNUP_EMAIL_REQUIRED_VIOLATED = "メールアドレスが入力されていません。メールアドレスは必須入力です。";
    /**
     * 入力された文字列はメールアドレス形式ではありません。
     */
    AppConst.USER_SIGNUP_EMAIL_INVALID_FORMAT = "入力された文字列はメールアドレス形式ではありません。";
    /**
     * メールアドレスが長すぎます。メールアドレスは100文字までです。
     */
    AppConst.USER_SIGNUP_EMAIL_LENGTH_VIOLATED = "メールアドレスが長すぎます。メールアドレスは100文字までです。";
    /**
     * パスワードが入力されていません。パスワードは必須入力です。
     */
    AppConst.USER_SIGNUP_PASSWORD_REQUIRED_VIOLATED = "パスワードが入力されていません。パスワードは必須入力です。";
    /**
     * パスワードが長すぎます。パスワードは100文字までです。
     */
    AppConst.USER_SIGNUP_PASSWORD_LENGTH_VIOLATED = "パスワードが長すぎます。パスワードは100文字までです。";
    /**
     * メールアドレスは半角英数字のみ使用してください。
     */
    AppConst.USER_EMAIL_NOT_HALF_SIZED = "メールアドレスは半角英数字のみ使用してください。";
    /**
     * パスワードは半角英数字のみ使用してください。
     */
    AppConst.USER_PASSWORD_NOT_HALF_SIZED = "パスワードは半角英数字のみ使用してください。";
    /**
     * 入力されたパスワードはすでに利用されています。
     */
    AppConst.USER_ALREADY_REGISTERD = "入力されたパスワードはすでに利用されています。";
    /**
     * 入力された利用者情報は存在しません。メールアドレス、もしくはパスワードが正しいことを確認してください。
     */
    AppConst.USER_INFO_INVALID = "入力された利用者情報は存在しません。メールアドレス、もしくはパスワードが正しいことを確認してください。";
    //-----------------------------
    // 共通エラーメッセージ
    //-----------------------------
    /**
     * API通信中にエラーが発生しました :
     */
    AppConst.GLOBAL_ERROR_MESSAGE = "API通信中にエラーが発生しました : ";
    /**
     * HTTPステータスコード :
     */
    AppConst.GLOBAL_ERROR_STATUS_CODE = "HTTPステータスコード : ";
    /**
     * HTTPエラーメッセージ :
     */
    AppConst.GLOBAL_ERROR_STATUS_MESSAGE = "HTTPエラーメッセージ : ";
})(AppConst || (AppConst = {}));


/***/ }),

/***/ "./src/app/const/service-const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceConst; });
/**
 * Service共通の定数定義モジュールです.
 */
var ServiceConst;
(function (ServiceConst) {
    //-----------------------------
    //APIURLの基本コンポーネント定義
    //-----------------------------
    /**
     * ドメイン
     */
    ServiceConst.BASE_URL = 'http://localhost:18080/';
    /**
     * コンテキストパス
     */
    ServiceConst.BASE_API_VERSION = 'api/v1';
    /**
     * 処理大項目：タスク
     */
    ServiceConst.BASE_URL_FUNC = '/task';
    /**
     * 処理大項目：利用者
     */
    ServiceConst.BASE_URL_USER = '/user';
    /**
     * 処理中項目：タスクラベル
     */
    ServiceConst.BASE_URL_TASK_LABEL_FUNC = '/label';
    /**
     * スラッシュ
     */
    ServiceConst.BASE_SLASH = '/';
    //-----------------------------
    // 画面URL定義
    //-----------------------------
    /**
     * トップページ
     */
    ServiceConst.URL_WEB_MAIN = "";
    /**
     * タスク一覧画面
     */
    ServiceConst.URL_WEB_TASK = 'task';
    /**
     * タスクタイムライン表示
     */
    ServiceConst.URL_WEB_TIMELINE = ServiceConst.URL_WEB_TASK + "/timeline";
    /**
     * 利用者登録画面
     */
    ServiceConst.URL_WEB_USER_SIGNUP = 'signup';
    /**
     * 利用者認証画面
     */
    ServiceConst.URL_WEB_USER_SIGNIN = 'signin';
    //-----------------------------
    // コールするAPIのURL定義
    //-----------------------------
    /**
     * タスクの新規登録
     */
    ServiceConst.URL_TASK_REGIST = ServiceConst.BASE_URL + ServiceConst.BASE_API_VERSION + ServiceConst.BASE_URL_FUNC + '/regist';
    /**
     * タスクの取得
     */
    ServiceConst.URL_TASK_FETCH = ServiceConst.BASE_URL + ServiceConst.BASE_API_VERSION + ServiceConst.BASE_URL_FUNC + '/fetch';
    /**
     * タスクの編集
     */
    ServiceConst.URL_TASK_UPDATE = ServiceConst.BASE_URL + ServiceConst.BASE_API_VERSION + ServiceConst.BASE_URL_FUNC + '/update';
    /**
     * タスクの削除
     */
    ServiceConst.URL_TASK_DELETE = ServiceConst.BASE_URL + ServiceConst.BASE_API_VERSION + ServiceConst.BASE_URL_FUNC + '/delete';
    /**
     * タスクの完了
     */
    ServiceConst.URL_TASK_COMPLETE = ServiceConst.BASE_URL + ServiceConst.BASE_API_VERSION + ServiceConst.BASE_URL_FUNC + '/complete';
    /**
     * タスクラベル、取得および登録：/task/label
     */
    ServiceConst.URL_TASK_LABEL = ServiceConst.BASE_URL + ServiceConst.BASE_API_VERSION + ServiceConst.BASE_URL_FUNC + ServiceConst.BASE_URL_TASK_LABEL_FUNC;
    /**
     * 利用者の新規登録
     */
    ServiceConst.URL_USER_REGIST = ServiceConst.BASE_URL + ServiceConst.BASE_API_VERSION + ServiceConst.BASE_URL_USER + '/signup';
    /**
     * 利用者のサインイン
     */
    ServiceConst.URL_USER_SIGNIN = ServiceConst.BASE_URL + ServiceConst.BASE_API_VERSION + ServiceConst.BASE_URL_USER + '/signin';
})(ServiceConst || (ServiceConst = {}));


/***/ }),

/***/ "./src/app/dto/interface/regist-task-request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistTaskRequest; });
/**
 * タスク登録リクエストDTOです.
 */
var RegistTaskRequest = /** @class */ (function () {
    function RegistTaskRequest() {
    }
    RegistTaskRequest.prototype.getTaskTitle = function () {
        return this.taskTitle;
    };
    RegistTaskRequest.prototype.setTaskTitle = function (taskTitle) {
        this.taskTitle = taskTitle;
    };
    RegistTaskRequest.prototype.getTaskLabel = function () {
        return this.taskLabel;
    };
    RegistTaskRequest.prototype.setTaskLabel = function (taskLabel) {
        this.taskLabel = taskLabel;
    };
    RegistTaskRequest.prototype.getStartDate = function () {
        return this.startDate;
    };
    RegistTaskRequest.prototype.setStartDate = function (startDate) {
        this.startDate = startDate;
    };
    RegistTaskRequest.prototype.getDeadline = function () {
        return this.deadline;
    };
    RegistTaskRequest.prototype.setDeadline = function (deadline) {
        this.deadline = deadline;
    };
    RegistTaskRequest.prototype.getCompletedFlag = function () {
        return this.completedFlag;
    };
    RegistTaskRequest.prototype.setCompletedFlag = function (completedFlag) {
        this.completedFlag = completedFlag;
    };
    RegistTaskRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RegistTaskRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    RegistTaskRequest.prototype.getTaskNote = function () {
        return this.taskNote;
    };
    RegistTaskRequest.prototype.setTaskNote = function (taskNote) {
        this.taskNote = taskNote;
    };
    return RegistTaskRequest;
}());



/***/ }),

/***/ "./src/app/dto/interface/task-complete-request.dto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskCompleteRequestDto; });
/**
 * タスク完了リクエストDTOクラス。
 */
var TaskCompleteRequestDto = /** @class */ (function () {
    function TaskCompleteRequestDto() {
    }
    TaskCompleteRequestDto.prototype.getTaskId = function () {
        return this.taskId;
    };
    TaskCompleteRequestDto.prototype.setTaskId = function (taskId) {
        this.taskId = taskId;
    };
    return TaskCompleteRequestDto;
}());



/***/ }),

/***/ "./src/app/dto/interface/task-label-register-request.dto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskLabelRegisterRequestDto; });
/**
 * タスクラベル登録リクエストDTOクラス。
 */
var TaskLabelRegisterRequestDto = /** @class */ (function () {
    function TaskLabelRegisterRequestDto() {
    }
    return TaskLabelRegisterRequestDto;
}());



/***/ }),

/***/ "./src/app/dto/interface/user-signin-request.dto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSigninRequestDto; });
/**
 * 利用者サインインリクエストDTO。
 */
var UserSigninRequestDto = /** @class */ (function () {
    function UserSigninRequestDto() {
    }
    return UserSigninRequestDto;
}());



/***/ }),

/***/ "./src/app/dto/interface/user-signup-request.dto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSignupRequestDto; });
/**
 * 利用者サインアップリクエストDTO。
 */
var UserSignupRequestDto = /** @class */ (function () {
    function UserSignupRequestDto() {
    }
    return UserSignupRequestDto;
}());



/***/ }),

/***/ "./src/app/dto/task-label-relation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskLabelRelation; });
/**
 * ラベル別にタスクのリストを管理するデータクラス
 */
var TaskLabelRelation = /** @class */ (function () {
    function TaskLabelRelation() {
    }
    return TaskLabelRelation;
}());



/***/ }),

/***/ "./src/app/entity/task-label.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskLabel; });
/**
 * タスクラベルの汎用エンティティクラス。
 */
var TaskLabel = /** @class */ (function () {
    function TaskLabel() {
    }
    return TaskLabel;
}());



/***/ }),

/***/ "./src/app/entity/task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
/**
 * タスクモデルの汎用エンティティクラスです.
 */
var Task = /** @class */ (function () {
    function Task() {
    }
    Task.prototype.getTaskId = function () {
        return this.taskId;
    };
    Task.prototype.setTaskId = function (taskId) {
        this.taskId = taskId;
    };
    Task.prototype.getTaskTitle = function () {
        return this.taskTitle;
    };
    Task.prototype.setTaskTitle = function (taskTitle) {
        this.taskTitle = taskTitle;
    };
    Task.prototype.getTaskLabel = function () {
        return this.taskLabel;
    };
    Task.prototype.setTaskLabel = function (taskLabel) {
        this.taskLabel = taskLabel;
    };
    Task.prototype.getStartDate = function () {
        return this.startDate;
    };
    Task.prototype.setStartDate = function (startDate) {
        this.startDate = startDate;
    };
    Task.prototype.getDeadline = function () {
        return this.deadline;
    };
    Task.prototype.setDeadline = function (deadline) {
        this.deadline = deadline;
    };
    Task.prototype.getCompletedFlag = function () {
        return this.completedFlag;
    };
    Task.prototype.setCompletedFlag = function (completedFlag) {
        this.completedFlag = completedFlag;
    };
    Task.prototype.getUserId = function () {
        return this.userId;
    };
    Task.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    Task.prototype.getTaskNote = function () {
        return this.taskNote;
    };
    Task.prototype.setTaskNote = function (taskNote) {
        this.taskNote = taskNote;
    };
    return Task;
}());



/***/ }),

/***/ "./src/app/exception/global-error-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const_app_const__ = __webpack_require__("./src/app/const/app.const.ts");


/**
 * サービスクラス共通エラーハンドラ
 */
var GlobalErrorHandler = /** @class */ (function () {
    function GlobalErrorHandler() {
    }
    /**
     * エラーハンドリングを提供します。
     * @param error: HttpErrorResponse
     * @returns ErrorObservable
     */
    GlobalErrorHandler.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error(__WEBPACK_IMPORTED_MODULE_1__const_app_const__["a" /* AppConst */].GLOBAL_ERROR_MESSAGE + error.error.message + __WEBPACK_IMPORTED_MODULE_1__const_app_const__["a" /* AppConst */].STR_NEW_LINE);
        }
        console.error(__WEBPACK_IMPORTED_MODULE_1__const_app_const__["a" /* AppConst */].GLOBAL_ERROR_STATUS_CODE + error.status + __WEBPACK_IMPORTED_MODULE_1__const_app_const__["a" /* AppConst */].GLOBAL_ERROR_STATUS_MESSAGE + error.error + __WEBPACK_IMPORTED_MODULE_1__const_app_const__["a" /* AppConst */].STR_NEW_LINE);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(error.error.message);
    };
    return GlobalErrorHandler;
}());



/***/ }),

/***/ "./src/app/introduction/introduction/introduction.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- メインコンテンツ \n  TODO: あとで別のコンポーネントを用意する\n-->\n<main>\n    <div id=\"main-container\">\n        <!-- メイン画像 -->\n        <img class=\"top-image\" src=\"./assets/images/parallel-top.jpg\" alt=\"Parallel\">\n        <!-- メインメッセージ -->\n        <h1>着実な成果をあげるタスクの管理を</h1>\n        <p>パラレルに進む仕事が見えるようになります。</p>\n    </div>\n    <div id=\"usage-container\">\n        <!-- できることメッセージ -->\n        <h2>“いつから”、”なにをすればよいのか”がわかります</h2>\n        <!-- Youtube利用動画 -->\n    </div>\n</main>\n\n<!-- フッター -->\n<footer>\n    <div id=\"footer-container\">\n        <p>Copylight 2019 Parallel</p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/introduction/introduction/introduction.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ----------------------\n * メインコンテナ\n ----------------------*/\n/* Base */\n#main-container {\n  /* 相対配置 */\n  position: relative; }\n#main-container img {\n    width: 100%;\n    height: 500px;\n    /* 指定の高さに入らない場合は切り取り */\n    overflow: hidden; }\n#main-container h1 {\n    /* 絶対配置 */\n    position: absolute;\n    color: #fafafa;\n    /* 中央寄せ */\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    font-size: 50px; }\n#main-container p {\n    /* 絶対配置 */\n    position: absolute;\n    color: #fafafa;\n    /* 中央寄せ */\n    top: 60%;\n    left: 50%;\n    -webkit-transform: translate(-60%, -50%);\n            transform: translate(-60%, -50%);\n    font-size: 30px; }\n/* ----------------------\n * 利用方法コンテナ\n ----------------------*/\n#usage-container {\n  width: 100%;\n  background-color: #fafafa;\n  padding: 50px 0 0 0;\n  margin: 0 auto;\n  height: 300px; }\n#usage-container h2 {\n  font-size: 30px;\n  text-align: center; }\n/* ----------------------\n * フッターコンテナ\n ----------------------*/\n#footer-container {\n  background-color: #00b686;\n  width: 100%;\n  height: 50px; }\n#footer-container p {\n  text-align: center;\n  font-size: 20px;\n  padding: 15px;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/introduction/introduction/introduction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent() {
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    IntroductionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-introduction',
            template: __webpack_require__("./src/app/introduction/introduction/introduction.component.html"),
            styles: [__webpack_require__("./src/app/introduction/introduction/introduction.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroductionComponent);
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/routes/web/web-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const_service_const__ = __webpack_require__("./src/app/const/service-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_task_task_component__ = __webpack_require__("./src/app/component/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_user_signup_signup_component__ = __webpack_require__("./src/app/component/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_user_signin_signin_component__ = __webpack_require__("./src/app/component/user/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_taskline_taskline_component__ = __webpack_require__("./src/app/component/taskline/taskline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__introduction_introduction_introduction_component__ = __webpack_require__("./src/app/introduction/introduction/introduction.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: __WEBPACK_IMPORTED_MODULE_2__const_service_const__["a" /* ServiceConst */].URL_WEB_MAIN, component: __WEBPACK_IMPORTED_MODULE_8__introduction_introduction_introduction_component__["a" /* IntroductionComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_2__const_service_const__["a" /* ServiceConst */].URL_WEB_TASK, component: __WEBPACK_IMPORTED_MODULE_3__component_task_task_component__["a" /* TaskComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_2__const_service_const__["a" /* ServiceConst */].URL_WEB_USER_SIGNUP, component: __WEBPACK_IMPORTED_MODULE_4__component_user_signup_signup_component__["a" /* SignupComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_2__const_service_const__["a" /* ServiceConst */].URL_WEB_USER_SIGNIN, component: __WEBPACK_IMPORTED_MODULE_5__component_user_signin_signin_component__["a" /* SigninComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_2__const_service_const__["a" /* ServiceConst */].URL_WEB_TIMELINE, component: __WEBPACK_IMPORTED_MODULE_7__component_taskline_taskline_component__["a" /* TasklineComponent */] }
];
var WebRoutingModule = /** @class */ (function () {
    function WebRoutingModule() {
    }
    WebRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], WebRoutingModule);
    return WebRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/web/web.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web_routing_module__ = __webpack_require__("./src/app/routes/web/web-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WebModule = /** @class */ (function () {
    function WebModule() {
    }
    WebModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__web_routing_module__["a" /* WebRoutingModule */]
            ],
            declarations: []
        })
    ], WebModule);
    return WebModule;
}());



/***/ }),

/***/ "./src/app/service/common-delivery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonDeliveryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * 共通データ授受サービス。ルートコンポーネントと機能コンポーネント間のデータ受け渡しをサポートします。
 */
var CommonDeliveryService = /** @class */ (function () {
    function CommonDeliveryService() {
        /**
         * コンポーネント共通利用者ID
         * TODO: 絶対にnullに戻す TM00000001
         */
        this.userId = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("TM00000001");
        /**
         * 利用者IDObservableオブジェクト
         */
        this.observableUserId = this.userId.asObservable();
    }
    /**
     * 利用者IDの変更を随時反映します。
     */
    CommonDeliveryService.prototype.emitUserIdChange = function (userId) {
        this.userId.next(userId);
    };
    /**
     * 利用者IDをnullで初期化します。
     */
    CommonDeliveryService.prototype.finalize = function () {
        this.userId.next(null);
    };
    CommonDeliveryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CommonDeliveryService);
    return CommonDeliveryService;
}());



/***/ }),

/***/ "./src/app/service/signin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const_service_const__ = __webpack_require__("./src/app/const/service-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exception_global_error_handler__ = __webpack_require__("./src/app/exception/global-error-handler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * 利用者サインインサービスクラス。
 */
var SigninService = /** @class */ (function () {
    /**
     * デフォルトコンストラクタ。
     */
    function SigninService(http) {
        this.http = http;
    }
    /**
     * 新規利用者のサインインを実施します。
     * @param userSigninRequestDto
     * @returns Observable<UserSigninResponseDto>
     */
    SigninService.prototype.signin = function (userSigninRequestDto) {
        // ヘッダー情報を設定します。
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        // POSTリクエストを実行します。
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__const_service_const__["a" /* ServiceConst */].URL_USER_SIGNIN, userSigninRequestDto, options)
            .pipe(function (res) {
            // セッションの保存
            res.subscribe(function (res) { return localStorage.setItem('id', res.userId); });
            return res;
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(__WEBPACK_IMPORTED_MODULE_4__exception_global_error_handler__["a" /* GlobalErrorHandler */].handleError));
    };
    SigninService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SigninService);
    return SigninService;
}());



/***/ }),

/***/ "./src/app/service/signout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_delivery_service__ = __webpack_require__("./src/app/service/common-delivery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_object_util__ = __webpack_require__("./src/app/util/object.util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 利用者サインアウトサービスクラス。
 */
var SignoutService = /** @class */ (function () {
    function SignoutService(commonDeliveryService) {
        this.commonDeliveryService = commonDeliveryService;
    }
    /**
     * サインアウトを実施します。
     */
    SignoutService.prototype.signout = function () {
        if (this.isSignedin()) {
            this.commonDeliveryService.finalize();
        }
        ;
    };
    ;
    /**
     * 認証状態をチェックします。
     * @returns signedinFlag: boolean 認証フラグの状態
     */
    SignoutService.prototype.isSignedin = function () {
        var _this = this;
        this.commonDeliveryService.observableUserId.subscribe(function (userId) {
            if (__WEBPACK_IMPORTED_MODULE_2__util_object_util__["a" /* ObjectUtil */].isNullOrUndefined(userId)) {
                _this.signedinFlag = false;
            }
            else {
                _this.signedinFlag = true;
            }
        });
        return this.signedinFlag;
    };
    ;
    SignoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_delivery_service__["a" /* CommonDeliveryService */]])
    ], SignoutService);
    return SignoutService;
}());



/***/ }),

/***/ "./src/app/service/signup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const_service_const__ = __webpack_require__("./src/app/const/service-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exception_global_error_handler__ = __webpack_require__("./src/app/exception/global-error-handler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * 利用者サインアップServiceクラス。
 */
var SignupService = /** @class */ (function () {
    /**
     * デフォルトコンストラクタ。
     */
    function SignupService(http) {
        this.http = http;
    }
    /**
     * 新規利用者のサインアップを実施します。
     * @param userSigninRequestDto
     * @returns Observable<UserSignupResponseDto>
     */
    SignupService.prototype.signup = function (userSignupRequestDto) {
        // ヘッダー情報を設定します。
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        // POSTリクエストを実行します。
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__const_service_const__["a" /* ServiceConst */].URL_USER_REGIST, userSignupRequestDto, options)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(__WEBPACK_IMPORTED_MODULE_4__exception_global_error_handler__["a" /* GlobalErrorHandler */].handleError));
    };
    SignupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ "./src/app/service/task-label.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskLabelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const_service_const__ = __webpack_require__("./src/app/const/service-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exception_global_error_handler__ = __webpack_require__("./src/app/exception/global-error-handler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * タスクラベルをバックエンドとやりとりするServiceクラス。
 */
var TaskLabelService = /** @class */ (function () {
    /**
     * デフォルトコンストラクタ。
     */
    function TaskLabelService(http) {
        this.http = http;
    }
    /**
     * タスクラベルの一覧を取得します。
     */
    TaskLabelService.prototype.fetch = function (userId) {
        // APIをコールして、結果を取得します.
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__const_service_const__["a" /* ServiceConst */].URL_TASK_LABEL, { params: {
                userId: userId
            }
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(__WEBPACK_IMPORTED_MODULE_4__exception_global_error_handler__["a" /* GlobalErrorHandler */].handleError));
    };
    /**
     * 新規タスクを登録するAPIをコールします.
     * @param registTaskRequest: RegistTaskRequest
     * @returns Observable<RegistTaskRequest>
     */
    TaskLabelService.prototype.registerLabel = function (req) {
        // HTTPリクエストのオプションをセットします.
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        // APIをコールします.
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__const_service_const__["a" /* ServiceConst */].URL_TASK_LABEL, req, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(__WEBPACK_IMPORTED_MODULE_4__exception_global_error_handler__["a" /* GlobalErrorHandler */].handleError));
    };
    TaskLabelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TaskLabelService);
    return TaskLabelService;
}());



/***/ }),

/***/ "./src/app/service/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__const_service_const__ = __webpack_require__("./src/app/const/service-const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exception_global_error_handler__ = __webpack_require__("./src/app/exception/global-error-handler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * タスクの処理を行うServiceクラスです.
 */
var TaskService = /** @class */ (function () {
    /**
     * デフォルトコンストラクタ
     */
    function TaskService(http) {
        this.http = http;
    }
    /**
     * タスクの一覧を取得するAPIをコールします.
     */
    TaskService.prototype.fetchTask = function (userId) {
        // APIをコールして、結果を取得します.
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__const_service_const__["a" /* ServiceConst */].URL_TASK_FETCH, { params: {
                userId: userId
            }
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(__WEBPACK_IMPORTED_MODULE_5__exception_global_error_handler__["a" /* GlobalErrorHandler */].handleError));
    };
    /**
     * 新規タスクを登録するAPIをコールします.
     * @param registTaskRequest: RegistTaskRequest
     * @returns Observable<RegistTaskRequest>
     */
    TaskService.prototype.registTask = function (registTaskRequest) {
        // HTTPリクエストのオプションをセットします.
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        // APIをコールします.
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__const_service_const__["a" /* ServiceConst */].URL_TASK_REGIST, registTaskRequest, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(__WEBPACK_IMPORTED_MODULE_5__exception_global_error_handler__["a" /* GlobalErrorHandler */].handleError));
    };
    /**
     * タスクを完了します。
     * @param taskCompleteRequestDto
     * @returns Observable<TaskCompleteResponseDto>
     */
    TaskService.prototype.complete = function (taskCompleteRequestDto) {
        // HTTPリクエストのヘッダー情報を設定します。
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        // APIをコールし、コンポーネントにObservableを返却します。
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_4__const_service_const__["a" /* ServiceConst */].URL_TASK_COMPLETE, taskCompleteRequestDto, options)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(__WEBPACK_IMPORTED_MODULE_5__exception_global_error_handler__["a" /* GlobalErrorHandler */].handleError));
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/util/collection-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_util__ = __webpack_require__("./src/app/util/object.util.ts");

/**
 * コレクション操作のユーティリティ
 */
var CollectionUtil = /** @class */ (function () {
    function CollectionUtil() {
    }
    /**
     * コレクションがNullやUndefinedではない要素を一つ以上もつことを確認します。
     * @param t コレクションオブジェクト
     * @returns 結果、条件をみたさない場合falseを返却する
     */
    CollectionUtil.hasItems = function (t) {
        // null
        if (__WEBPACK_IMPORTED_MODULE_0__object_util__["a" /* ObjectUtil */].isNullOrUndefined(t))
            return false;
        // サイズ0以下
        if (Object.keys(t).length <= 0)
            return false;
        return true;
    };
    return CollectionUtil;
}());



/***/ }),

/***/ "./src/app/util/date-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_util__ = __webpack_require__("./src/app/util/object.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const_app_const__ = __webpack_require__("./src/app/const/app.const.ts");


/**
 * 日付処理ユーティリティ。
 */
var DateUtil = /** @class */ (function () {
    function DateUtil() {
    }
    /**
     * 文字列を解析して日付フォーマットであることを確認します。
     */
    DateUtil.isDateFormat = function (operand) {
        // 変換できることを確認
        if (Number.isNaN(Date.parse(operand))) {
            return false;
        }
        return true;
    };
    ;
    /**
     * ２つの日付を比較し、第一引数 > 第二引数の関係となっていることを確認します。
     * @param subject 非検査対象
     * @param comparison 非検査対象と比較する比較対象
     */
    DateUtil.isForwardFromComparison = function (subject, comparison) {
        // 比較する２つの引数が日付フォーマットに変換できない場合はfalse
        if (!this.isDateFormat(subject) || !this.isDateFormat(comparison)) {
            return false;
        }
        var subjectTime = Date.parse(subject);
        var comparisonTime = Date.parse(comparison);
        //  日付の比較
        if (subjectTime > comparisonTime) {
            return false;
        }
        return true;
    };
    /**
     * 引数の日付からYYYY/MM/DD形式に変換します。
     * @param operand オペランド
     * @returns YYYY/MM/DD形式の日付文字列
     */
    DateUtil.formatDateYMDWithSlash = function (operand) {
        if (!__WEBPACK_IMPORTED_MODULE_0__object_util__["a" /* ObjectUtil */].isNullOrUndefined(operand)) {
            return __WEBPACK_IMPORTED_MODULE_1__const_app_const__["a" /* AppConst */].BLANK;
        }
        var year = operand.getFullYear();
        var month = operand.getMonth() + 1;
        var date = operand.getDate();
        console.log(year + __WEBPACK_IMPORTED_MODULE_1__const_app_const__["a" /* AppConst */].SLASH + month + __WEBPACK_IMPORTED_MODULE_1__const_app_const__["a" /* AppConst */].SLASH + date);
        return year + __WEBPACK_IMPORTED_MODULE_1__const_app_const__["a" /* AppConst */].SLASH + month + __WEBPACK_IMPORTED_MODULE_1__const_app_const__["a" /* AppConst */].SLASH + date;
    };
    return DateUtil;
}());



/***/ }),

/***/ "./src/app/util/object.util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);

/**
 * オブジェクト操作のユーティリティを提供します。
 */
var ObjectUtil = /** @class */ (function () {
    function ObjectUtil() {
    }
    /**
     * オブジェクトがnullもしくはundefinedであることを判定します。デフォルトはfalse。
     * @param t: any
     * @returns boolean
     */
    ObjectUtil.isNullOrUndefined = function (t) {
        if (t == null) {
            return true;
        }
        if (typeof t == undefined || t === "undefined") {
            return true;
        }
        return false;
    };
    /**
     * 指定されたリストから、検索条件を指定して一件削除します。
     * @param array, 削除する元ネタのリスト
     * @param key, 削除するオブジェクトのプロパティ
     * @param condition, 削除するオブジェクトの条件
     */
    ObjectUtil.deleteItem = function (array, key, condition) {
        var object = {
            key: condition
        };
        // 削除対象の抽出
        var operand = __WEBPACK_IMPORTED_MODULE_0_underscore__["_"].where(array, object);
        // 削除対象の索引を取得
        var operandIndex = __WEBPACK_IMPORTED_MODULE_0_underscore__["_"].indexOf(array, operand);
        // 削除
        array.splice(operandIndex, 1);
    };
    return ObjectUtil;
}());



/***/ }),

/***/ "./src/app/util/string-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringUtil; });
/**
 * 文字列操作ユーティリティクラス。
 */
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    /**
     * 正規表現、メールアドレス形式
     */
    StringUtil.REGEX_FORMAT_EMAIL = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    /**
     * 正規表現、半角英数字
     */
    StringUtil.REGEX_FORMAT_HALF_SIZE = /^[a-zA-Z0-9]*$/;
    return StringUtil;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map