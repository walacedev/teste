(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contato-contato-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contato/contato.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contato/contato.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n              <a (click)=\"routerlink_api('/home')\"><h3><ion-icon style=\"color: white;\" name=\"arrow-back\"></ion-icon></h3></a>\n              </ion-buttons>\n        </ion-buttons>\n    <ion-title>{{ nome }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n\n\n    <ion-card>\n        <ion-card-header>\n          <ion-card-title><font color='white'>{{ nome }}</font></ion-card-title>\n          <ion-card-subtitle><font color='gray'>{{ sobre }}</font></ion-card-subtitle>\n        </ion-card-header>\n        <ion-list>\n          <ion-list-header>\n            Telefone\n          </ion-list-header>\n          <ion-item>\n            <a href=\"tel:{{ local_phone }}\">{{ local_phone }}</a>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-list-header>\n            WhatsApp\n          </ion-list-header>\n          <ion-item>\n            <a href=\"https://api.whatsapp.com/send?phone=55{{ whatsapp }}\" target=\"_system\">{{ whatsapp }}</a>\n          </ion-item>\n        </ion-list>\n        <br>\n      </ion-card>\n  \n\n\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title><font color='white'>WallEstudios</font></ion-card-title>\n          </ion-card-header>\n        <ion-card-content style=\"text-transform: uppercase\">\n          <ion-text>\n              Criamos seu app\n          </ion-text>\n          <br>\n          <ion-text><font size=\"5px\"><a href=\"https://api.whatsapp.com/send?phone=553191705191\" target=\"_system\">Peça o seu</a></font></ion-text>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>\n\n\n\n<style>\nion-card {\n      --background: rgb(29, 0, 75);\n      --color: #fff;\n    }\n\n    ion-item {\n      --background: rgb(29, 0, 75);\n    }\n\n</style>\n");

/***/ }),

/***/ "./src/app/contato/contato.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contato/contato.module.ts ***!
  \*******************************************/
/*! exports provided: ContatoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoPageModule", function() { return ContatoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contato_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contato.page */ "./src/app/contato/contato.page.ts");







const routes = [
    {
        path: '',
        component: _contato_page__WEBPACK_IMPORTED_MODULE_6__["ContatoPage"]
    }
];
let ContatoPageModule = class ContatoPageModule {
};
ContatoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_contato_page__WEBPACK_IMPORTED_MODULE_6__["ContatoPage"]]
    })
], ContatoPageModule);



/***/ }),

/***/ "./src/app/contato/contato.page.scss":
/*!*******************************************!*\
  !*** ./src/app/contato/contato.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhdG8vY29udGF0by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/contato/contato.page.ts":
/*!*****************************************!*\
  !*** ./src/app/contato/contato.page.ts ***!
  \*****************************************/
/*! exports provided: ContatoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoPage", function() { return ContatoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");




let ContatoPage = class ContatoPage {
    constructor(navCtrl, zone) {
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.horarios = [];
        this.endereco = new _config__WEBPACK_IMPORTED_MODULE_3__["Config"]().local_adress;
        this.telefone = new _config__WEBPACK_IMPORTED_MODULE_3__["Config"]().local_phone;
        this.whatsapp = new _config__WEBPACK_IMPORTED_MODULE_3__["Config"]().local_whatsapp;
        this.local_phone = new _config__WEBPACK_IMPORTED_MODULE_3__["Config"]().local_phone;
        this.nome = new _config__WEBPACK_IMPORTED_MODULE_3__["Config"]().local_name;
        this.sobre = new _config__WEBPACK_IMPORTED_MODULE_3__["Config"]().local_about;
        this.horarios = JSON.parse(localStorage.getItem('horario'));
        if (this.horarios['segunda'] != "NA") {
            this.segunda = JSON.parse(this.horarios['segunda']);
        }
        else {
            this.segunda = "NA";
        }
        if (this.horarios['terca'] != "NA") {
            this.terca = JSON.parse(this.horarios['terca']);
        }
        else {
            this.terca = "NA";
        }
        if (this.horarios['quarta'] != "NA") {
            this.quarta = JSON.parse(this.horarios['quarta']);
        }
        else {
            this.quarta = "NA";
        }
        if (this.horarios['quinta'] != "NA") {
            this.quinta = JSON.parse(this.horarios['quinta']);
        }
        else {
            this.quinta = "NA";
        }
        if (this.horarios['sexta'] != "NA") {
            this.sexta = JSON.parse(this.horarios['sexta']);
        }
        else {
            this.sexta = "NA";
        }
        if (this.horarios['sabado'] != "NA") {
            this.sabado = JSON.parse(this.horarios['sabado']);
        }
        else {
            this.sabado = "NA";
        }
        if (this.horarios['domingo'] != "NA") {
            this.domingo = JSON.parse(this.horarios['domingo']);
        }
        else {
            this.domingo = "NA";
        }
    }
    routerlink_api(string) {
        this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.navCtrl.navigateForward(string);
        }));
    }
    ngOnInit() {
    }
};
ContatoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
ContatoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contato',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contato.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contato/contato.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contato.page.scss */ "./src/app/contato/contato.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], ContatoPage);



/***/ })

}]);
//# sourceMappingURL=contato-contato-module-es2015.js.map