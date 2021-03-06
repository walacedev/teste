(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["produto-produto-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/produto/produto.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/produto/produto.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode='ios'>\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n              <a routerLink=\"/produtos/{{ back_button }}\"><h3><ion-icon style=\"color: white;\" name=\"arrow-back\"></ion-icon></h3></a>\n              </ion-buttons>\n        </ion-buttons>\n        <ion-title><b>Comprar</b></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle><font color=\"white\">Resumo do produto</font></ion-card-subtitle>\n          <h3>Quantidade <ion-text color=\"success\">\n            <div class=\"flex_row\">\n              <ion-icon style=\"color: red; width: 50px;\" name=\"remove-circle\" (click)='remover_produto();'></ion-icon>\n               {{ this.quantidade }}\n                <ion-icon style=\"color: green; width: 50px;\" name=\"add-circle\" (click)='adicionar_produto();'></ion-icon>\n              \n              </div>\n          </ion-text>\n          <br>\n        <font size='2px'>Disponível para compra: {{ this.estoque }} </font></h3>\n        </ion-card-header>\n        <ion-card-content style=\"text-transform: uppercase\">\n          <h2><b>{{ this.nome }}</b></h2> <br>\n            {{ this.descricao }} <br>\n            Valor <ion-text style=\"text-transform: uppercase\" color=\"warning\" *ngIf=\"this.nome != null\">\n              {{ precos(this.preco) }}\n            </ion-text>\n        </ion-card-content>\n      </ion-card>\n\n      <div *ngFor=\"let item of limit\">\n          {{ item.nome }}\n        </div>\n      <div *ngFor=\"let car of menuarray_new\">\n          <ion-card>\n              <ion-card-header *ngIf='car.gratuito <= 0 && car.prevalecer != \"Sim\"'>\n                 {{ car.nome }} ({{ qtd(this.final, car.id) }}/{{ car.quantidade }})\n                \n              </ion-card-header>\n              <ion-card-header *ngIf='car.prevalecer == \"Sim\"'>\n                 {{ car.nome }} ({{ qtd(this.final_prev, car.id) }}/{{ car.quantidade }})\n              </ion-card-header>\n              <ion-card-header *ngIf='car.gratuito > 0'>\n                {{ car.nome }} ({{ qtd(this.final_gratuito, car.id) }}/{{ car.quantidade }})\n                <p>Até {{ car.gratuito }} gratuitos</p>\n              </ion-card-header>\n              <ion-card-content>  \n                <div class=\"cards\">\n                  <div *ngIf='car.gratuito == 0 || car.gratuito == null'>\n                    <ion-item *ngFor=\"let add of categorias(car.id)\">\n                      <div class=\"card\"><p><b>{{ add.nome }}</b></p>\n\n                       <p>{{ add.descricao }}</p>\n                       <p >{{ precos(add.preco) }}</p> \n                      </div>\n                      <br>\n                      <div class=\"flex_row\">\n                        <ion-icon style=\"color: red; width: 50px;\" name=\"remove-circle\" (click)='remover(add.id);'></ion-icon>\n                         {{ add.quantidade }}\n                          <ion-icon style=\"color: green; width: 50px;\" name=\"add-circle\" (click)='adicionar(car.id, add.id, add.gratuito);'></ion-icon>\n                      </div>\n                    </ion-item>\n                  </div>\n                    <ion-item *ngFor=\"let add of categorias_gratuitos(car.id, car.gratuito)\">\n                      <div class=\"card\"><p><b>{{ add.nome }}</b></p>\n                       \n                       <p>{{ add.descricao }}</p>\n                        \n                      <div *ngIf='add.gratuito == \"SIM\"'>\n                        <p><b><font color='green'>Gratuito</font></b></p>\n                       </div>\n                       <div *ngIf='add.gratuito != \"SIM\"'>\n                        <p>{{ precos(add.preco) }}</p>\n                       </div>\n                      </div>\n                      <br>\n                    \n                      <div class=\"flex_row\" slot=\"end\">\n                        <ion-icon style=\"color: red; font-size: 25px; width: 35px\" name=\"remove-circle\" (click)='remover(add.id);'></ion-icon>\n                         {{ add.quantidade }}\n                          <ion-icon style=\"color: green; font-size: 25px; width: 35px;\" name=\"add-circle\" (click)='adicionar(car.id, add.id, add.gratuito);'></ion-icon>\n                      </div>\n                    </ion-item>\n                  </div> \n                </ion-card-content>\n          </ion-card>\n         \n         \n      </div>\n          <br> \n           \n\n</ion-content>\n<ion-footer>\n  <ion-toolbar mode='ios'>\n    <ion-button slot=\"start\" size=\"small\" color='light'><font color=\"#512b72\">{{ precos(this.total) }}</font></ion-button>\n\n      <ion-button *ngIf=\"this.nome != null\" slot=\"end\" size=\"small\" color='light' (click)=\"addcart()\">\n        <font color=\"#512b72\">Adicionar ao carrinho</font></ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n<style>\n\n.card {\n  background-color: #fff;\n  color: white;\n  padding: 3px;  \n  height: auto;     \n  white-space: break-word;\n  border-radius: 5px;\n  color: black;\n}.cards { \n  max-width: 500px; \n  margin: 0 auto;  \n  display: grid;\n  grid-gap: 1rem;\n  white-space: break-word;\n}\n\nion-item{\n  white-space: break-word;\n}\n.red:before {\n    color: red;\n    \n    }\n\n    .green:before {\n    color: green;\n    }\n\n    .flex_row {\n    float: right;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row; \n    flex-direction: row;\n    \n    }\n\n  \n\n</style>");

/***/ }),

