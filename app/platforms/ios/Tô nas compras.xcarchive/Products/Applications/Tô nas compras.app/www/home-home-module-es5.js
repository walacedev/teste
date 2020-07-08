(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent >\n  <ion-toolbar mode='ios'> \n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)='reload()'>\n        <ion-icon slot=\"start\"  class=\"ion-icon\" slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n     \n        <img alt=\"logo\" id=\"header_logo\" width=\"80px\" src=\"assets/imgs/logo.png\">\n     \n      </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"routerlink_api('/locais')\">\n        <ion-icon class=\"ion-icon\" name=\"md-pin\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen> \n  <div class=\"ion-padding\" >\n    <ion-toolbar style=\"--background: #fff;\">\n      <ion-searchbar style=\"--placeholder-size: 1x:\" (ionInput)='procurar_array()' [(ngModel)]='procurar_s' placeholder='Busque seu estabelecimento favorito'></ion-searchbar>\n    </ion-toolbar>\n    <div *ngIf='erro_cidade == true'>\n      <ion-card>\n        <ion-card-content>\n          <section class=\"ion-text-center\">\n            {{ local.nome }}\n            <br>\n             <p>Ainda não chegamos à sua região</p>\n             <br>\n             <p><a (click)=\"routerlink_api('/locais')\">Alterar cidade</a></p>\n          </section>\n        </ion-card-content>\n      </ion-card>\n    </div>\n   \n    <ion-list>\n      <div *ngIf=\"carregando == true\">\n        <ion-list-header>\n          \n            <div class=\"ion-text-center\"><b>O que vamos comprar hoje ???</b></div>\n         \n        </ion-list-header>\n        <ion-progress-bar color=\"warning\" type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n      </div>\n\n\n      <div *ngIf='this.procurar_s == null'>\n        <div *ngFor=\"let car of restaurantes\">\n          <ion-item (click)=\"rout(car.id);\">   \n            <ion-thumbnail slot=\"start\" style=\"width: 80px; height: 80px;\">\n              <img [src]=\"img(car.imagem)\">\n            </ion-thumbnail>\n            <ion-label> \n              <h2><b><font size='3px'>{{ car.nome }}</font></b></h2> \n              <h3><font size='2px'>{{ tipo_entrega(car.entrega_tipo) }}</font></h3>\n              <h3><font size='2px'>{{ get_categoria(car.categoria) }}</font></h3>\n              <p><span [innerHTML]=\"status_restaurante(car.status)\"></span></p>\n\n        \n            </ion-label>\n          </ion-item>\n        </div>\n      </div>\n\n\n      <div *ngIf='this.procurar_s != null'>\n        <div *ngFor=\"let car of procurar_array()\">\n          <ion-item (click)=\"rout(car.id);\">   \n            <ion-thumbnail slot=\"start\" style=\"width: 80px; height: 80px;\">\n              <img [src]=\"img(car.imagem)\">\n            </ion-thumbnail>\n            <ion-label> \n              <h2><b>{{ car.nome }}</b></h2> \n              <h3>{{ tipo_entrega(car.entrega_tipo) }}</h3>\n              <p><span [innerHTML]=\"status_restaurante(car.status)\"></span></p>\n            </ion-label>\n          </ion-item>\n        </div>\n      </div>\n      \n    </ion-list>\n\n\n    <ion-item (click)=\"sendmail()\" *ngIf='show == true'>\n      <ion-label>\n        <h3>Não achou seu estabelecimento favorito?</h3>\n        <p>Faça uma sugestão!</p>\n      </ion-label>\n    </ion-item>\n\n\n\n\n\n\n    <!--- \n      <ion-button *ngIf='logado == false' (click)=\"routerlink_api('/minha-conta')\" size=\"block\" color='black'>CADASTRE-SE</ion-button>\n      <ion-button *ngIf='logado == true' (click)=\"routerlink_api('/minha-conta')\" size=\"block\" color='black'>MINHA CONTA</ion-button>\n      <ion-button (click)=\"cardapio()\" size=\"block\" color='black'>FAZER PEDIDO</ion-button>\n      <ion-button (click)=\"routerlink_api('/contato')\" size=\"block\" color='black'>SOBRE</ion-button>\n      -->\n\n\n    <br>\n  </div>\n\n</ion-content>\n\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"tab-schedule\" (click)=\"routerlink_api('/home')\">\n        <ion-icon name=\"home\" color='warning'></ion-icon>\n        <ion-label>Início</ion-label>\n      </ion-tab-button>\n    \n      <ion-tab-button tab=\"tab-cart\" (click)=\"routerlink_api('/notificacoes')\">\n        <ion-icon name=\"notifications\"></ion-icon>\n        <ion-label>Notificações</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"tab-cart\" (click)=\"routerlink_api('/pedidos')\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-label>Pedidos</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"tab-person\" (click)=\"routerlink_api('/conta')\">\n        <ion-icon name=\"list\"></ion-icon>\n        <ion-label>Mais</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n\n\n<style scoped>\n  .ion-icon {\n    color: white\n  }\n\n  .logo {\n    width: 250px;\n    margin: auto;\n    display: block;\n  }\n  .toolbar-background-md {\n    background: linear-gradient(to bottom right, #00a7ad, #004547);\n}\n\n.bar-button-default-md {\n  color: #fff;\n}\nion-thumbnail > img{\n  width: inherit; height: inherit;\n}\n\n</style>";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    let HomePageModule = class HomePageModule {};
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");

    let HomePage = class HomePage {
      constructor(localNotifications, http, zone, navCtrl, activerouter, alertCtrl) {
        this.localNotifications = localNotifications;
        this.http = http;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.activerouter = activerouter;
        this.alertCtrl = alertCtrl;
        this.local_name = new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_name;
        this.email_sugestao = new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().email_sugestao;
        this.item = [];
        this.locais = [];
        this.restaurantes = [];
        this.procurar_s = null;
        this.show = false;
        this.horarios = [];
        this.final = [];
        this.categorias = [];
        this.lido = false;
        this.link = new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_img;
        /*localStorage.clear();
        const dataz = JSON.parse(localStorage.getItem('carrinho'));
         
        this.final.push({nome: 'Teste',id: '2',quantidade: 2, preco: '100', tipo: 3});
        this.final.push({nome: 'Test1e',id: '2',quantidade: 2, preco: '100', tipo: 3});
        this.final.push({nome: 'Test2e',id: '2',quantidade: 2, preco: '100', tipo: 3});
        if(dataz == null){
          localStorage.setItem('carrinho', JSON.stringify(this.final));
        }else{
          this.item.push(dataz)
          this.item.push(this.final)
          //localStorage.setItem('carrinho', localStorage.getItem('carrinho') + JSON.stringify(this.final));
        }
        console.log(JSON.stringify(this.item))*/
      }

      ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                this.zone.run(() => {
                  this.localNotifications.hasPermission().then(res => {
                    if (res.isEnabled) {
                      console.log('We have permission to send push notifications');
                    } else {
                      console.log('We do not have permission to send push notifications');
                    }
                  });
                  this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/cardapio?id=ALL', {}, {}).then(data => {
                    this.categorias = JSON.parse(data.data);
                  }).catch(err => {//this.alert_erro("erro", "", err)
                  });
                  this.erro_cidade = false;
                  this.restaurantes = [];
                  this.carregando = true;

                  if (localStorage.getItem('local') == null) {
                    this.routerlink_api('/locais');
                  } else {
                    this.local = JSON.parse(localStorage.getItem('local'));
                  }

                  localStorage.removeItem("restaurante");
                  const data = JSON.parse(localStorage.getItem('cliente_data')); //this.alert_erro('Ops :(', 'Falta uma informação', '' + data);

                  if (data == null) {
                    this.logado = false;
                  } else {
                    if (data['tel'] == "") {
                      this.alert_erro("OPS :(", "", "Você precisa atualizar seus dados");
                      this.navCtrl.navigateRoot("/minha-conta");
                    }

                    this.logado = true;
                  }

                  if (localStorage.getItem('local') == null) {
                    this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/restaurante?cidade=1', {}, {}).then(data => {
                      this.restaurantes = JSON.parse(data.data);
                      this.carregando = false;
                      this.show = true;
                    }).catch(err => {//this.alert_erro("erro", "", err)
                    });
                  } else {
                    this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/restaurante?cidade=' + JSON.parse(localStorage.getItem('local'))['id'], {}, {}).then(data => {
                      if (data.data.includes('ERRO_CIDADE')) {
                        this.erro_cidade = true;
                      } else {
                        this.restaurantes = JSON.parse(data.data);
                      }

                      this.show = true;
                      this.carregando = false;
                    }).catch(err => {//this.alert_erro("erro", "", err)
                    });
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      }

      ngOnInit() {}

      procurar_array() {
        var array = [];
        this.restaurantes.forEach(e => {
          if (e['nome'].toLowerCase().includes(this.procurar_s.toLowerCase())) {
            array.push(e);
          }
        });
        return array;
      }

      tipo_entrega(id) {
        if (id == 1) {
          return "Balcão";
        } else if (id == 2) {
          return "Entrega";
        } else if (id == 3) {
          return "Entrega e Balcão";
        }
      }

      reload() {
        this.show = false;
        this.carregando = true;
        this.restaurantes = [];
        localStorage.removeItem("restaurante");
        const data = JSON.parse(localStorage.getItem('cliente_data')); //this.alert_erro('Ops :(', 'Falta uma informação', '' + data);

        if (data == null) {
          this.logado = false;
        } else {
          this.logado = true;
        }

        if (localStorage.getItem('local') == null) {
          this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/restaurante?cidade=1', {}, {}).then(data => {
            this.restaurantes = JSON.parse(data.data);
            this.carregando = false;
            this.show = true;
          }).catch(err => {//this.alert_erro("erro", "", err)
          });
        } else {
          this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/restaurante?cidade=' + JSON.parse(localStorage.getItem('local'))['id'], {}, {}).then(data => {
            if (data.data.includes('ERRO_CIDADE')) {
              this.erro_cidade = true;
            } else {
              this.restaurantes = JSON.parse(data.data);
            }

            this.show = true;
            this.carregando = false;
          }).catch(err => {//this.alert_erro("erro", "", err)
          });
        }
      }

      cardapio() {
        if (localStorage.getItem('local') == null) {
          this.navCtrl.navigateRoot("/locais");
        } else {
          this.navCtrl.navigateRoot("/cardapio");
        }
      }

      alert_erro(header, subheader, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var alert;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.alertCtrl.create({
                  header: header,
                  subHeader: subheader,
                  message: message,
                  buttons: ['OK']
                });

              case 2:
                alert = _context2.sent;
                _context2.next = 5;
                return alert.present();

              case 5:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
      }

      img(img) {
        if (img == null || img == "") {
          return this.link + "none.png";
        } else {
          return this.link + "" + img;
        }
      }

      rout(string) {
        const datauser = JSON.parse(localStorage.getItem('cliente_data'));
        this.restaurantes.forEach(e => {
          if (string == e['id']) {
            localStorage.setItem('restaurante', JSON.stringify(e));

            if (datauser != null) {
              this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/visita?restaurante=' + e['id'] + '&de=' + datauser['id'], {}, {}).then(data => {}).catch(err => {//this.alert_erro("erro", "", err)
              });
            }
          }
        });
        this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.navCtrl.navigateForward('/cardapio/' + string);

              case 2:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        })));
      }

      sendmail() {
        window.open('mailto:' + this.email_sugestao, '_system');
      }

      status_restaurante(string) {
        if (string == "ABERTO") {
          return "<font color='green'>ABERTO</font>";
        } else {
          return "<font color='red'>FECHADO</font>";
        }
      }

      routerlink_api(string) {
        if (string == "/pedido") {
          this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/version.json', {}, {}).then(data => {
            var v = JSON.parse(data.data);
            {
              this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/locais', {}, {}).then(data => {
                this.locais = JSON.parse(data.data);
                this.locais.forEach(element => {
                  if (element['id'] == this.local['id']) {
                    if (element['status'] == "FECHADO" || element['status'] == null) {
                      this.alert_erro("AVISO!!", "Local fechado no momento", "Veja o horário de funcionamento em contato");
                    } else {
                      this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) switch (_context4.prev = _context4.next) {
                            case 0:
                              _context4.next = 2;
                              return this.navCtrl.navigateForward(string);

                            case 2:
                            case "end":
                              return _context4.stop();
                          }
                        }, _callee4, this);
                      })));
                    }
                  }
                });
              }).catch(err => {});
            }
          }).catch(err => {});
        } else {
          this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.navCtrl.navigateForward(string);

                case 2:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          })));
        }
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

    };

    HomePage.ctorParameters = () => [{
      type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__["LocalNotifications"]
    }, {
      type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }];

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__["LocalNotifications"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map