(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locais-locais-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/locais/locais.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/locais/locais.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode='ios'>\n    <ion-title>Selecione um local</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div *ngFor=\"let local of locais\">\n\n <ion-card (click)=\"set(local)\">\n  <ion-card-header>\n    <b>{{ local.nome }}</b>\n    <p>{{ get_estados(local.estado) }}</p>\n  </ion-card-header>\n </ion-card> \n</div>\n</ion-content>\n<style>\n  ion-card { \n    --background: #fff;\n    --color: #000\n  }\n\n\n</style> ");

/***/ }),

/***/ "./src/app/locais/locais.module.ts":
/*!*****************************************!*\
  !*** ./src/app/locais/locais.module.ts ***!
  \*****************************************/
/*! exports provided: LocaisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaisPageModule", function() { return LocaisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _locais_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locais.page */ "./src/app/locais/locais.page.ts");







const routes = [
    {
        path: '',
        component: _locais_page__WEBPACK_IMPORTED_MODULE_6__["LocaisPage"]
    }
];
let LocaisPageModule = class LocaisPageModule {
};
LocaisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_locais_page__WEBPACK_IMPORTED_MODULE_6__["LocaisPage"]]
    })
], LocaisPageModule);



/***/ }),

/***/ "./src/app/locais/locais.page.scss":
/*!*****************************************!*\
  !*** ./src/app/locais/locais.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2Fpcy9sb2NhaXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/locais/locais.page.ts":
/*!***************************************!*\
  !*** ./src/app/locais/locais.page.ts ***!
  \***************************************/
/*! exports provided: LocaisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaisPage", function() { return LocaisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");





let LocaisPage = class LocaisPage {
    constructor(alertCtrl, http, zone, navCtrl, loadingController) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.locais = [];
        this.estados = [];
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.zone.run(() => {
                this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/cidades', {}, {}).then((data) => {
                    this.locais = JSON.parse(data.data);
                }).catch((err) => {
                    this.locais = [];
                    this.getitens();
                });
                this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/estados', {}, {}).then((data) => {
                    this.estados = JSON.parse(data.data);
                }).catch((err) => {
                    this.estados = [];
                    this.getitens();
                });
            });
        });
    }
    getitens() {
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/cidades', {}, {}).then((data) => {
            this.locais = JSON.parse(data.data);
        }).catch((err) => {
        });
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/estados', {}, {}).then((data) => {
            this.estados = JSON.parse(data.data);
        }).catch((err) => {
        });
    }
    ngOnInit() {
    }
    get_estados(eid) {
        var nome;
        this.estados.forEach(e => {
            if (e['id'] == eid) {
                nome = e['nome'];
            }
        });
        return nome;
    }
    set(local) {
        localStorage.setItem('local', JSON.stringify(local));
        this.navCtrl.navigateForward("/home");
    }
    routerlink_api(string) {
        this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.navCtrl.navigateForward(string);
        }));
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
};
LocaisPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
LocaisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-locais',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./locais.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/locais/locais.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./locais.page.scss */ "./src/app/locais/locais.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], LocaisPage);



/***/ })

}]);
//# sourceMappingURL=locais-locais-module-es2015.js.map