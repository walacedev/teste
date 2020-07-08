(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["avaliar-avaliar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/avaliar/avaliar.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/avaliar/avaliar.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode='ios'>\n    <ion-title>Avaliação #{{ id }}00</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list>\n    <ion-list-header>\n      Como estava a qualidade do produto?\n    </ion-list-header>\n    <ion-item>\n      <ion-range [(ngModel)]='qualidade' min=\"0\" max=\"5\" pin color=\"warning\"></ion-range>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Como foi a entrega?\n    </ion-list-header>\n    <ion-item>\n      <ion-range [(ngModel)]='rapidez' min=\"0\" max=\"5\" pin color=\"warning\"></ion-range>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Qual sua avaliação?\n    </ion-list-header>\n    <ion-item>\n      <ion-range [(ngModel)]='avaliacao' min=\"0\" max=\"5\" pin color=\"warning\"></ion-range>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Deixe um comentário\n    </ion-list-header>\n    <ion-item>\n      <ion-input [(ngModel)]='comentario' type='text'></ion-input>\n    </ion-item>\n  </ion-list>\n  <div class=\"ion-text-center\">\n  <ion-button (click)='send()' color='warning'>Enviar avaliação</ion-button>\n  </div>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/avaliar/avaliar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/avaliar/avaliar.module.ts ***!
  \*******************************************/
/*! exports provided: AvaliarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvaliarPageModule", function() { return AvaliarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _avaliar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avaliar.page */ "./src/app/avaliar/avaliar.page.ts");







const routes = [
    {
        path: '',
        component: _avaliar_page__WEBPACK_IMPORTED_MODULE_6__["AvaliarPage"]
    }
];
let AvaliarPageModule = class AvaliarPageModule {
};
AvaliarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_avaliar_page__WEBPACK_IMPORTED_MODULE_6__["AvaliarPage"]]
    })
], AvaliarPageModule);



/***/ }),

/***/ "./src/app/avaliar/avaliar.page.scss":
/*!*******************************************!*\
  !*** ./src/app/avaliar/avaliar.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F2YWxpYXIvYXZhbGlhci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/avaliar/avaliar.page.ts":
/*!*****************************************!*\
  !*** ./src/app/avaliar/avaliar.page.ts ***!
  \*****************************************/
/*! exports provided: AvaliarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvaliarPage", function() { return AvaliarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






let AvaliarPage = class AvaliarPage {
    constructor(router, http, zone, navCtrl, activerouter, alertCtrl, platform) {
        this.router = router;
        this.http = http;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.activerouter = activerouter;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.id = this.router.url.replace('/avaliar/', '');
        this.platform.backButton.subscribe(() => {
            this.routerlink_api('/pedidos');
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
            const alert = yield this.alertCtrl.create({
                header: 'Sua avaliação',
                subHeader: 'Qualidade: ' + this.qualidade,
                message: 'Entrega: ' + this.rapidez + "<br>Avaliação: " + this.avaliacao + "<br><br>Comentário: " + this.comentario,
                buttons: [
                    {
                        text: 'Alterar',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Confirmar',
                        /*
                     'de' $de,
                                                      'qualidade' $qualidade,
                                                      'entrega' $entrega,
                                                      'avaliação' $avaliacao,
                                                      'texto' $texto,
                                                      'restaurante' $restaurante
                      */
                        handler: (data) => {
                            const dataz = JSON.parse(localStorage.getItem('cliente_data'));
                            var bodys = {
                                "qualidade": this.qualidade,
                                "entrega": this.rapidez,
                                "avaliacao": this.avaliacao,
                                "texto": this.comentario,
                                "de": dataz['id'],
                                "restaurante": this.id
                            };
                            this.http.setDataSerializer('json');
                            this.http.post(new _config__WEBPACK_IMPORTED_MODULE_5__["Config"]().local_link_api + '/api/avaliacao', bodys, {}).then((data) => {
                                this.alert_erro('SUCESSO', 'Sua avaliação foi registrada', '');
                                this.navCtrl.navigateRoot("/home");
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    routerlink_api(string) {
        this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.navCtrl.navigateForward(string);
        }));
    }
};
AvaliarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
AvaliarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-avaliar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./avaliar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/avaliar/avaliar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./avaliar.page.scss */ "./src/app/avaliar/avaliar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], AvaliarPage);



/***/ })

}]);
//# sourceMappingURL=avaliar-avaliar-module-es2015.js.map