(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedidos-pedidos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPedidosPedidosPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode='ios'>\n    <div *ngIf='atual_b == true'>\n        <ion-buttons slot=\"start\">\n          <a (click)='atual_b = false; atual = []'>\n            <h3><ion-icon style=\"color: white;\" name=\"arrow-back\"></ion-icon></h3>\n          </a>\n        </ion-buttons>\n    </div>\n    <ion-title>Pedidos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <div *ngIf='admin == false'>\n    <div *ngIf=\"logado == true\">\n      <div *ngIf=\"atual_b == false\">\n        <div *ngFor=\"let item of menuarray\">\n          <ion-card>\n            <ion-card-header>\n              <h2>{{ restaurante(item.restaurante, 'nome') }}</h2>\n              <ion-card-subtitle>{{ item.horario }}</ion-card-subtitle>\n              -----------------------\n              <ion-list *ngFor=\"let itens of getjson(item.itens)\">\n                {{ itens.nome }} - R${{ itens.preco }}\n              </ion-list>\n              -----------------------\n              <br>\n              <ion-item *ngIf=\"item.status == 'not_pay'\">\n                <ion-icon name='play' color='danger'></ion-icon>\n                <ion-label>Pedido em análise</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"item.status == 'preparing'\">\n                <ion-icon name='play' color='warning'></ion-icon>\n                <ion-label>Preparando pedido</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"item.status == 'quit_sender'\">\n                <ion-icon name='play' color='tertiary'></ion-icon>\n                <ion-label>Saiu para entrega</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"item.status == 'success'\">\n                <ion-icon name='play' color='success'></ion-icon>\n                <ion-label>Pedido entregue</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"item.status == 'canceled'\">\n                <ion-icon name='play' color='danger'></ion-icon>\n                <ion-label>Pedido cancelado</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"item.status == 'estorned'\">\n                <ion-icon name='play' color='danger'></ion-icon>\n                <ion-label>Pedido cancelado</ion-label>\n              </ion-item>\n              <br>\n              <a (click)='pedido(item.id)'>Detalhes</a>&nbsp;&nbsp;&nbsp;<a\n              *ngIf='item.status != \"canceled\"' (click)='avaliar(item.status, item.restaurante)'>Avaliar</a>&nbsp;&nbsp;&nbsp;<a *ngIf='item.status != \"canceled\"'\n                (click)='cancelar(item.restaurante)'>Cancelar</a>\n            </ion-card-header> \n          </ion-card>\n        </div>\n      </div>\n\n      <div *ngIf=\"atual_b == true\">\n        <div *ngFor=\"let atualitem of atual\">\n          <ion-card>\n            <ion-card-header>\n              <h2>{{ restaurante(atualitem.restaurante, 'nome') }}</h2>\n              <ion-card-subtitle>Pedido #{{ atualitem.id }}00</ion-card-subtitle>\n              <ion-card-subtitle>{{ atualitem.horario }}</ion-card-subtitle>\n              <ion-list *ngFor=\"let itens of getjson(atualitem.itens)\">\n                <br><b>Produto:</b><br>\n                ({{ itens.quantidade }}x) - {{ itens.nome }} - R${{ itens.preco }}\n                <div *ngFor=\"let acre of itens.adicionais\">\n                  <div *ngIf=\"acre != null\">\n                    <ion-card-subtitle>\n                      <font color=\"black\">{{ get_categoria(acre.de) }}</font>\n                    </ion-card-subtitle>\n                    <ion-text color=\"black\"> {{ acre.nome }} - <b>R${{ acre.preco }} ({{ acre.quantidade }}x)</b></ion-text>\n                  </div>\n                  <br>\n                </div>\n                <div *ngFor=\"let acre of itens.adicionais_prev\">\n                  <div *ngIf=\"acre != null\">\n                    <ion-card-subtitle>\n                      <font color=\"black\">{{ get_categoria(acre.de) }}</font>\n                    </ion-card-subtitle>\n                    <ion-text color=\"black\">{{ acre.nome }} - <b>R${{ acre.preco }} ({{ acre.quantidade }}x)</b></ion-text>\n                  </div>\n                  <br>\n                </div>\n                <div *ngFor=\"let acre of itens.adicionais_gratis\">\n                  <div *ngIf=\"acre != null\">\n                    <ion-card-subtitle>\n                      <font color=\"black\">{{ get_categoria(acre.de) }}</font>\n                    </ion-card-subtitle> \n                    <ion-text color=\"black\">{{ acre.nome }} - <b>R${{ acre.preco }}  ({{ acre.quantidade }}x)</b></ion-text>\n                  </div>\n                  <br>\n                </div>\n              </ion-list>\n            </ion-card-header>\n          </ion-card>\n\n          <ion-card *ngIf=\"atualitem.pagamento != 'Buscar no local'\">\n            <ion-card-header>\n              <ion-card-subtitle>Endereço do comprador</ion-card-subtitle>\n              <ion-list><b>Endereço:</b> {{ get_endereco(atualitem.endereco, 'endereco')}}</ion-list>\n              <ion-list><b>Cidade:</b> {{ get_cidades(get_endereco(atualitem.endereco, 'cidade'))}}</ion-list>\n              <ion-list><b>Bairro:</b> {{ get_bairros(get_endereco(atualitem.endereco, 'bairro'))}}</ion-list>\n              <ion-list><b>Número:</b> {{ get_endereco(atualitem.endereco, 'numero')}}</ion-list>\n              <ion-list><b>Comp:</b> {{ get_endereco(atualitem.endereco, 'complemento')}}</ion-list>\n            </ion-card-header>\n          </ion-card>\n\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>Pagamento</ion-card-subtitle>\n              <ion-list>{{ atualitem.pagamento }}</ion-list>\n            </ion-card-header>\n          </ion-card>\n\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>Status do pedido</ion-card-subtitle>\n              <ion-item *ngIf=\"atualitem.status == 'not_pay'\">\n                <ion-icon name='play' color='danger'></ion-icon>\n                <ion-label>Pedido em análise</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"atualitem.status == 'preparing'\">\n                <ion-icon name='play' color='warning'></ion-icon>\n                <ion-label>Preparando pedido</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"atualitem.status == 'quit_sender'\">\n                <ion-icon name='play' color='tertiary'></ion-icon>\n                <ion-label>Saiu para entrega</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"atualitem.status == 'success'\">\n                <ion-icon name='play' color='success'></ion-icon>\n                <ion-label>Pedido entregue</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"atualitem.status == 'canceled'\">\n                <ion-label>Pedido cancelado não chegou a cobrar no cartão</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"atualitem.status == 'estorned'\">\n                <ion-label>Pedido cancelado e pagamento devolvido.</ion-label>\n              </ion-item>\n            </ion-card-header>\n          </ion-card>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n  <!-- ADMINISTRADOR -->\n  <!-- ADMINISTRADOR -->\n  <!-- ADMINISTRADOR -->\n  <!-- ADMINISTRADOR -->\n  <!-- ADMINISTRADOR -->\n  <!-- ADMINISTRADOR -->\n  <!-- ADMINISTRADOR -->\n  <!-- ADMINISTRADOR -->\n  <!-- ADMINISTRADOR -->\n  <!-- ADMINISTRADOR -->\n\n\n  <div *ngIf='admin == true'>\n    <div *ngIf=\"logado == true\">\n      <div *ngIf=\"atual_b == false\">\n        <div *ngFor=\"let item of menuarray\">\n          <ion-card> \n            <ion-card-header (click)='pedido(item.id)'>\n              <h2>{{ restaurante(item.restaurante, 'nome') }}</h2>\n              <h4>Pedido: {{ item.id }}00</h4>\n              <ion-card-subtitle>{{ item.horario }}</ion-card-subtitle>\n              -----------------------\n              <ion-list *ngFor=\"let itens of getjson(item.itens)\">\n                {{ itens.nome }} - R${{ itens.preco }}\n              </ion-list>\n              ----------------------- \n              <br>\n              <ion-item *ngIf=\"item.status == 'not_pay'\">\n                <ion-icon name='play' color='danger'></ion-icon>\n                <ion-label>Pedido em análise</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"item.status == 'preparing'\">\n                <ion-icon name='play' color='warning'></ion-icon>\n                <ion-label>Preparando pedido</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"item.status == 'quit_sender'\">\n                <ion-icon name='play' color='tertiary'></ion-icon>\n                <ion-label>Saiu para entrega</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"item.status == 'success'\">\n                <ion-icon name='play' color='success'></ion-icon>\n                <ion-label>Pedido entregue</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"item.status == 'canceled'\">\n                <ion-icon name='play' color='danger'></ion-icon>\n                <ion-label>Pedido cancelado</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"item.status == 'estorned'\">\n                <ion-icon name='play' color='danger'></ion-icon>\n                <ion-label>Pedido cancelado</ion-label>\n              </ion-item>  \n            \n            </ion-card-header>\n        \n         <ion-card-content> \n            <ion-select placeholder=\"Altere o status\" (ionChange)=\"changepedido($event, item.id)\">\n            <ion-select-option value='not_pay'>Pedido em análise</ion-select-option>\n            <ion-select-option value='preparing'>Preparando pedido</ion-select-option>\n            <ion-select-option value='quit_sender'>Saiu para entrega</ion-select-option>\n            <ion-select-option value='success'>Pedido entregue</ion-select-option>\n            <ion-select-option value='canceled'>Pedido cancelado</ion-select-option>\n          </ion-select>\n        </ion-card-content>\n             \n            \n          </ion-card>\n        </div>\n      </div>\n\n      <div *ngIf=\"atual_b == true\">\n        <div *ngFor=\"let atualitem of atual\">\n          <ion-card>\n            <ion-card-header>\n              <h2>{{ restaurante(atualitem.restaurante, 'nome') }}</h2>\n              <ion-card-subtitle>Pedido #{{ atualitem.id }}00</ion-card-subtitle>\n              <ion-card-subtitle>{{ atualitem.horario }}</ion-card-subtitle>\n           \n                 <ion-list *ngFor=\"let itens of getjson(atualitem.itens)\">\n                <br><b>Produto:</b><br>\n                ({{ itens.quantidade }}x) - {{ itens.nome }} - R${{ itens.preco }}\n                <div *ngFor=\"let acre of itens.adicionais\">\n                  <div *ngIf=\"acre != null\">\n                    <ion-card-subtitle>\n                      <font color=\"black\">{{ get_categoria(acre.de) }}</font>\n                    </ion-card-subtitle>\n                    <ion-text color=\"black\"> {{ acre.nome }} - <b>R${{ acre.preco }} ({{ acre.quantidade }}x)</b></ion-text>\n                  </div>\n                  <br>\n                </div>\n                <div *ngFor=\"let acre of itens.adicionais_prev\">\n                  <div *ngIf=\"acre != null\">\n                    <ion-card-subtitle>\n                      <font color=\"black\">{{ get_categoria(acre.de) }}</font>\n                    </ion-card-subtitle>\n                    <ion-text color=\"black\">{{ acre.nome }} - <b>R${{ acre.preco }} ({{ acre.quantidade }}x)</b></ion-text>\n                  </div>\n                  <br>\n                </div>\n                <div *ngFor=\"let acre of itens.adicionais_gratis\">\n                  <div *ngIf=\"acre != null\">\n                    <ion-card-subtitle>\n                      <font color=\"black\">{{ get_categoria(acre.de) }}</font>\n                    </ion-card-subtitle> \n                    <ion-text color=\"black\">{{ acre.nome }} - <b>R${{ acre.preco }}  ({{ acre.quantidade }}x)</b></ion-text>\n                  </div>\n                  <br>\n                </div>\n              </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n    \n\n            </ion-card-header>\n          </ion-card>\n\n          <ion-card *ngIf=\"atualitem.pagamento != 'Buscar no local'\">\n            <ion-card-header>\n              <ion-card-subtitle>Endereço do comprador</ion-card-subtitle>\n              <ion-list><b>Endereço:</b> {{ get_endereco(atualitem.endereco, 'endereco')}}</ion-list>\n              <ion-list><b>Cidade:</b> {{ get_cidades(get_endereco(atualitem.endereco, 'cidade'))}}</ion-list>\n              <ion-list><b>Bairro:</b> {{ get_bairros(get_endereco(atualitem.endereco, 'bairro'))}}</ion-list>\n              <ion-list><b>Número:</b> {{ get_endereco(atualitem.endereco, 'numero')}}</ion-list>\n              <ion-list><b>Comp:</b> {{ get_endereco(atualitem.endereco, 'complemento')}}</ion-list>\n            </ion-card-header>\n          </ion-card>\n\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>Pagamento</ion-card-subtitle>\n              <ion-list>{{ atualitem.pagamento }}</ion-list>\n            </ion-card-header>\n          </ion-card>\n\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>Status do pedido</ion-card-subtitle>\n              <ion-item *ngIf=\"atualitem.status == 'not_pay'\">\n                <ion-icon name='play' color='danger'></ion-icon>\n                <ion-label>Pedido em análise</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"atualitem.status == 'preparing'\">\n                <ion-icon name='play' color='warning'></ion-icon>\n                <ion-label>Preparando pedido</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"atualitem.status == 'quit_sender'\">\n                <ion-icon name='play' color='tertiary'></ion-icon>\n                <ion-label>Saiu para entrega</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"atualitem.status == 'success'\">\n                <ion-icon name='play' color='success'></ion-icon>\n                <ion-label>Pedido entregue</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"atualitem.status == 'canceled'\">\n                <ion-label>Pedido cancelado não chegou a cobrar no cartão</ion-label>\n              </ion-item>\n              <ion-item *ngIf=\"atualitem.status == 'estorned'\">\n                <ion-label>Pedido cancelado e pagamento devolvido.</ion-label>\n              </ion-item>\n            </ion-card-header>\n          </ion-card>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n<div>\n  <div *ngIf='logado == false'>\n    <p>Faça o login para acompanhar</p>\n    <h2>Seus pedidos!</h2>\n    <ion-button (click)=\"routerlink_api('/minha-conta')\" color='warning'>Clique para entrar</ion-button>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"tab-schedule\" (click)=\"routerlink_api('/home')\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Início</ion-label>\n      </ion-tab-button>\n    \n      <ion-tab-button tab=\"tab-cart\" (click)=\"routerlink_api('/notificacoes')\">\n        <ion-icon name=\"notifications\"></ion-icon>\n        <ion-label>Notificações</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"tab-cart\" (click)=\"routerlink_api('/pedidos')\">\n        <ion-icon name=\"cart\" color='warning'></ion-icon>\n        <ion-label>Pedidos</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"tab-person\" (click)=\"routerlink_api('/conta')\">\n        <ion-icon name=\"list\"></ion-icon>\n        <ion-label>Mais</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n\n<style>\n  ion-card {\n    --background: white;\n  }\n</style>";
    /***/
  },

  /***/
  "./src/app/pedidos/pedidos.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pedidos/pedidos.module.ts ***!
    \*******************************************/

  /*! exports provided: PedidosPageModule */

  /***/
  function srcAppPedidosPedidosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function () {
      return PedidosPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _pedidos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pedidos.page */
    "./src/app/pedidos/pedidos.page.ts");

    const routes = [{
      path: '',
      component: _pedidos_page__WEBPACK_IMPORTED_MODULE_6__["PedidosPage"]
    }];
    let PedidosPageModule = class PedidosPageModule {};
    PedidosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_pedidos_page__WEBPACK_IMPORTED_MODULE_6__["PedidosPage"]]
    })], PedidosPageModule);
    /***/
  },

  /***/
  "./src/app/pedidos/pedidos.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pedidos/pedidos.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPedidosPedidosPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkb3MvcGVkaWRvcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pedidos/pedidos.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pedidos/pedidos.page.ts ***!
    \*****************************************/

  /*! exports provided: PedidosPage */

  /***/
  function srcAppPedidosPedidosPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidosPage", function () {
      return PedidosPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-xml2json */
    "./node_modules/ngx-xml2json/fesm2015/ngx-xml2json.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");

    let PedidosPage = class PedidosPage {
      constructor(ngxXml2jsonService, alertCtrl, router, dataService, http, navCtrl, events, zone, platform, loadingController) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.navCtrl = navCtrl;
        this.events = events;
        this.zone = zone;
        this.platform = platform;
        this.loadingController = loadingController;
        this.status = "";
        this.menuarray = [];
        this.pedidos = [];
        this.restaurantes = [];
        this.atual = [];
        this.atual_b = false;
        this.admin = false;
        this.tel_cancelamento = new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().tel_cancelamento;
        this.cats = [];
        this.enderecos = [];
        this.bairros = [];
        this.cidades = [];
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/categorias', {}, {}).then(data => {
          var datajson = JSON.parse(data.data);
          this.cats = datajson;
        });

        if (this.atual_b == true) {
          this.platform.backButton.subscribe(() => {
            this.atual_b = false;
          });
        }
      }

      ngOnInit() {}

      changepedido($event, id) {
        var status = $event.target.value;
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/change?id=' + id + "&status=" + status, {}, {}).then(data => {
          this.menuarray = [];
          this.pedidos = [];
          this.restaurantes = [];
          this.get_pedidos();
        });
      }

      get_categoria(eid) {
        var nome;
        this.cats.forEach(e => {
          if (e['id'] == eid) {
            nome = e['nome'];
          }
        });
        return nome;
      }

      cancelar(restaurante) {
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/horario?id=' + restaurante, {}, {}).then(data => {
          if (JSON.parse(data.data)['telefone'] == null || JSON.parse(data.data)['telefone'] == "") {
            this.alert_erro('Ops :(', 'O estabelecimento ainda não definiu um número', '');
            return;
          }

          window.open('tel:' + JSON.parse(data.data)['telefone'], '_system');
        });
      }

      get_endereco(id, string) {
        var s;
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/enderecos?id=' + this.myaccount['id'], {}, {}).then(data => {
          this.enderecos = JSON.parse(data.data);
        });
        this.enderecos.forEach(e => {
          if (e['id'] == id) {
            s = e[string];
          }
        });
        return s;
      }

      get_bairros(id) {
        var s;
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/bairros', {}, {}).then(data => {
          this.bairros = JSON.parse(data.data);
        });
        this.bairros.forEach(e => {
          if (e['id'] == id) {
            s = e['nome'];
          }
        });
        return s;
      }

      get_cidades(id) {
        var s;
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/cidades', {}, {}).then(data => {
          this.cidades = JSON.parse(data.data);
        });
        this.cidades.forEach(e => {
          if (e['id'] == id) {
            s = e['nome'];
          }
        });
        return s;
      }

      carregando() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.loadingController.create({
                  message: 'Carregando'
                });

              case 2:
                this.loading = _context.sent;
                _context.next = 5;
                return this.loading.present();

              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      }

      ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                this.zone.run(() => {
                  this.get_pedidos();
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
      }

      get_pedidos() {
        const data = JSON.parse(localStorage.getItem('cliente_data')); //this.alert_erro('Ops :(', 'Falta uma informação', '' + data);

        if (data == null) {
          this.logado = false;
        } else {
          this.logado = true;
          this.zone.run(() => {
            this.carregando();
            const datauser = JSON.parse(localStorage.getItem('cliente_data'));
            this.myaccount = datauser;

            if (this.myaccount['de'] == null || this.myaccount['de'] == "") {
              this.admin = false;
            } else {
              this.admin = true;
            }

            this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/restaurante', {}, {}).then(data => {
              this.restaurantes = JSON.parse(data.data);
            });
            this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/pedidos?de=' + this.myaccount['id'], {}, {}).then(data => {
              this.menuarray = JSON.parse(data.data);
              this.loading.dismiss();
            }).catch(err => {
              this.loading.dismiss();
            });
            setInterval(() => {
              this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/pedidos?de=' + this.myaccount['id'], {}, {}).then(data => {
                this.menuarray = [];
                this.menuarray = JSON.parse(data.data);
                this.loading.dismiss();
              }).catch(err => {
                this.loading.dismiss();
              });
            }, 15000);
            this.pedidos = JSON.parse(localStorage.getItem('carrinho'));
          });
        }
      }

      avaliar(status, id) {
        if (status != "success") {
          this.alert_erro('Ops :(', 'Você não pode avaliar agora', 'Apenas quando o pedido for entregue.');
        } else {
          this.routerlink_api('/avaliar/' + id);
        }
      }

      restaurante(id, string) {
        var ss = "";
        this.restaurantes.forEach(user => {
          if (id == user['id']) {
            ss = user[string];
          }
        });
        return ss;
      }

      pedido(id) {
        this.atual_b = true;
        this.menuarray.forEach(e => {
          if (e['id'] == id) {
            this.atual.push(e);
          }
        });
      }

      routerlink_api(string) {
        this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.navCtrl.navigateBack(string);

              case 2:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        })));
      }

      getjson(data) {
        return JSON.parse(data);
      }

      alert_erro(header, subheader, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var alert;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.alertCtrl.create({
                  header: header,
                  subHeader: subheader,
                  message: message,
                  buttons: ['OK']
                });

              case 2:
                alert = _context4.sent;
                _context4.next = 5;
                return alert.present();

              case 5:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
      }

    };

    PedidosPage.ctorParameters = () => [{
      type: ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__["NgxXml2jsonService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
    }, {
      type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
    }];

    PedidosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pedidos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pedidos.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pedidos.page.scss */
      "./src/app/pedidos/pedidos.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_2__["NgxXml2jsonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])], PedidosPage);
    /***/
  }
}]);
//# sourceMappingURL=pedidos-pedidos-module-es5.js.map