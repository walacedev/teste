(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedido-pedido-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pedido/pedido.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pedido/pedido.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPedidoPedidoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode='ios'>\n    <ion-buttons slot=\"start\">\n      <ion-buttons slot=\"start\">\n        <a (click)=\"routerlink_api('/cardapio/' + id)\">\n          <h3>\n            <ion-icon style=\"color: white;\" name=\"arrow-back\"></ion-icon>\n          </h3>\n        </a>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title>Fechar carrinho</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n  <div>\n{{ produtos_string }}\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>\n         \n          <font color=\"black\">Pedido</font>\n        </ion-card-subtitle>\n        <br>\n        <div class=\"line\"></div>\n        <br>\n        <div *ngFor=\"let carrinho_s of produtos\">\n          <ion-card-subtitle>\n            <font color=\"#000\" size='2px'>\n              <b>Produto</b>\n            </font>\n          </ion-card-subtitle>\n          <ion-text color=\"black\"> {{ carrinho_s.quantidade }}x {{ carrinho_s.nome }} -\n            <b>{{ precos(carrinho_s.preco) }}\n              (cada)</b></ion-text><br>\n          <br>\n          <div *ngFor=\"let acre of carrinho_s.adicionais\">\n            <div *ngIf=\"acre != null\">\n              <ion-card-subtitle>\n                <font color=\"black\">{{ get_categoria(acre.de) }}</font>\n              </ion-card-subtitle>\n              <ion-text color=\"black\"> {{ acre.nome }} - <b>R${{ acre.preco }} ({{ acre.quantidade }}x)</b></ion-text>\n            </div>\n            <br>\n          </div>\n          <div *ngFor=\"let acre of carrinho_s.adicionais_prev\">\n            <div *ngIf=\"acre != null\">\n              <ion-card-subtitle>\n                <font color=\"black\">{{ get_categoria(acre.de) }}</font>\n              </ion-card-subtitle>\n              <ion-text color=\"black\">{{ acre.nome }} - <b>{{ precos(acre.preco) }} ({{ acre.quantidade }}x)</b>\n              </ion-text>\n            </div>\n            <br>\n          </div>\n          <div *ngFor=\"let acre of carrinho_s.adicionais_gratis\">\n            <div *ngIf=\"acre != null\">\n              <ion-card-subtitle>\n                <font color=\"black\">{{ get_categoria(acre.de) }}</font>\n              </ion-card-subtitle>\n              <ion-text color=\"black\">{{ acre.nome }} - <b>{{ precos(acre.preco) }} ({{ acre.quantidade }}x)</b>\n              </ion-text>\n            </div>\n          </div>\n          <a (click)='remove_item(carrinho_s)'>Remover item</a><br>\n          <br>\n          <div class=\"line\"></div>\n          <br>\n        </div>\n      </ion-card-header>\n      <ion-card-content>\n        <div *ngIf=\"frete != 0\"><b>FRETE</b> {{ precos(frete) }} </div>  \n        <div *ngIf='frete_status == false'>Escolha como deseja receber</div>\n        <b>TOTAL</b>\n        <ion-text style=\"text-transform: uppercase\">\n          {{ precos(this.total_carrinho) }}<br>\n        </ion-text>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-radio-group [(ngModel)]='buscar_s'>\n      <ion-list-header>\n        <ion-label>Como deseja receber?</ion-label>\n      </ion-list-header>\n      <ion-item *ngIf='restaurante.entrega_tipo == \"2\" || restaurante.entrega_tipo == \"3\"' (click)='buscarchange()'>\n        <ion-label>Receber em casa</ion-label>\n        <ion-radio slot=\"start\" color=\"success\" value=\"casa\"></ion-radio>\n      </ion-item>  \n      <ion-item *ngIf='restaurante.entrega_tipo == \"1\" || restaurante.entrega_tipo == \"3\"' (click)='buscarchange()'>\n        <ion-label>Buscar no local</ion-label>\n        <ion-radio slot=\"start\" color=\"tertiary\" value=\"buscar\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n    <ion-card *ngIf='buscar_s == \"buscar\"'>\n      <ion-card-header>\n        <ion-card-subtitle>\n          <font color=\"black\">Endereço para buscar</font>\n        </ion-card-subtitle>\n        <p><b>Endereço:</b> {{ restaurante.endereco }}</p>\n        <p><b>Cidade:</b> {{ getcidade_b(restaurante.cidade) }}</p>\n      </ion-card-header>\n    </ion-card>\n\n\n\n    <ion-card *ngIf=\"buscar_s == 'casa'\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          <font color=\"black\">Endereço de entrega</font>\n        </ion-card-subtitle>\n        <br>\n        <ion-list>\n            <ion-select (ionChange)='changefrete()' mode=\"md\" [(ngModel)]='endereco' placeholder='Escolha seu endereço' interface=\"action-sheet\" okText=\"Escolher\" cancelText=\"Cancelar\" >\n              <div *ngFor='let e of enderecos'>\n                <ion-select-option value=\"{{ e.id }}\">{{ e.endereco }} | N°: {{ e.numero }}</ion-select-option>\n              </div>\n            </ion-select>\n        \n          <div>\n            <p><a (click)='routerlink_api(\"/enderecos\")'>Adicionar ou editar endereço</a></p>\n           </div>\n        </ion-list>\n        <br>\n      </ion-card-header>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>\n          <font color=\"black\">Observações</font>\n        </ion-card-subtitle>\n        <ion-input [(ngModel)]=\"obs_s\" type=\"text\" placeholder=\"Exemplo: entregar na portaria\"></ion-input>\n      </ion-card-header>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>\n          <font color=\"black\">Cupom de desconto</font>\n          <p>{{ desccupom }}</p>\n        </ion-card-subtitle>\n        <ion-input [(ngModel)]=\"cupom_s\" type=\"text\" placeholder=\"Digite seu cupom\"></ion-input>\n        <a (click)=\"cupom()\">Aplicar</a>\n      </ion-card-header>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>\n          <font color=\"black\">PAGAMENTO</font>\n        </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label>Como deseja pagar?</ion-label>\n          <ion-select mode=\"md\" [(ngModel)]='pedir_s' interface=\"action-sheet\" okText=\"Escolher\" cancelText=\"Cancelar\">\n            <ion-select-option value=\"dinheiro\">Dinheiro</ion-select-option>\n            <ion-select-option value=\"cartao\">Cartão (Crédido ou débito)</ion-select-option>\n            <div *ngFor='let pay of pagamentos'>\n              <ion-select-option *ngIf='restaurante.online == \"on\"' value='{{ pay.id }}'>{{ getbandeira(pay.number) }} final {{ pay.number.substr(-4) }}</ion-select-option >\n            </div>\n          </ion-select>\n        </ion-item>\n\n \n      </ion-card-content>\n    </ion-card>\n\n    <ion-button *ngIf='processando == false' size='block' (click)='pedir()' color=\"dark\">Fazer pedido</ion-button>\n    <ion-button *ngIf='processando == true' size='block' disabled color=\"dark\">Processando pedido</ion-button>\n\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n<style>\n  ion-item {\n    --background: #fff;\n    --color: #000\n  }\n\n  ion-card {\n    --background: #fff;\n    --color: #000\n  }\n\n  .line {\n    width: 100%;\n    height: 1px;\n    background-color: black;\n  }\n</style>";
    /***/
  },

  /***/
  "./src/app/pedido/pedido.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pedido/pedido.module.ts ***!
    \*****************************************/

  /*! exports provided: PedidoPageModule */

  /***/
  function srcAppPedidoPedidoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoPageModule", function () {
      return PedidoPageModule;
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


    var _pedido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pedido.page */
    "./src/app/pedido/pedido.page.ts");

    const routes = [{
      path: '',
      component: _pedido_page__WEBPACK_IMPORTED_MODULE_6__["PedidoPage"]
    }];
    let PedidoPageModule = class PedidoPageModule {};
    PedidoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_pedido_page__WEBPACK_IMPORTED_MODULE_6__["PedidoPage"]]
    })], PedidoPageModule);
    /***/
  },

  /***/
  "./src/app/pedido/pedido.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/pedido/pedido.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPedidoPedidoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkby9wZWRpZG8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pedido/pedido.page.ts":
  /*!***************************************!*\
    !*** ./src/app/pedido/pedido.page.ts ***!
    \***************************************/

  /*! exports provided: PedidoPage */

  /***/
  function srcAppPedidoPedidoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoPage", function () {
      return PedidoPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var ngx_xml2json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-xml2json */
    "./node_modules/ngx-xml2json/fesm2015/ngx-xml2json.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");

    let PedidoPage = class PedidoPage {
      constructor(ngxXml2jsonService, alertCtrl, router, dataService, http, loadingController, navCtrl, iab, zone) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.zone = zone;
        this.menuarray = [];
        this.produtos = [];
        this.adicionais = [];
        this.total_carrinho = 0;
        this.teste = "a";
        this.bairros = [];
        this.pagamentos = [];
        this.frete = 0;
        this.restaurante = [];
        this.new_address = false;
        this.frete_status = false;
        this.cats = [];
        this.admin = false;
        this.arry = [];
        this.array_cpmplementos = [];
        this.all_products = [];
        this.erros = false;
        this.produtos_string = [];
        this.processando = false;
        this.horario = "";
        this.prices = [];
      }

      get_categoria(eid) {
        var nome;
        this.cats.forEach(e => {
          if (e['id'] == eid) {
            nome = e['nome'];
            this.arry.push(e['nome']);
          }
        });
        return this.arry;
      }

      precos(string) {
        if (string == 0) {
          return "";
        } else {
          return Number(string).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          });
        }
      }

      getestoque() {
        this.produtos_string = [];
        this.produtos.forEach(produto => {
          this.http.get(new _config__WEBPACK_IMPORTED_MODULE_8__["Config"]().local_link_api + '/api/produto/' + produto['id'], {}, {}).then(data => {
            var dat = JSON.parse(data.data);

            if (dat[0]['estoque'] <= 0) {
              this.produtos_string.push(dat[0]['nome']);
            }
          });
        });
      }

      pedir() {
        if (this.produtos_string.length > 0) {
          this.alert_OPS('Ops :(', 'O(s) produto(s): ' + this.produtos_string + ", não estão mais disponíveis para compra.", "Retire esse(s) produto(s)");
          return;
        }

        if (this.total_carrinho == null || this.total_carrinho == 0) {
          this.alert_OPS('Ops :(', 'Seu carrinho está vázio', "");
          return;
        }

        if (this.buscar_s == null) {
          this.alert_OPS('Ops :(', 'Escolha como deseja receber', "");
          return;
        }

        if (this.frete_status == false && this.buscar_s == "casa") {
          this.alert_OPS('Ops :(', 'Escolha um endereço correto para entrega', "");
          return;
        }

        if (this.pedir_s == null) {
          this.alert_OPS('Ops :(', 'Escolha um método de pagamento', "");
          return;
        }

        if (this.pedir_s == 'dinheiro') {
          this.entrega();
        } else if (this.pedir_s == 'cartao') {
          this.entrega_cartao();
        } else if (this.pedir_s != 'dinheiro' && this.pedir_s != 'cartao') {
          this.online(this.pedir_s);
        }
      }

      set_bairro() {}

      gethorario() {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        var hora = data.getHours();
        var minutos = data.getMinutes();
        var str_data = dia + '/' + (mes + 1) + '/' + ano;
        var str_hora = hora + ':' + minutos;
        this.horario = str_data + ' as ' + str_hora;
      }

      cupom() {
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_8__["Config"]().local_link_api + '/api/cupom?id=' + this.cupom_s, {}, {}).then(datas => {
          if (datas.data == "OPS") {
            this.alert_OPS('OPS', 'Esse cupom não existe', "");
            this.desccupom = "";
          } else {
            var cup = JSON.parse(datas.data);
            this.cupomarray = JSON.parse(datas.data);

            if (this.total_carrinho < cup['minimo']) {
              this.alert_OPS('Ops :(', 'Esse cupom vale para pedidos maiores que R$' + cup['minimo'], '');
              return;
            }

            if (cup['tipo'] == "FRETE_GRATIS") {
              this.alert_OPS('SUCESSO', 'Você adicionou o cupom ' + this.cupom_s, 'Esse cupom oferece frete grátis.');
              this.desccupom = 'Esse cupom oferece frete grátis.';
            } else if (cup['tipo'] == "PORCENTAGEM") {
              this.alert_OPS('SUCESSO', 'Você adicionou o cupom ' + this.cupom_s, 'Esse cupom oferece ' + cup['desconto'].replace('%', '') + '% de desconto.');
              this.desccupom = 'Esse cupom oferece ' + cup['desconto'].replace('%', '') + '% de desconto.';
            } else if (cup['tipo'] == "TOTAL") {
              this.alert_OPS('SUCESSO', 'Você adicionou o cupom ' + this.cupom_s, 'Esse cupom oferece ' + cup['desconto'].replace('%', '') + 'R$ de desconto.');
              this.desccupom = 'Esse cupom oferece ' + cup['desconto'].replace('%', '') + 'R$ de desconto.';
            }
          }

          this.setcupom();
        });
      }

      cancelchange() {
        this.restaurante = JSON.parse(localStorage.getItem('restaurante'));
        var fretamento = JSON.parse(this.restaurante['fretes']);

        for (let frete in fretamento) {
          this.frete = Number(fretamento[this.myaccount['bairro']]);
        }

        if (fretamento[this.myaccount['bairro']] == undefined) {
          this.frete = 0;
        }

        this.get_total();
      }

      getbairro(id) {
        var bairro;
        this.enderecos.forEach(e => {
          if (e['id'] == id) {
            this.bairros.forEach(b => {
              if (b['id'] == e['bairro']) {
                bairro = b['id'];
              }
            });
          }
        });
        return bairro;
      }

      getcidade_b(id) {
        var cidade;
        this.cidades.forEach(b => {
          if (b['id'] == id) {
            cidade = b['nome'];
          }
        });
        return cidade;
      }

      getbairro_b(id) {
        var bairro;
        this.bairros.forEach(b => {
          if (b['id'] == id) {
            bairro = b['nome'];
          }
        });
        return bairro;
      }

      changefrete() {
        var fretes;
        var fretevar;
        this.restaurante = JSON.parse(localStorage.getItem('restaurante'));
        var fretamento = JSON.parse(this.restaurante['fretes']);

        if (fretamento == null) {
          this.alert_OPS('OPS', 'Infelizmente!', 'Esse estabelecimento não cadastrou nenhum bairro.');
        }

        if (fretamento[this.getbairro(this.endereco)] == undefined) {
          this.alert_OPS('OPS', 'Infelizmente!', 'Esse estabelecimento não entrega nesse endereço');
          this.frete_status = false;
          this.frete = Number(0);
        } else {
          for (let frete in fretamento) {
            this.frete = Number(fretamento[this.getbairro(this.endereco)]);
            this.frete_status = true;
          }
        }

        this.get_total();
      }

      get_total() {
        this.total_carrinho = 0;
        var product_ony = 0;
        var id = this.router.url.replace('/pedido/', '');
        this.produtos.forEach(car => {
          if (car['restaurante'] == id) {
            product_ony = 0;
            product_ony = Number(product_ony) + Number(car['preco']); //this.total_carrinho = Number(this.total_carrinho) + Number(car['preco']);

            car['adicionais'].forEach(add => {
              //this.total_carrinho = Number(this.total_carrinho) + Number(add['preco']);
              var ftotal = Number(add['preco']) * add['quantidade'];
              product_ony = Number(product_ony) + Number(ftotal);
            });
            car['adicionais_prev'].forEach(add => {
              var ftotal = Number(add['preco']) * add['quantidade'];
              this.prices.push(ftotal);
            });
            car['adicionais_gratis'].forEach(add => {
              var ftotal = Number(add['preco']) * add['quantidade'];
              product_ony = Number(product_ony) + Number(ftotal);
            });

            if (this.prices.length != 0) {
              product_ony = Number(product_ony) + Number(Math.max(...this.prices));
            }

            product_ony = Number(car['quantidade']) * Number(product_ony);
            this.total_carrinho = Number(this.total_carrinho) + Number(product_ony);
          }
        });
        this.frete = Number(this.frete) + Number(JSON.parse(localStorage.getItem('restaurante'))['taxa']);
        this.total_carrinho = Number(this.total_carrinho) + Number(this.frete);
      }

      cancelcupom() {
        this.get_total();
      }

      setcupom() {
        this.cancelcupom();

        if (this.cupomarray != null) {
          if (this.cupomarray['tipo'] == "FRETE_GRATIS") {
            this.total_carrinho = Number(this.total_carrinho) - Number(this.frete);
          } else if (this.cupomarray['tipo'] == "PORCENTAGEM") {
            var rest = Number(this.total_carrinho) * (Number(this.cupomarray['desconto']) / 100);
            this.total_carrinho = Number(this.total_carrinho) - Number(rest);
          } else if (this.cupomarray['tipo'] == "TOTAL") {
            this.total_carrinho = Number(this.total_carrinho) - Number(this.cupomarray['desconto']);
          }
        }
      }

      buscarchange() {
        this.endereco = "";
        this.frete = Number(0);
        this.get_total();
      }

      getbandeira(cardnumber) {
        var cartoes = {
          'VISA': /^4[0-9]{12}(?:[0-9]{3})/,
          'Mastercard': /^5[1-5][0-9]{14}/,
          'Amex': /^3[47][0-9]{13}/,
          'DinersClub': /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
          'Discover': /^6(?:011|5[0-9]{2})[0-9]{12}/,
          'JCB': /^(?:2131|1800|35\d{3})\d{11}/
        };

        function testarCC(number, cartoes) {
          for (var cartao in cartoes) if (number.match(cartoes[cartao])) return cartao;

          return false;
        }

        return testarCC(cardnumber, cartoes);
      }

      ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                this.zone.run(() => {
                  this.produtos = [];
                  this.gethorario();
                  this.id = JSON.parse(localStorage.getItem('restaurante'))['id'];
                  const datauser = JSON.parse(localStorage.getItem('cliente_data'));

                  if (datauser == null) {
                    this.logado = false;
                    this.navCtrl.navigateRoot('/minha-conta');
                  } else {
                    this.logado = true;
                    this.myaccount = datauser;
                  }

                  this.pagamentos = [];
                  this.http.get(new _config__WEBPACK_IMPORTED_MODULE_8__["Config"]().local_link_api + '/api/pagamento?de=' + this.myaccount['id'], {}, {}).then(data => {
                    var datajson = JSON.parse(data.data);
                    this.pagamentos = datajson;
                  });
                  this.http.get(new _config__WEBPACK_IMPORTED_MODULE_8__["Config"]().local_link_api + '/api/enderecos?id=' + this.myaccount['id'], {}, {}).then(data => {
                    this.enderecos = JSON.parse(data.data);
                  });
                  this.http.get(new _config__WEBPACK_IMPORTED_MODULE_8__["Config"]().local_link_api + '/api/bairros', {}, {}).then(data => {
                    this.bairros = JSON.parse(data.data);
                  });
                  this.http.get(new _config__WEBPACK_IMPORTED_MODULE_8__["Config"]().local_link_api + '/api/cidades', {}, {}).then(data => {
                    this.cidades = JSON.parse(data.data);
                  });
                  this.restaurante = JSON.parse(localStorage.getItem('restaurante'));
                  var fretamento = JSON.parse(this.restaurante['fretes']);
                  const data = JSON.parse(localStorage.getItem('carrinho'));

                  if (data == null) {} else {
                    var id = this.router.url.replace('/pedido/', '');
                    data.forEach(it => {
                      if (it['restaurante'] == id) {
                        this.produtos.push({
                          restaurante: it['restaurante'],
                          nome: it['nome'],
                          adicionais: it['adicionais'].sort(function (a, b) {
                            return a.de - b.de;
                          }),
                          adicionais_prev: it['adicionais_prev'],
                          adicionais_gratis: it['adicionais_gratis'],
                          id: it['id'],
                          obs: this.obs_s,
                          quantidade: it['quantidade'],
                          preco: it['preco'],
                          tipo: it['tipo']
                        });
                      }
                    });
                    this.http.get(new _config__WEBPACK_IMPORTED_MODULE_8__["Config"]().local_link_api + '/api/categorias', {}, {}).then(data => {
                      var datajson = JSON.parse(data.data);
                      this.cats = datajson;
                    });
                    this.frete = Number(0);
                    this.get_total();
                  }

                  this.getestoque();
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      }

      limpar() {
        localStorage.clear();
      }

      rout(id) {
        this.router.navigateByUrl('/produtos/' + id);
      }

      carregando() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.loadingController.create({
                  message: 'Carregando'
                });

              case 2:
                this.loading = _context2.sent;
                _context2.next = 5;
                return this.loading.present();

              case 5:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
      }

      makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;

        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
      }

      openlink(url) {
        this.iab.create(url, '_system');
      }

      entrega_cartao() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var id, alert;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                this.getestoque();
                id = this.router.url.replace('/pedido/', '');

                if (!(this.buscar_s != 'buscar')) {
                  _context3.next = 6;
                  break;
                }

                this.changefrete();

                if (!(this.frete_status == false)) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return");

              case 6:
                this.setcupom();
                _context3.next = 9;
                return this.alertCtrl.create({
                  header: 'Finalizar pedido',
                  subHeader: 'Você escolheu pagar com cartão.',
                  message: 'Valor do pedido ' + this.precos(this.total_carrinho),
                  buttons: [{
                    text: 'Escolher outro',
                    role: 'cancel',
                    handler: () => {}
                  }, {
                    text: 'Confirmar',
                    handler: data => {
                      if (this.buscar_s == 'buscar') {
                        var bodys = {
                          code: 'no_code',
                          restaurante: id,
                          frete: this.frete,
                          local: id,
                          status: '',
                          estado: this.uf + "-" + this.estado,
                          de: this.myaccount['id'],
                          pagamento: 'Buscar no local',
                          nome: this.myaccount['nome'],
                          endereco: this.endereco,
                          cep: '',
                          itens: JSON.stringify(this.produtos),
                          cidade: this.uf,
                          bairro: this.bairro_s,
                          complemento: this.complemento_s,
                          numero: this.numero_s,
                          tel: this.myaccount['tel'],
                          troco: 0,
                          obs: "RCM " + this.obs_s,
                          cupom: this.cupom_s,
                          horario: this.horario,
                          taxa: Number(JSON.parse(localStorage.getItem('restaurante'))['taxa'])
                        };
                      } else {
                        var bodys = {
                          code: 'no_code',
                          restaurante: id,
                          frete: this.frete,
                          local: id,
                          status: '',
                          estado: this.uf + "-" + this.estado,
                          de: this.myaccount['id'],
                          pagamento: 'Receber em casa',
                          nome: this.myaccount['nome'],
                          endereco: this.endereco,
                          cep: '',
                          itens: JSON.stringify(this.produtos),
                          cidade: this.uf,
                          bairro: this.bairro_s,
                          complemento: this.complemento_s,
                          numero: this.numero_s,
                          tel: this.myaccount['tel'],
                          troco: 0,
                          obs: "RCM " + this.obs_s,
                          cupom: this.cupom_s,
                          horario: this.horario,
                          taxa: Number(JSON.parse(localStorage.getItem('restaurante'))['taxa'])
                        };
                      }

                      this.http.setDataSerializer('json');
                      this.http.post(new _config__WEBPACK_IMPORTED_MODULE_8__["Config"]().local_link_api + '/api/pedidos', bodys, {}).then(data => {
                        this.alert_OPS('SUCESSO!', 'Pedido realizado com sucesso', 'Atenção: O tempo e a entrega do pedido é de responsabilidade do estabelecimento');
                        localStorage.removeItem('carrinho');
                        this.navCtrl.navigateRoot('/pedidos');
                      }).catch(err => {});
                    }
                  }]
                });

              case 9:
                alert = _context3.sent;
                _context3.next = 12;
                return alert.present();

              case 12:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
      }

      entrega() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var id, alert;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                id = this.router.url.replace('/pedido/', '');

                if (!(this.buscar_s != 'buscar')) {
                  _context4.next = 5;
                  break;
                }

                this.changefrete();

                if (!(this.frete_status == false)) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return");

              case 5:
                this.setcupom();
                _context4.next = 8;
                return this.alertCtrl.create({
                  header: 'Digite o troco!',
                  subHeader: 'Se você precisa de troco digite para quanto',
                  message: 'Valor do pedido ' + this.precos(this.total_carrinho),
                  inputs: [{
                    name: 'troco',
                    placeholder: 'Troco',
                    type: 'number'
                  }],
                  buttons: [{
                    text: 'Escolher outro',
                    role: 'cancel',
                    handler: () => {}
                  }, {
                    text: 'Pedir',
                    handler: data => {
                      if (this.buscar_s == 'buscar') {
                        var bodys = {
                          code: 'no_code',
                          restaurante: id,
                          frete: this.frete,
                          local: id,
                          status: '',
                          estado: this.uf + "-" + this.estado,
                          de: this.myaccount['id'],
                          pagamento: 'Buscar no local',
                          nome: this.myaccount['nome'],
                          endereco: this.endereco,
                          cep: '',
                          itens: JSON.stringify(this.produtos),
                          cidade: this.uf,
                          bairro: this.bairro_s,
                          complemento: this.complemento_s,
                          numero: this.numero_s,
                          tel: this.myaccount['tel'],
                          troco: data.troco,
                          obs: this.obs_s,
                          cupom: this.cupom_s,
                          horario: this.horario,
                          taxa: Number(JSON.parse(localStorage.getItem('restaurante'))['taxa'])
                        };
                      } else {
                        var bodys = {
                          code: 'no_code',
                          restaurante: id,
                          frete: this.frete,
                          local: id,
                          status: '',
                          estado: this.myaccount['cidade'] + "",
                          de: this.myaccount['id'],
                          pagamento: 'Receber em casa',
                          nome: this.myaccount['nome'],
                          endereco: this.endereco,
                          cep: this.myaccount['cidade'] + "",
                          itens: JSON.stringify(this.produtos),
                          cidade: this.myaccount['cidade'],
                          bairro: this.myaccount['bairro'],
                          complemento: this.myaccount['complemento'],
                          numero: this.myaccount['numero'],
                          tel: this.myaccount['tel'],
                          troco: data.troco,
                          obs: this.obs_s,
                          cupom: this.cupom_s,
                          horario: this.horario,
                          taxa: Number(JSON.parse(localStorage.getItem('restaurante'))['taxa'])
                        };
                      }

                      this.http.setDataSerializer('json');
                      this.http.post(new _config__WEBPACK_IMPORTED_MODULE_8__["Config"]().local_link_api + '/api/pedidos', bodys, {}).then(data => {
                        this.alert_OPS('SUCESSO!', 'Pedido realizado com sucesso', 'Atenção: O tempo e a entrega do pedido é de responsabilidade do estabelecimento');
                        localStorage.removeItem('carrinho');
                        this.navCtrl.navigateRoot('/pedidos');
                      }).catch(err => {});
                    }
                  }]
                });

              case 8:
                alert = _context4.sent;
                _context4.next = 11;
                return alert.present();

              case 11:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
      }

      online(id_cartao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          var id, alert;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                this.getestoque();
                id = this.router.url.replace('/pedido/', '');

                if (!(this.buscar_s != 'buscar')) {
                  _context5.next = 6;
                  break;
                }

                this.changefrete();

                if (!(this.frete_status == false)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return");

              case 6:
                this.setcupom();
                _context5.next = 9;
                return this.alertCtrl.create({
                  header: 'Você irá efetuar o pagamento online',
                  subHeader: '',
                  message: this.precos(this.total_carrinho),
                  buttons: [{
                    text: 'Escolher outro',
                    role: 'cancel',
                    handler: () => {}
                  }, {
                    text: 'Pagar',
                    handler: data => {
                      if (this.new_address == true) {
                        var bodys = {
                          code: 'no_code',
                          restaurante: id,
                          frete: this.frete,
                          local: id,
                          status: '',
                          estado: this.uf + "-" + this.estado,
                          de: this.myaccount['id'],
                          pagamento: 'Buscar no local',
                          nome: this.myaccount['nome'],
                          endereco: this.endereco,
                          cep: '',
                          itens: JSON.stringify(this.produtos),
                          pay: id_cartao,
                          cidade: this.uf,
                          bairro: this.bairro_s,
                          complemento: this.complemento_s,
                          numero: this.numero_s,
                          tel: this.myaccount['tel'],
                          obs: this.obs_s,
                          total: Number(this.total_carrinho),
                          cupom: this.cupom_s,
                          horario: this.horario,
                          taxa: Number(JSON.parse(localStorage.getItem('restaurante'))['taxa'])
                        };
                      } else {
                        var bodys = {
                          code: 'no_code',
                          restaurante: id,
                          frete: this.frete,
                          local: id,
                          status: '',
                          estado: this.myaccount['cidade'] + "",
                          de: this.myaccount['id'],
                          pagamento: 'Pagamento online (PAGO)',
                          nome: this.myaccount['nome'],
                          endereco: this.endereco,
                          cep: this.myaccount['cidade'] + "",
                          itens: JSON.stringify(this.produtos),
                          pay: id_cartao,
                          cidade: this.myaccount['cidade'],
                          bairro: this.myaccount['bairro'],
                          complemento: this.myaccount['complemento'],
                          numero: this.myaccount['numero'],
                          tel: this.myaccount['tel'],
                          obs: this.obs_s,
                          total: Number(this.total_carrinho),
                          cupom: this.cupom_s,
                          horario: this.horario,
                          taxa: Number(JSON.parse(localStorage.getItem('restaurante'))['taxa'])
                        };
                      }

                      this.processando = true;
                      this.http.setDataSerializer('json');
                      this.http.post(new _config__WEBPACK_IMPORTED_MODULE_8__["Config"]().local_link_api + '/api/pedidos', bodys, {}).then(data => {
                        //
                        if (data.data == "4" || data.data == "6" || data.data == "00") {
                          this.alert_OPS('SUCESSO!', 'Pedido realizado com sucesso', 'Atenção: O tempo e a entrega do pedido é de responsabilidade do estabelecimento');
                          localStorage.removeItem('carrinho');
                          this.navCtrl.navigateRoot('/pedidos');
                        } else {
                          //this.alert_OPS('Ops :(', 'Ainda não estamos aceitando pagamento on-line','Tente novamente usar outro.' + data.data);
                          this.alert_OPS('Ops :(', 'Houve um problema com seu cartão', 'Tente novamente ou use outro. (ERRO ' + data.data + ')');
                          this.processando = false;
                        }
                      }).catch(err => {});
                    }
                  }]
                });

              case 9:
                alert = _context5.sent;
                _context5.next = 12;
                return alert.present();

              case 12:
              case "end":
                return _context5.stop();
            }
          }, _callee5, this);
        }));
      }

      check_bairro() {
        return status;
      }

      routerlink_api(string) {
        this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.navCtrl.navigateForward(string);

              case 2:
              case "end":
                return _context6.stop();
            }
          }, _callee6, this);
        })));
      }

      ngOnInit() {
        const datauser = JSON.parse(localStorage.getItem('cliente_data')); //this.alert_OPS('OPS', 'Falta uma informação', '' + data);

        if (datauser == null) {
          this.navCtrl.navigateRoot('/minha-conta/' + 'pedido');
        }
      }

      alert_OPS(header, subheader, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          var alert;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.alertCtrl.create({
                  header: header,
                  subHeader: subheader,
                  message: message,
                  buttons: ['OK']
                });

              case 2:
                alert = _context7.sent;
                _context7.next = 5;
                return alert.present();

              case 5:
              case "end":
                return _context7.stop();
            }
          }, _callee7, this);
        }));
      }

      remove_item(item) {
        this.alert_OPS("AVISO", "Item removido", "");
        var index = this.produtos.indexOf(item);
        this.produtos.splice(index, 1);
        localStorage.setItem('carrinho', JSON.stringify(this.produtos));
        this.total_carrinho = 0;
        var product_ony = 0;
        this.produtos.forEach(car => {
          product_ony = 0;
          product_ony = Number(product_ony) + Number(car['preco']); //this.total_carrinho = Number(this.total_carrinho) + Number(car['preco']);

          car['adicionais'].forEach(add => {
            this.adicionais.push({
              preco: add['preco']
            }); //this.total_carrinho = Number(this.total_carrinho) + Number(add['preco']);

            product_ony = Number(product_ony) + Number(add['preco']);
          });
          product_ony = Number(car['quantidade']) * Number(product_ony);
          this.total_carrinho = Number(this.total_carrinho) + Number(product_ony);
        });
        this.frete = Number(this.frete) + Number(JSON.parse(localStorage.getItem('restaurante'))['taxa']);
        this.total_carrinho = Number(this.total_carrinho) + Number(this.frete);
        this.getestoque();
      }

    };

    PedidoPage.ctorParameters = () => [{
      type: ngx_xml2json__WEBPACK_IMPORTED_MODULE_6__["NgxXml2jsonService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
    }, {
      type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
    }, {
      type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }];

    PedidoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pedido',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pedido.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pedido/pedido.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pedido.page.scss */
      "./src/app/pedido/pedido.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_6__["NgxXml2jsonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], PedidoPage);
    /***/
  }
}]);
//# sourceMappingURL=pedido-pedido-module-es5.js.map