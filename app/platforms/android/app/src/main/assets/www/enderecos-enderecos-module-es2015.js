(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enderecos-enderecos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/enderecos/enderecos.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enderecos/enderecos.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode='ios'>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"criar = true\" *ngIf=\"criar == false\">\n        <font color=\"white\"><ion-icon slot=\"end\" name=\"add\"></ion-icon></font>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Seus endereços</ion-title>\n    <ion-buttons slot=\"secondary\">\n\n\n      <ion-button *ngIf=\"criar == false && id_restaurante != null\" (click)='routerlink_api(\"/pedido/\"+id_restaurante.id)'>\n        <font color=\"white\"><ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon></font>\n      </ion-button>\n\n      <ion-button *ngIf=\"criar == false && id_restaurante == null\" (click)='routerlink_api(\"/conta\")'>\n        <font color=\"white\"><ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon></font>\n      </ion-button>\n\n\n\n      <ion-button *ngIf=\"criar == true\" (click)='criar = false'>\n        <font color=\"white\"><ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon></font>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content *ngIf=\"criar == false\" class=\"ion-padding\">\n\n  <ion-list *ngFor=\"let end of enderecos\">\n    <ion-card>\n      <ion-card-content>\n        <b> {{ end.endereco }} | N°{{ end.numero }}</b><br>\n        {{ getbairro(end.bairro) }} <br><br>\n         <a (click)='delete(end.id)'>Excluir</a>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n</ion-content> \n\n\n<ion-content *ngIf=\"criar == true\" class=\"ion-padding\" >\n\n  <ion-list>\n    <ion-item>\n      <ion-label  position='floating'>Seu endereço</ion-label>\n      <ion-input  [(ngModel)]='rua_s' type='text'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position='floating'>Número</ion-label>\n      <ion-input [(ngModel)]='numero_s'  type='text'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position='floating'>Complemento</ion-label>\n      <ion-input [(ngModel)]='complemento_s' type='text'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position='floating'>Cidade</ion-label>\n      <ion-select [(ngModel)]='cidade_s' placeholder=\"Selecione sua cidade\" >\n        <div *ngFor=\"let cidade of cidades\"> \n          <ion-select-option value='{{ cidade.id }}'>{{cidade.nome}}</ion-select-option>\n        </div>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position='floating'>Bairro</ion-label>\n      <ion-select [(ngModel)]='bairro_s' placeholder=\"Selecione seu bairro\">\n        <div  *ngFor=\"let bairro of betbairros()\">\n          <ion-select-option value='{{ bairro.id }}'>{{bairro.nome}}</ion-select-option>\n        </div>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-button (click)='save()' expand=\"full\" color=\"warning\">Salvar</ion-button>\n\n</ion-content> ");

/***/ }),

/***/ "./src/app/enderecos/enderecos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/enderecos/enderecos.module.ts ***!
  \***********************************************/
/*! exports provided: EnderecosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecosPageModule", function() { return EnderecosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _enderecos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enderecos.page */ "./src/app/enderecos/enderecos.page.ts");







const routes = [
    {
        path: '',
        component: _enderecos_page__WEBPACK_IMPORTED_MODULE_6__["EnderecosPage"]
    }
];
let EnderecosPageModule = class EnderecosPageModule {
};
EnderecosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_enderecos_page__WEBPACK_IMPORTED_MODULE_6__["EnderecosPage"]]
    })
], EnderecosPageModule);



/***/ }),

/***/ "./src/app/enderecos/enderecos.page.scss":
/*!***********************************************!*\
  !*** ./src/app/enderecos/enderecos.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZGVyZWNvcy9lbmRlcmVjb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/enderecos/enderecos.page.ts":
/*!*********************************************!*\
  !*** ./src/app/enderecos/enderecos.page.ts ***!
  \*********************************************/
/*! exports provided: EnderecosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecosPage", function() { return EnderecosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");





let EnderecosPage = class EnderecosPage {
    constructor(alertCtrl, http, zone, navCtrl, loadingController) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.locais = [];
        this.enderecos = [];
        this.bairros = [];
        this.cidades = [];
        this.criar = false;
        this.id_restaurante = [];
        const datauser = JSON.parse(localStorage.getItem('cliente_data'));
        this.id_restaurante = JSON.parse(localStorage.getItem('restaurante'));
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/enderecos?id=' + datauser['id'], {}, {}).then((data) => {
            this.enderecos = JSON.parse(data.data);
        });
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/bairros', {}, {}).then((data) => {
            this.bairros = JSON.parse(data.data);
        });
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/cidades', {}, {}).then((data) => {
            this.cidades = JSON.parse(data.data);
        });
    }
    betbairros() {
        var array = [];
        this.bairros.forEach(b => {
            if (b['cidade'] == this.cidade_s) {
                array.push(b);
            }
        });
        return array;
    }
    delete(id) {
        var datauser = JSON.parse(localStorage.getItem('cliente_data'));
        this.http.delete(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/enderecos?id=' + id, {}, {}).then((data) => {
            this.alert_erro('Pronto', 'Seu endereço foi excluído', '');
            this.enderecos = [];
            this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/enderecos?id=' + datauser['id'], {}, {}).then((data) => {
                this.enderecos = JSON.parse(data.data);
            });
        });
    }
    save() {
        var datauser = JSON.parse(localStorage.getItem('cliente_data'));
        var bodys = {
            "endereco": this.rua_s,
            "numero": this.numero_s,
            "complemento": this.complemento_s,
            "de": datauser['id'],
            "cidade": this.cidade_s,
            "bairro": this.bairro_s
        };
        this.http.setDataSerializer('json');
        this.http.post(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/enderecos', bodys, {}).then((data) => {
            this.alert_erro('Ebaa', 'Tudo certinho', 'Seu endereço foi cadastrado com sucesso.');
            this.criar = false;
            this.enderecos = [];
            this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/enderecos?id=' + datauser['id'], {}, {}).then((data) => {
                this.enderecos = JSON.parse(data.data);
            });
        }).catch((err) => {
        });
    }
    ngOnInit() {
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
    getbairro(id) {
        var nome;
        this.bairros.forEach(b => {
            if (b['id'] == id) {
                nome = b['nome'];
            }
        });
        return nome;
    }
};
EnderecosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
EnderecosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-enderecos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./enderecos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/enderecos/enderecos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./enderecos.page.scss */ "./src/app/enderecos/enderecos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], EnderecosPage);



/***/ })

}]);
//# sourceMappingURL=enderecos-enderecos-module-es2015.js.map