/***/ "./src/app/produto/produto.module.ts":
/*!*******************************************!*\
  !*** ./src/app/produto/produto.module.ts ***!
  \*******************************************/
/*! exports provided: ProdutoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoPageModule", function() { return ProdutoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _produto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produto.page */ "./src/app/produto/produto.page.ts");







const routes = [
    {
        path: '',
        component: _produto_page__WEBPACK_IMPORTED_MODULE_6__["ProdutoPage"]
    }
];
let ProdutoPageModule = class ProdutoPageModule {
};
ProdutoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_produto_page__WEBPACK_IMPORTED_MODULE_6__["ProdutoPage"]]
    })
], ProdutoPageModule);



/***/ }),

/***/ "./src/app/produto/produto.page.scss":
/*!*******************************************!*\
  !*** ./src/app/produto/produto.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG8vcHJvZHV0by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/produto/produto.page.ts":
/*!*****************************************!*\
  !*** ./src/app/produto/produto.page.ts ***!
  \*****************************************/
/*! exports provided: ProdutoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoPage", function() { return ProdutoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");






let ProdutoPage = class ProdutoPage {
    constructor(route, router, http, alertCtrl, navCtrl, loadingController, zone, platform) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.zone = zone;
        this.platform = platform;
        this.product = [];
        this.adicionais = [];
        this.total = 0;
        this.quantidade = 1;
        this.final = [];
        this.final_prev = [];
        this.final_gratuito = [];
        this.itens = [];
        this.jsonfinal = [];
        this.adicionaisitem = [];
        this.menuarray = [];
        this.menuarray_new = [];
        this.restaurante = [];
        this.NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/;
        //TIPOS: 1 = ADICIONAL | 2 = COMPLEMENTO | 3 = PRODUTO | 4 = OPÇÕES
        this.limit = [];
        this.checked = [];
        //Adds the checkedbox to the array and check if you unchecked it
        this.prices = [];
    }
    carregando() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Carregando'
            });
            yield this.loading.present();
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.final = [];
            this.final_prev = [];
            this.itens = [];
            this.jsonfinal = [];
            this.adicionaisitem = [];
            this.menuarray = [];
            this.menuarray_new = [];
            this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.platform.backButton.subscribe(() => {
                    this.routerlink_api('/produtos/' + this.back_button);
                });
                //this.carregando();
                var id = this.router.url.replace('/produto/', '');
                this.http.get(new _config__WEBPACK_IMPORTED_MODULE_5__["Config"]().local_link_api + '/api/produto/' + id, {}, {}).then((data) => {
                    var datajson = JSON.parse(data.data);
                    this.product = datajson[0];
                    this.nome = this.product['nome'];
                    this.imglogo = new _config__WEBPACK_IMPORTED_MODULE_5__["Config"]().local_link_img + this.product['img'];
                    this.descricao = this.product['descricao'];
                    this.preco = this.product['preco'];
                    this.back_button = this.product['sub_produtos'];
                    this.total = Number(this.product['preco']);
                    this.estoque = Number(this.product['estoque']);
                    datajson.forEach(addc => {
                        if (addc['prevalecer'] != undefined) {
                            if (addc['de'].includes(this.product['id']) == true) {
                                this.menuarray_new.push(addc);
                            }
                        }
                        else if (addc['sub_produto'] == this.product['sub_produtos']) {
                            this.adicionaisitem.push({ nome: addc['nome'], de: addc['de'], descricao: addc['descricao'], id: addc['id'], preco: addc['preco'], isChecked: false, quantidade: 0, gratuito: addc['gratuito'] });
                        }
                        else if (addc['sub_produto'] == null) {
                            this.adicionaisitem.push({ nome: addc['nome'], de: addc['de'], descricao: addc['descricao'], id: addc['id'], preco: addc['preco'], isChecked: false, quantidade: 0, gratuito: addc['gratuito'] });
                        }
                        //this.adicionaisitem.push({nome: addc['nome'],de: addc['de'],id: addc['id'], preco: addc['preco'], isChecked: false})
                    });
                    this.adicionaisitem.splice(0, 1);
                });
                /*this.http.get(new Config().local_link_api + '/api/categorias', {}, {}).then((data) => {
                    this.menuarray = JSON.parse(data.data);
                    this.loading.dismiss()
                    this.menuarray.forEach(a => {
                    JSON.parse(a['de']).forEach(de => {
                      if(de == this.product['id']){
                        this.menuarray_new.push(a)
                      }
                    });
                    });
                      
                    }).catch((err) =>{
                      this.loading.dismiss()
                    });*/
            }));
        });
    }
    qtd(array, id) {
        var total = 0;
        array.forEach(f => {
            if (f['de'] == id) {
                total = total + f['quantidade'];
            }
        });
        return total;
    }
    getttt() {
        return JSON.stringify(this.final_gratuito);
    }
    adicionar(cat, id, gratuito) {
        if (gratuito == "SIM") {
            if (this.checkcomplementos(true, cat) == false) {
                return false;
            }
        }
        else {
            if (this.checkcomplementos(false, cat) == false) {
                return false;
            }
        }
        this.adicionaisitem.forEach(add => {
            if (add['id'] == id) {
                add['quantidade'] = add['quantidade'] + 1;
            }
        });
        this.get_total('');
    }
    remover(id) {
        this.adicionaisitem.forEach(add => {
            if (add['id'] == id) {
                if (add['quantidade'] != 0) {
                    add['quantidade'] = add['quantidade'] - 1;
                }
            }
        });
        this.get_total('');
    }
    adicionar_produto() {
        if (this.quantidade >= this.estoque) {
            this.alert_erro('Ops :(', 'Você pode comprar apenas ' + this.estoque + ' quantidades do produto: ' + this.nome, "");
            return;
        }
        this.quantidade++;
        this.get_total("");
    }
    remover_produto() {
        if (this.quantidade != 0) {
            this.quantidade--;
        }
        this.get_total("");
    }
    categorias(id) {
        var adicionais_pr = [];
        this.adicionaisitem.forEach(addc => {
            {
                if (addc['de'] == id) {
                    adicionais_pr.push(addc);
                }
            }
        });
        return adicionais_pr;
    }
    categorias_gratuitos(id, gratuito) {
        var adicionais_pr = [];
        this.adicionaisitem.forEach(addc => {
            {
                if (addc['de'] == id) {
                    if (gratuito == 0 || gratuito == null) {
                    }
                    else {
                        adicionais_pr.push(addc);
                    }
                }
            }
        });
        return adicionais_pr;
    }
    routerlink_api(string) {
        this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.navCtrl.navigateForward(string);
        }));
    }
    onKeyUp(event) {
        this.get_total('zz');
        let newValue = event.target.value;
        let regExp = new RegExp(this.NUMBER_REGEXP);
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
    }
    get_total(id) {
        this.final = [];
        this.final_prev = [];
        this.final_gratuito = [];
        this.total = 0;
        this.adicionaisitem.forEach(addc => {
            if (addc['quantidade'] > 0) {
                this.menuarray_new.forEach(e => {
                    if (addc['de'] == e['id']) {
                        if (e['prevalecer'] == 'Sim') {
                            this.final_prev.push(addc);
                        }
                        if (e['gratuito'] <= 0 && e['prevalecer'] != 'Sim') {
                            this.final.push(addc);
                        }
                        if (e['gratuito'] > 0) {
                            if (addc['gratuito'] == "SIM") {
                                this.final_gratuito.push(addc);
                            }
                            else {
                                this.final_gratuito.push(addc);
                            }
                        }
                    }
                });
                this.finalarray = JSON.stringify(this.final_gratuito);
            }
            else {
                this.final.forEach(f => {
                    if (f['id'] == addc['id']) {
                        this.final.splice(f, 1);
                    }
                });
                this.final_prev.forEach(f => {
                    if (f['id'] == addc['id']) {
                        this.final_prev.splice(f, 1);
                    }
                });
                this.final_gratuito.forEach(f => {
                    if (f['id'] == addc['id']) {
                        this.final_gratuito.splice(f, 1);
                    }
                });
            }
        });
        this.final.forEach(v => {
            var ftotal = Number(v['preco']) * v['quantidade'];
            this.total = Number(this.total) + Number(ftotal);
        });
        this.final_gratuito.forEach(v => {
            var ftotal = Number(v['preco']) * v['quantidade'];
            this.total = Number(this.total) + Number(ftotal);
        });
        this.prices = [];
        this.final_prev.forEach(v => {
            var ftotal = Number(v['preco']) * v['quantidade'];
            this.prices.push(ftotal);
        });
        if (this.prices.length != 0) {
            this.total = Number(this.total) + Number(Math.max(...this.prices));
        }
        this.total = Number(this.total) + Number(this.product['preco']);
        this.total = Number(this.total) * Number(this.quantidade);
    }
    get_gratuito(add, gratuito) {
        for (let index = 0; index < gratuito; index++) {
            if (this.final_gratuito[index]['nome'] == add['nome']) {
                return true;
            }
        }
    }
    precos(string) {
        if (string == 0) {
            return "";
        }
        else {
            return Number(string).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }
    }
    checkcomplementos_minimo() {
        var retornar = true;
        var limite = [];
        this.menuarray_new.forEach(cat => {
            var qtd = 0;
            var qtdgratuitos = 0;
            this.final.forEach(fin => {
                if (fin['de'] == cat['id']) {
                    qtd = qtd + fin['quantidade'];
                }
            });
            this.final_gratuito.forEach(fin => {
                if (fin['de'] == cat['id']) {
                    if (fin['gratuito'] == "SIM") {
                        qtdgratuitos = qtdgratuitos + fin['quantidade'];
                        qtd = qtd + fin['quantidade'];
                    }
                    else {
                        qtd = qtd + fin['quantidade'];
                    }
                }
            });
            this.final_prev.forEach(fin => {
                if (fin['de'] == cat['id']) {
                    qtd = qtd + fin['quantidade'];
                }
            });
            if (qtd < cat['minimo']) {
                this.alert_erro('Ops :(', 'Você precisa escolher pelo menos ' + cat['minimo'] + " item em " + cat['nome'], "");
                retornar = false;
            }
        });
        return retornar;
    }
    checkcomplementos(gratuito, id) {
        var retornar = true;
        var limite = [];
        this.menuarray_new.forEach(cat => {
            var qtd = 0;
            var qtdgratuitos = 0;
            this.final.forEach(fin => {
                if (fin['de'] == cat['id']) {
                    qtd = qtd + fin['quantidade'];
                }
            });
            this.final_gratuito.forEach(fin => {
                if (fin['de'] == cat['id']) {
                    if (fin['gratuito'] == "SIM") {
                        qtdgratuitos = qtdgratuitos + fin['quantidade'];
                        qtd = qtd + fin['quantidade'];
                    }
                    else {
                        qtd = qtd + fin['quantidade'];
                    }
                }
            });
            this.final_prev.forEach(fin => {
                if (fin['de'] == cat['id']) {
                    qtd = qtd + fin['quantidade'];
                }
            });
            if (cat['id'] == id) {
                if (qtd == cat['quantidade']) {
                    this.alert_erro('Ops :(', 'Você só pode escolher ' + cat['quantidade'] + " itens em: " + "" + cat['nome'] + "", "");
                    retornar = false;
                }
                if (gratuito == true) {
                    if (qtdgratuitos == cat['gratuito'] && cat['gratuito'] != 0) {
                        this.alert_erro('Ops :(', 'Você só pode escolher ' + cat['gratuito'] + " itens gratuitos em: " + "" + cat['nome'] + "", "");
                        retornar = false;
                    }
                }
            }
        });
        return retornar;
    }
    addcart() {
        if (this.quantidade > this.estoque) {
            this.alert_erro('Ops :(', 'Infelizmente esse produto não tem estoque disponível.', "");
            return;
        }
        this.restaurante = JSON.parse(localStorage.getItem('restaurante'));
        if (this.quantidade < 1) {
            this.alert_erro('Ops :(', 'Você precisa escolher pelo menos 1', "");
            return;
        }
        if (this.checkcomplementos_minimo() == false) {
            return false;
        }
        const dataz = JSON.parse(localStorage.getItem('carrinho'));
        this.itens.push({ restaurante: this.restaurante['id'], nome: this.product['nome'], adicionais: this.final, adicionais_prev: this.final_prev, adicionais_gratis: this.final_gratuito, id: this.product['id'], quantidade: this.quantidade, preco: this.product['preco'], tipo: 3 });
        if (dataz == null) {
            localStorage.setItem('carrinho', JSON.stringify(this.itens));
        }
        else {
            dataz.forEach(it => {
                this.jsonfinal.push({
                    restaurante: it['restaurante'],
                    nome: it['nome'],
                    adicionais: it['adicionais'],
                    adicionais_prev: it['adicionais_prev'],
                    adicionais_gratis: it['adicionais_gratis'],
                    id: it['id'],
                    obs: this.obs_s,
                    quantidade: it['quantidade'],
                    preco: it['preco'],
                    tipo: it['tipo']
                });
            });
            this.itens.forEach(it => {
                this.jsonfinal.push({
                    restaurante: it['restaurante'],
                    nome: it['nome'],
                    adicionais: it['adicionais'],
                    adicionais_prev: it['adicionais_prev'],
                    adicionais_gratis: it['adicionais_gratis'],
                    id: it['id'],
                    obs: this.obs_s,
                    quantidade: it['quantidade'],
                    preco: it['preco'],
                    tipo: it['tipo']
                });
            });
            localStorage.setItem('carrinho', JSON.stringify(this.jsonfinal));
        }
        this.navCtrl.navigateRoot('/cardapio/' + JSON.parse(localStorage.getItem('restaurante'))['id']);
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
ProdutoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
ProdutoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./produto.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/produto/produto.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./produto.page.scss */ "./src/app/produto/produto.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], ProdutoPage);



/***/ })

}]);
//# sourceMappingURL=produto-produto-module-es2015.js.map