(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cardapio-cardapio-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cardapio/cardapio.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cardapio/cardapio.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardapioCardapioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode='ios'>\n    <ion-buttons slot=\"start\">\n      <ion-buttons slot=\"start\">\n        <a (click)=\"routerlink_api('/home')\">\n          <h3><ion-icon style=\"color: white;\" name=\"arrow-back\"></ion-icon></h3>\n        </a>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title><b>Comprar</b></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n\n\n  <ion-card center text-center>\n    <ion-card-content>\n      <ion-thumbnail slot=\"start\" style=\"margin: auto;\">\n        <img [src]=\"img(restaurante.imagem)\">\n      </ion-thumbnail>\n      <br>  \n      <ion-label>\n        <h2>{{ restaurante.nome }}</h2>    \n        <h3><font size='2px'>{{ get_categoria(restaurante.categoria) }}</font></h3>\n        <div *ngIf='carregar == false'>\n          <h3><b>{{ data }}</b></h3>\n          <br>\n        </div>\n  \n        <div *ngIf='carregar == true'>\n          <div class=\"ion-text-center\">\n            <ion-spinner name=\"dots\"></ion-spinner> \n          </div>\n  \n        </div>\n\n      </ion-label>\n      <section>\n        <ion-button size=\"small\" color=\"warning\" (click)='cardapio_s()'>Categorias</ion-button>\n        <ion-button size=\"small\" color=\"warning\" (click)='avaliacoes_s()'>Avaliações</ion-button>\n        <ion-button size=\"small\" color=\"warning\" (click)='sobre_s()'>Sobre</ion-button>\n      </section>\n    </ion-card-content>\n  </ion-card>\n \n    \n  <ion-list *ngIf='cardapio == true'>\n    <div *ngFor=\"let car of menuarray\">\n      <ion-item (click)=\"rout(car.id, car.nome);\" >\n        \n            <p><b>{{ car.nome }}</b></p>\n            <br>\n            <ion-icon name=\"arrow-forward\"  slot=\"end\"></ion-icon>\n      </ion-item>\n    </div>\n  </ion-list>\n\n  <ion-list *ngIf='carregar == true'>\n    <div>\n      <ion-item>\n        <ion-avatar slot=\"start\" style=\"width: 60px; height: 60px;\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n            <h2><b><ion-skeleton-text animated></ion-skeleton-text></b></h2>\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\n          </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n\n\n  <ion-card *ngIf='avalicoes == true'>\n   \n    <ion-card-header>\n      <div class=\"ion-text-center\">\n      <p>Quantidade de avaliações ({{ quantidade }})</p>\n      </div>\n      <ion-list>\n        <ion-item>\n          <ion-label><p>Principal {{ media }}</p></ion-label>\n          <div *ngFor='let i of fakeArray(getnumber(media))'>\n            <ion-icon name=\"star\" slot=\"end\" color='warning'></ion-icon>\n          </div>\n        </ion-item>\n        <ion-item>\n          <ion-label><p>Qualidade {{ media_qualidade }}</p></ion-label>\n          <div *ngFor='let i of fakeArray(getnumber(media_qualidade))'>\n            <ion-icon name=\"star\" slot=\"end\" color='warning'></ion-icon>\n          </div>\n        </ion-item> \n        <ion-item>\n          <ion-label><p>Entrega {{ media_entrega }}</p></ion-label>\n          <div *ngFor='let i of fakeArray(getnumber(media_entrega))'>\n            <ion-icon name=\"star\" slot=\"end\" color='warning'></ion-icon>\n          </div>\n        </ion-item>\n      </ion-list>\n    \n    </ion-card-header>\n\n    <div class=\"ion-text-center\"><p>Avaliações de usuários</p></div>\n    \n    <ion-list *ngFor='let avaliacao of avaliacao'> \n\n      <ion-item>\n  \n        <ion-label> \n         <h3>{{ avaliacao.usuario.nome }}</h3>\n         <p>{{ avaliacao.avaliacao.texto }}</p>\n        </ion-label>\n        <div *ngFor='let i of fakeArray(getnumber(avaliacao.avaliacao.avaliacao))'>\n          <ion-icon name=\"star\" slot=\"end\" color='warning'></ion-icon>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n \n\n  <ion-card *ngIf='sobre == true'>\n    <ion-card-content>\n      <h2><b>Sobre o local</b></h2>\n      <p>{{ restaurante.descricao }}</p>\n      <br>\n      <h2><b>Endereço</b></h2>\n      <p>{{ restaurante.endereco }}</p>\n    </ion-card-content>\n\n  \n  </ion-card>\n\n\n \n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n<ion-footer>\n  <ion-toolbar mode='ios'>\n   \n    <ion-button (click)='showitens()' slot=\"start\" size=\"small\" color='light'><font color=\"#512b72\">{{ total(this.total_carrinho) }}</font></ion-button>\n    \n    \n      <ion-button slot=\"end\" size=\"small\" color='light' (click)=\"routerlink_api('/pedido/' + restaurante.id)\">\n        <font color=\"#512b72\">Finalizar pedido</font></ion-button>\n        \n  </ion-toolbar>\n</ion-footer>\n\n\n<style>\n  ion-card {\n    --background: #fff;\n  }\n\n  ion-item {\n    --background: #fff\n  }\n\n  .card {\n  background-color: #fff;\n  color: white;\n  padding: 3px;  \n  height: auto;     \n  white-space: break-word;\n  border-radius: 5px;\n  color: black;\n}.cards { \n  max-width: 300px; \n  margin: 0 auto;  \n  display: grid;\n  grid-gap: 1rem;\n  white-space: break-word;\n}\nion-thumbnail > img{\n  width: inherit; height: inherit;\n}\n</style>";
    /***/
  },

  /***/
  "./src/app/cardapio/cardapio.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/cardapio/cardapio.module.ts ***!
    \*********************************************/

  /*! exports provided: CardapioPageModule */

  /***/
  function srcAppCardapioCardapioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardapioPageModule", function () {
      return CardapioPageModule;
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


    var _cardapio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cardapio.page */
    "./src/app/cardapio/cardapio.page.ts");

    const routes = [{
      path: '',
      component: _cardapio_page__WEBPACK_IMPORTED_MODULE_6__["CardapioPage"]
    }];
    let CardapioPageModule = class CardapioPageModule {};
    CardapioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_cardapio_page__WEBPACK_IMPORTED_MODULE_6__["CardapioPage"]]
    })], CardapioPageModule);
    /***/
  },

  /***/
  "./src/app/cardapio/cardapio.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/cardapio/cardapio.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardapioCardapioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmRhcGlvL2NhcmRhcGlvLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/cardapio/cardapio.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/cardapio/cardapio.page.ts ***!
    \*******************************************/

  /*! exports provided: CardapioPage */

  /***/
  function srcAppCardapioCardapioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardapioPage", function () {
      return CardapioPage;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");

    let CardapioPage = class CardapioPage {
      constructor(router, dataService, http, loadingController, navCtrl, zone, alertCtrl, platform) {
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.menuarray = [];
        this.menu = [];
        this.abertura = "";
        this.destaque = null;
        this.total_carrinho = 0;
        this.teste = "a";
        this.locais = [];
        this.restaurante = [];
        this.link = new _config__WEBPACK_IMPORTED_MODULE_6__["Config"]().local_link_img;
        this.horarios = [];
        this.avaliacao = [];
        this.quantidade = 0;
        this.estrelas = 0;
        this.sobre = false;
        this.avalicoes = false;
        this.cardapio = true;
        this.categorias = [];
        var id = this.router.url.replace('/cardapio/', '');
        this.platform.backButton.subscribe(() => {
          this.routerlink_api('/home');
        });
      }

      limpar() {
        localStorage.clear();
      }

      routerlink_api(string) {
        if (string.match('pedido')) {
          if (this.restaurante['status'] != "ABERTO") {
            this.alert_erro('OPS :(', 'Estabelecimento fechado no momento', '');
          } else {
            this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.navCtrl.navigateForward(string);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            })));
          }
        } else {
          this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.navCtrl.navigateForward(string);

                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          })));
        }
      }

      rout(id, nome) {
        var data = JSON.parse(localStorage.getItem('cliente_data'));

        if (data == null) {
          this.navCtrl.navigateRoot('/minha-conta');
          return;
        }

        if (this.restaurante['status'] != "ABERTO") {
          this.alert_erro('OPS :(', 'Estabelecimento fechado no momento', '');
          return;
        }

        this.navCtrl.navigateRoot('/produtos/' + id);
      }

      checkstring(string) {
        if (string == "Burgers" || string == "Combo de Burgers" || string == "Bebidas") {
          return "white";
        } else {
          return "white";
        }
      }

      img(img) {
        if (img == null || img == "") {
          return this.link + "none.png";
        } else {
          return this.link + "" + img;
        }
      }

      ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  var id, data, product_ony, prices;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        this.carregar = true;
                        id = this.router.url.replace('/cardapio/', '');
                        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_6__["Config"]().local_link_api + '/api/avaliacao?id=' + id, {}, {}).then(data => {
                          this.avaliacao = JSON.parse(data.data);
                          {
                            var cinco = 0;
                            var quatro = 0;
                            var tres = 0;
                            var dois = 0;
                            var um = 0;
                            var vezes = 0;
                            var soma = 0;
                            JSON.parse(data.data).forEach(element => {
                              this.quantidade++;

                              if (element['avaliacao']['avaliacao'] == "5") {
                                cinco++;
                              }

                              if (element['avaliacao']['avaliacao'] == "4") {
                                quatro++;
                              }

                              if (element['avaliacao']['avaliacao'] == "3") {
                                tres++;
                              }

                              if (element['avaliacao']['avaliacao'] == "2") {
                                dois++;
                              }

                              if (element['avaliacao']['avaliacao'] == "1") {
                                um++;
                              }

                              vezes = vezes * element['avaliacao']['avaliacao'];
                              soma = soma + element['avaliacao']['avaliacao'];
                            });
                            vezes = 5 * cinco + 4 * quatro + 3 * tres + 2 * dois + 1 * 1;
                            soma = cinco + quatro + tres + dois + um;
                            var res = vezes / soma;
                            this.media = parseFloat(res.toFixed(2));
                          } //QUALIDADE

                          {
                            var cinco = 0;
                            var quatro = 0;
                            var tres = 0;
                            var dois = 0;
                            var um = 0;
                            var vezes = 0;
                            var soma = 0;
                            JSON.parse(data.data).forEach(element => {
                              if (element['avaliacao']['qualidade'] == "5") {
                                cinco++;
                              }

                              if (element['avaliacao']['qualidade'] == "4") {
                                quatro++;
                              }

                              if (element['avaliacao']['qualidade'] == "3") {
                                tres++;
                              }

                              if (element['avaliacao']['qualidade'] == "2") {
                                dois++;
                              }

                              if (element['avaliacao']['qualidade'] == "1") {
                                um++;
                              }

                              vezes = vezes * element['avaliacao']['qualidade'];
                              soma = soma + element['avaliacao']['qualidade'];
                            });
                            vezes = 5 * cinco + 4 * quatro + 3 * tres + 2 * dois + 1 * 1;
                            soma = cinco + quatro + tres + dois + um;
                            var res = vezes / soma;
                            this.media_qualidade = parseFloat(res.toFixed(2));
                          } //ENTREGA

                          {
                            var cinco = 0;
                            var quatro = 0;
                            var tres = 0;
                            var dois = 0;
                            var um = 0;
                            var vezes = 0;
                            var soma = 0;
                            JSON.parse(data.data).forEach(element => {
                              if (element['avaliacao']['entrega'] == "5") {
                                cinco++;
                              }

                              if (element['avaliacao']['entrega'] == "4") {
                                quatro++;
                              }

                              if (element['avaliacao']['entrega'] == "3") {
                                tres++;
                              }

                              if (element['avaliacao']['entrega'] == "2") {
                                dois++;
                              }

                              if (element['avaliacao']['entrega'] == "1") {
                                um++;
                              }

                              vezes = vezes * element['avaliacao']['entrega'];
                              soma = soma + element['avaliacao']['entrega'];
                            });
                            vezes = 5 * cinco + 4 * quatro + 3 * tres + 2 * dois + 1 * 1;
                            soma = cinco + quatro + tres + dois + um;
                            var res = vezes / soma;
                            this.media_entrega = parseFloat(res.toFixed(2));
                          }
                        });
                        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_6__["Config"]().local_link_api + '/api/horario?id=' + id, {}, {}).then(dataa => {
                          var jsonobject = JSON.parse(dataa.data);
                          localStorage.setItem('horario', JSON.stringify(jsonobject));
                          var semana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
                          var d = new Date();

                          if (jsonobject[semana[d.getDay()]] == "NA") {
                            this.data = "Não funciona hoje";
                          } else {
                            this.data = "Aberto de " + JSON.parse(jsonobject[semana[d.getDay()]])['de'] + " até " + JSON.parse(jsonobject[semana[d.getDay()]])['ate'];
                          }

                          if (this.restaurante['status'] != "ABERTO") {
                            this.data = "Fechado no momento";
                          } //this.data = semana[d.getDay()]  

                        });
                        this.restaurante = JSON.parse(localStorage.getItem('restaurante'));
                        this.menuarray = [];
                        this.menu = []; //this.destaque = JSON.parse(localStorage.getItem('destaque'))

                        id = this.router.url.replace('/cardapio/', '');
                        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_6__["Config"]().local_link_api + '/api/cardapio?id=' + id, {}, {}).then(data => {
                          this.local = JSON.parse(localStorage.getItem('local'));
                          this.carregar = false;
                          this.menuarray = JSON.parse(data.data).filter(function (a) {
                            return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
                          }, Object.create(null));
                          this.menuarray.forEach(e => {
                            this.menu.push(e);
                          });
                        }).catch(err => {});
                        this.total_carrinho = 0;
                        data = JSON.parse(localStorage.getItem('carrinho'));

                        if (data == null) {
                          this.carrinho_boolean = false;
                        } else {
                          this.carrinho_boolean = true;
                          this.carrinho = data;
                          product_ony = 0;
                          prices = [];
                          this.carrinho.forEach(car => {
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
                                prices.push(ftotal);
                              });
                              car['adicionais_gratis'].forEach(add => {
                                var ftotal = Number(add['preco']) * add['quantidade'];
                                product_ony = Number(product_ony) + Number(ftotal);
                              });

                              if (prices.length != 0) {
                                product_ony = Number(product_ony) + Number(Math.max(...prices));
                              }

                              product_ony = Number(car['quantidade']) * Number(product_ony);
                              this.total_carrinho = Number(this.total_carrinho) + Number(product_ony);
                            }
                          });
                        }

                        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_6__["Config"]().local_link_api + '/api/cardapio?id=ALL', {}, {}).then(data => {
                          this.categorias = JSON.parse(data.data);
                        }).catch(err => {//this.alert_erro("erro", "", err)
                        });
                        id = this.router.url.replace('/cardapio/', '');

                      case 14:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3, this);
                })));

              case 1:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
      }

      ngOnInit() {}

      total(int) {
        return int.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });
      }

      showitens() {}

      carregando() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.loadingController.create({
                  message: 'Carregando'
                });

              case 2:
                this.loading = _context5.sent;
                _context5.next = 5;
                return this.loading.present();

              case 5:
              case "end":
                return _context5.stop();
            }
          }, _callee5, this);
        }));
      }

      horario() {}

      limpaValoresRepetidos(array) {
        for (let i in array) {
          let valorComparado = array[i];
          let cont = 0; //contador de incidencia de repeticao, seu valor deve ser 1

          for (let i in array) {
            if (valorComparado === array[i]) {
              cont += 1;

              if (cont > 1) {
                cont--;
                delete array[i];
              }
            }
          }
        }

        return array;
      }

      sobre_s() {
        this.sobre = true;
        this.avalicoes = false;
        this.cardapio = false;
      }

      avaliacoes_s() {
        this.sobre = false;
        this.avalicoes = true;
        this.cardapio = false;
      }

      cardapio_s() {
        this.sobre = false;
        this.avalicoes = false;
        this.cardapio = true;
      }

      get_categoria(eid) {
        var nome;
        this.categorias.forEach(e => {
          if (e['id'] == eid) {
            nome = e['nome'];
          }
        });
        return nome;
      }

      alert_erro(header, subheader, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          var alert;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.alertCtrl.create({
                  header: header,
                  subHeader: subheader,
                  message: message,
                  buttons: ['OK']
                });

              case 2:
                alert = _context6.sent;
                _context6.next = 5;
                return alert.present();

              case 5:
              case "end":
                return _context6.stop();
            }
          }, _callee6, this);
        }));
      }

      getnumber(int) {
        return Math.round(int);
      }

      fakeArray(length) {
        if (length >= 0) {
          return new Array(length);
        }
      }

    };

    CardapioPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
    }, {
      type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
    }];

    CardapioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cardapio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cardapio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cardapio/cardapio.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cardapio.page.scss */
      "./src/app/cardapio/cardapio.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])], CardapioPage);
    /***/
  }
}]);
//# sourceMappingURL=cardapio-cardapio-module-es5.js.map