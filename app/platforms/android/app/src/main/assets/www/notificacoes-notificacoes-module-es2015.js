(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificacoes-notificacoes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notificacoes/notificacoes.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notificacoes/notificacoes.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode='ios'>\n    <ion-title>Notificações</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n\n  <div *ngFor='let noty of notificacoes'>\n\n\n    <ion-card>\n      <ion-card-header>\n        <ion-label>\n          <h3><b>{{ noty.nome }}</b></h3>\n          <p>{{ noty.data }}</p>\n          <h3>{{ noty.texto }}</h3>\n        </ion-label>\n      </ion-card-header>\n    </ion-card>\n\n\n  </div>\n  <div *ngIf='logado == false'>\n    <p>Faça o login para acompanhar</p>\n    <h2>Suas notificações!</h2>\n    <ion-button (click)=\"routerlink_api('/minha-conta')\" color='warning'>Clique para entrar</ion-button>\n  </div>\n</ion-content>\n\n\n<ion-tab-bar slot=\"bottom\">\n  <ion-tab-button tab=\"tab-schedule\" (click)=\"routerlink_api('/home')\">\n    <ion-icon name=\"home\"></ion-icon>\n    <ion-label>Início</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"tab-cart\" (click)=\"routerlink_api('/notificacoes')\">\n    <ion-icon name=\"notifications\" color='warning'></ion-icon>\n    <ion-label>Notificações</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"tab-cart\" (click)=\"routerlink_api('/pedidos')\">\n    <ion-icon name=\"cart\"></ion-icon>\n    <ion-label>Pedidos</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"tab-person\" (click)=\"routerlink_api('/conta')\">\n    <ion-icon name=\"list\"></ion-icon>\n    <ion-label>Mais</ion-label>\n  </ion-tab-button>\n</ion-tab-bar>\n\n\n");

/***/ }),

/***/ "./src/app/notificacoes/notificacoes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/notificacoes/notificacoes.module.ts ***!
  \*****************************************************/
/*! exports provided: NotificacoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacoesPageModule", function() { return NotificacoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notificacoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notificacoes.page */ "./src/app/notificacoes/notificacoes.page.ts");







const routes = [
    {
        path: '',
        component: _notificacoes_page__WEBPACK_IMPORTED_MODULE_6__["NotificacoesPage"]
    }
];
let NotificacoesPageModule = class NotificacoesPageModule {
};
NotificacoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_notificacoes_page__WEBPACK_IMPORTED_MODULE_6__["NotificacoesPage"]]
    })
], NotificacoesPageModule);



/***/ }),

/***/ "./src/app/notificacoes/notificacoes.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/notificacoes/notificacoes.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhY29lcy9ub3RpZmljYWNvZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/notificacoes/notificacoes.page.ts":
/*!***************************************************!*\
  !*** ./src/app/notificacoes/notificacoes.page.ts ***!
  \***************************************************/
/*! exports provided: NotificacoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacoesPage", function() { return NotificacoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






let NotificacoesPage = class NotificacoesPage {
    constructor(router, http, zone, navCtrl, activerouter, alertCtrl) {
        this.router = router;
        this.http = http;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.activerouter = activerouter;
        this.alertCtrl = alertCtrl;
        this.notificacoes = [];
        this.logado = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.zone.run(() => {
                const dataz = JSON.parse(localStorage.getItem('cliente_data'));
                const data = JSON.parse(localStorage.getItem('cliente_data'));
                //this.alert_erro('Ops :(', 'Falta uma informação', '' + data);
                if (data == null) {
                    this.logado = false;
                }
                else {
                    this.logado = true;
                    this.http.get(new _config__WEBPACK_IMPORTED_MODULE_5__["Config"]().local_link_api + '/api/notificacoes?id=' + dataz['id'], [], {}).then((data) => {
                        this.notificacoes = JSON.parse(data.data);
                    });
                }
            });
        });
    }
    routerlink_api(string) {
        this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.navCtrl.navigateForward(string);
        }));
    }
};
NotificacoesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
NotificacoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notificacoes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notificacoes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notificacoes/notificacoes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notificacoes.page.scss */ "./src/app/notificacoes/notificacoes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], NotificacoesPage);



/***/ })

}]);
//# sourceMappingURL=notificacoes-notificacoes-module-es2015.js.map