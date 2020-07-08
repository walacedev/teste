(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedido-info-pedido-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pedido-info/pedido-info.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pedido-info/pedido-info.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar mode='ios'>\n        <ion-buttons slot=\"start\">\n            <a (click)=\"routerlink_api('/conta')\">\n              <h3><ion-icon style=\"color: white;\" name=\"arrow-back\"></ion-icon></h3>\n            </a>\n          </ion-buttons>\n      <ion-title>Contato</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content fullscreen>\n    <ion-list>\n      <ion-list-header>\n        Qual seu nome?\n      </ion-list-header>\n      <ion-item>\n        <ion-input [(ngModel)]='nome' type='text'></ion-input>\n      </ion-item>\n    </ion-list>\n  \n    <ion-list>\n        <ion-list-header>\n          Qual seu telefone?\n        </ion-list-header>\n        <ion-item>\n          <ion-input [(ngModel)]='telefone' type='text'></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Qual seu e-mail?\n        </ion-list-header>\n        <ion-item>\n          <ion-input [(ngModel)]='email' type='email'></ion-input>\n        </ion-item>\n      </ion-list>\n      \n      <ion-list>\n        <ion-list-header> \n          Qual o assunto?\n        </ion-list-header>\n        <ion-item>\n            <ion-select placeholder=\"Selecione um assunto\" [(ngModel)]='assunto' interface='action-sheet' cancelText=\"Cancelar\">\n                <ion-select-option value=\"SUGERIR\">Sugerir estabelecimento</ion-select-option>\n                <ion-select-option value=\"RECLACACAO\">Reclamação</ion-select-option>\n                <ion-select-option value=\"SUGESTAO\">Sugestão</ion-select-option>\n                <ion-select-option value=\"PARCEIRO\">Parceria</ion-select-option>\n              </ion-select>\n        </ion-item>\n      </ion-list>\n  \n    <ion-list>\n      <ion-list-header>\n        Deixe sua mensagem\n      </ion-list-header>\n      <ion-item>\n        <ion-input [(ngModel)]='msg' type='text'></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class=\"ion-text-center\">\n    <ion-button (click)='send()' color='warning'>Enviar contato</ion-button>\n    </div>\n  \n  \n  \n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/pedido-info/pedido-info.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pedido-info/pedido-info.module.ts ***!
  \***************************************************/
/*! exports provided: PedidoInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoInfoPageModule", function() { return PedidoInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pedido_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pedido-info.page */ "./src/app/pedido-info/pedido-info.page.ts");







const routes = [
    {
        path: '',
        component: _pedido_info_page__WEBPACK_IMPORTED_MODULE_6__["PedidoInfoPage"]
    }
];
let PedidoInfoPageModule = class PedidoInfoPageModule {
};
PedidoInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pedido_info_page__WEBPACK_IMPORTED_MODULE_6__["PedidoInfoPage"]]
    })
], PedidoInfoPageModule);



/***/ }),

/***/ "./src/app/pedido-info/pedido-info.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pedido-info/pedido-info.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkby1pbmZvL3BlZGlkby1pbmZvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pedido-info/pedido-info.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pedido-info/pedido-info.page.ts ***!
  \*************************************************/
/*! exports provided: PedidoInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoInfoPage", function() { return PedidoInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






let PedidoInfoPage = class PedidoInfoPage {
    constructor(router, http, zone, navCtrl, activerouter, alertCtrl, platform) {
        this.router = router;
        this.http = http;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.activerouter = activerouter;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.platform.backButton.subscribe(() => {
            this.routerlink_api('/conta');
        });
    }
    ngOnInit() {
    }
    alert_erro(header, subheader, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: header,
                subHeader: subheader,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    send() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var bodys = {
                "nome": this.nome,
                "email": this.email,
                "assunto": this.assunto,
                "msg": this.msg,
                "telefone": this.telefone
            };
            this.http.setDataSerializer('json');
            this.http.post(new _config__WEBPACK_IMPORTED_MODULE_5__["Config"]().local_link_api + '/api/email', bodys, {}).then((data) => {
                this.alert_erro('SUCESSO', 'Seu contato foi enviado com sucesso', "");
                this.navCtrl.navigateRoot("/home");
            }).catch((err) => {
                this.alert_erro("erro", "", err);
            });
        });
    }
    routerlink_api(string) {
        this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.navCtrl.navigateForward(string);
        }));
    }
};
PedidoInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
PedidoInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pedido-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pedido-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pedido-info/pedido-info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pedido-info.page.scss */ "./src/app/pedido-info/pedido-info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], PedidoInfoPage);



/***/ })

}]);
//# sourceMappingURL=pedido-info-pedido-info-module-es2015.js.map