(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["produtos-produtos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode='ios'>\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n              <a (click)=\"routerlink_api('/cardapio/' + id)\"><h3><ion-icon style=\"color: white;\" name=\"arrow-back\"></ion-icon></h3></a>\n              </ion-buttons>\n        </ion-buttons>\n        <ion-title><b>Comprar</b></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n  <div *ngFor=\"let car of produtos\">\n\n      <ion-item (click)=\"rout(car.id);\">\n        <ion-thumbnail slot=\"start\" style=\"width: 60px; height: 60px;\">\n          <img [src]=\"img(car.img)\">\n        </ion-thumbnail>\n        <div class=\"card\"><p><b>{{ car.nome }}</b></p>\n          <p *ngIf='car.destaque == \"Sim\"'><font color='#d4950b'><ion-icon name='star'></ion-icon> Produto em destaque</font></p>\n          <p>{{ car.descricao }}</p>\n          <p >{{ precos(car.preco) }}</p> \n\n\n         </div>\n        \n        </ion-item>\n\n      </div> \n\n</ion-content>\n \n<style>\n    \n    ion-item {\n    --background: #fff;\n    --color: #fff;\n}\n  \nion-content {\n    --background: #fff;\n\n} .card {\n  background-color: #fff;\n  color: white;\n  padding: 2px;  \n  height: auto;     \n  white-space: break-word;\n  border-radius: 5px;\n  color: black;\n}.cards { \n  max-width: 300px; \n  margin: 0 auto;  \n  display: grid;\n  grid-gap: 1rem;\n  white-space: break-word;\n}  \nion-thumbnail > img{\n  width: inherit; height: inherit;\n}\n  </style>");

/***/ }),

/***/ "./src/app/produtos/produtos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/produtos/produtos.module.ts ***!
  \*********************************************/
/*! exports provided: ProdutosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosPageModule", function() { return ProdutosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _produtos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produtos.page */ "./src/app/produtos/produtos.page.ts");







const routes = [
    {
        path: '',
        component: _produtos_page__WEBPACK_IMPORTED_MODULE_6__["ProdutosPage"]
    }
];
let ProdutosPageModule = class ProdutosPageModule {
};
ProdutosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_produtos_page__WEBPACK_IMPORTED_MODULE_6__["ProdutosPage"]]
    })
], ProdutosPageModule);



/***/ }),

/***/ "./src/app/produtos/produtos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/produtos/produtos.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG9zL3Byb2R1dG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/produtos/produtos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/produtos/produtos.page.ts ***!
  \*******************************************/
/*! exports provided: ProdutosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosPage", function() { return ProdutosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");







let ProdutosPage = class ProdutosPage {
    constructor(route, router, http, zone, alertCtrl, sanitizer, navCtrl, loadingController, platform) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.platform = platform;
        this.aa = "teste";
        this.total_carrinho = 0;
        this.produtos = [];
        this.locais = [];
        this.link = new _config__WEBPACK_IMPORTED_MODULE_6__["Config"]().local_link_img;
    }
    img(img) {
        if (img == null) {
            return this.link + "none.png";
        }
        else {
            return this.link + "" + img;
        }
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.platform.backButton.subscribe(() => {
                    this.routerlink_api('/cardapio/' + this.id);
                });
                this.id = JSON.parse(localStorage.getItem('restaurante'))['id'];
                this.total_carrinho = 0;
                const data = JSON.parse(localStorage.getItem('carrinho'));
                if (data == null) {
                    this.carrinho_boolean = false;
                }
                else {
                    this.carrinho_boolean = true;
                    this.carrinho = data;
                    var product_ony = 0;
                    this.carrinho.forEach(car => {
                        product_ony = 0;
                        product_ony = Number(product_ony) + Number(car['preco']);
                        //this.total_carrinho = Number(this.total_carrinho) + Number(car['preco']);
                        car['adicionais'].forEach(add => {
                            //this.total_carrinho = Number(this.total_carrinho) + Number(add['preco']);
                            product_ony = Number(product_ony) + Number(add['preco']);
                        });
                        product_ony = Number(car['quantidade']) * Number(product_ony);
                        this.total_carrinho = Number(this.total_carrinho) + Number(product_ony);
                    });
                }
                var id = this.router.url.replace('/produtos/', '');
                this.carregando();
                this.http.get(new _config__WEBPACK_IMPORTED_MODULE_6__["Config"]().local_link_api + '/api/produtos/' + id + '/' + JSON.parse(localStorage.getItem('restaurante'))['id'], {}, {}).then((data) => {
                    var datajson = JSON.parse(data.data);
                    this.loading.dismiss();
                    if (datajson.status == 204) {
                        this.alert_erro();
                        return false;
                    }
                    this.produtos = datajson;
                }).catch((err) => {
                    this.loading.dismiss();
                });
            }));
        });
    }
    carregando() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Carregando'
            });
            yield this.loading.present();
        });
    }
    alert_erro() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'AVISO!',
                subHeader: 'Essa categoria esta vazia',
                message: '',
                buttons: [{
                        text: 'Entendi!',
                        handler: () => {
                            this.navCtrl.back();
                        }
                    }]
            });
            yield alert.present();
        });
    }
    alert_erroz(header, subheader, message) {
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
    precos(string) {
        if (string == 0) {
            return "";
        }
        else {
            return 'R$ ' + string.replace('.', ',');
        }
    }
    routerlink_api(string) {
        if (string == "/pedido") {
            this.http.get(new _config__WEBPACK_IMPORTED_MODULE_6__["Config"]().local_link_api + '/api/version.json', {}, {}).then((data) => {
                var v = JSON.parse(data.data);
                {
                    this.http.get(new _config__WEBPACK_IMPORTED_MODULE_6__["Config"]().local_link_api + '/api/locais', {}, {}).then((data) => {
                        this.locais = JSON.parse(data.data);
                        this.locais.forEach(element => {
                            if (element['id'] == this.local['id']) {
                                if (element['status'] == "FECHADO" || element['status'] == null) {
                                    this.alert_erroz("AVISO!!", "Local fechado no momento", "Veja o horário de funcionamento em contato");
                                }
                                else {
                                    this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                        yield this.navCtrl.navigateForward(string);
                                    }));
                                }
                            }
                        });
                    }).catch((err) => {
                    });
                }
            }).catch((err) => {
            });
        }
        else {
            this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.navCtrl.navigateForward(string);
            }));
        }
    }
    rout(id) {
        this.router.navigateByUrl('/produto/' + id);
    }
};
ProdutosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
ProdutosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produtos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./produtos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./produtos.page.scss */ "./src/app/produtos/produtos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], ProdutosPage);



/***/ })

}]);
//# sourceMappingURL=produtos-produtos-module-es2015.js.map