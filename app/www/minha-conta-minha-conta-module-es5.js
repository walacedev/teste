(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["minha-conta-minha-conta-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/minha-conta/minha-conta.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/minha-conta/minha-conta.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMinhaContaMinhaContaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode='ios'>\n    <ion-buttons slot=\"start\">\n      <ion-buttons slot=\"start\">\n        <a (click)=\"routerlink_api('/conta')\">\n          <h3><ion-icon style=\"color: white;\" name=\"arrow-back\"></ion-icon></h3>\n        </a>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-title>Minha conta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n\n  <div id=\"conta\" *ngIf=\"logado == true\">\n \n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>\n          <font color='black'>Seus dados</font>\n        </ion-card-subtitle>\n        <br>\n        <ion-list>\n          <ion-list-header>\n            Pessoal\n          </ion-list-header>\n          <ion-item>\n            <ion-input type='text' placeholder=\"Seu nome\" [(ngModel)]='nome_s'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input pattern=\"[0-9]*\" type='number' placeholder=\"Seu telefone\" [(ngModel)]='tel_s'></ion-input>\n          </ion-item>\n        </ion-list>\n        <br><br>\n        <ion-list>\n          <ion-list-header>\n            Conta\n          </ion-list-header>\n          <ion-item>\n            <ion-input type='text' placeholder=\"E-mail\" [(ngModel)]='email_s'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type='password' placeholder=\"Senha\" [(ngModel)]='senha_s'></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-card-header>\n      <section class=\"ion-text-center\">\n        <ion-button (click)='save()' color=\"warning\"> Salvar dados </ion-button>\n      </section>\n      <br>\n      <br>\n      <br>\n    </ion-card>\n  </div>\n\n  <div id=\"login\" *ngIf=\"logado == false\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>\n       <font color='black'>Entre com sua conta</font>\n        </ion-card-subtitle>\n        <br>\n        <ion-list>\n          <ion-item>\n            <ion-input type='text' placeholder=\"E-mail\" [(ngModel)]='email_l'></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type='password' placeholder=\"Senha\" [(ngModel)]='senha_l'></ion-input>\n          </ion-item>\n\n        \n        </ion-list>\n      </ion-card-header>\n      <section class=\"ion-text-center\">\n        <ion-button color=\"warning\" (click)='login()'> Entrar </ion-button>\n      </section>\n      <br>\n      \n      <br>\n      <div class=\"ion-text-center\">\n        <p>Caso não tenha uma conta</p>\n        <a (click)=\"this.navCtrl.navigateRoot('/cadastro');\">Cadastre-se</a>\n        <br>\n        <a (click)=\"recovery = true\">Esqueci minha senha</a>\n        <br>\n      </div>\n      <br>\n      <br>\n    </ion-card>\n\n    <ion-card *ngIf='recovery == true'>\n      <ion-card-content>\n        <p>Recuperar senha</p>\n       <ion-item>\n         <ion-label position='floating'>Digite seu e-mail</ion-label>\n         <ion-input type='email' placeholder=\"nome@email.com\" [(ngModel)]='email_r'></ion-input>\n       </ion-item>\n       <br>\n       <section class=\"ion-text-center\">\n        <ion-button color=\"danger\" (click)='recovery = false'> Cancelar </ion-button><ion-button color=\"success\" (click)='recuperar()'> Recuperar </ion-button>\n      </section>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n\n\n\n</ion-content>\n\n\n<style>\n  #rounded {\n    width: 100%;\n    height: 100px;\n    -moz-border-radius: 50px;\n    -webkit-border-radius: 50px;\n    border-radius: 10px;\n    margin-bottom: 10px;\n  }\n</style>\n\n<style>\n  ion-card {\n    --background: #fff;\n    --color: #000;\n  }\n\n  ion-item, ion-list-header, ion-list {\n    --background: #fff;\n    --color: #000;\n  }\n\n\n</style>";
    /***/
  },

  /***/
  "./src/app/minha-conta/minha-conta.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/minha-conta/minha-conta.module.ts ***!
    \***************************************************/

  /*! exports provided: MinhaContaPageModule */

  /***/
  function srcAppMinhaContaMinhaContaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinhaContaPageModule", function () {
      return MinhaContaPageModule;
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


    var _minha_conta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./minha-conta.page */
    "./src/app/minha-conta/minha-conta.page.ts");

    const routes = [{
      path: '',
      component: _minha_conta_page__WEBPACK_IMPORTED_MODULE_6__["MinhaContaPage"]
    }];
    let MinhaContaPageModule = class MinhaContaPageModule {};
    MinhaContaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_minha_conta_page__WEBPACK_IMPORTED_MODULE_6__["MinhaContaPage"]]
    })], MinhaContaPageModule);
    /***/
  },

  /***/
  "./src/app/minha-conta/minha-conta.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/minha-conta/minha-conta.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMinhaContaMinhaContaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pbmhhLWNvbnRhL21pbmhhLWNvbnRhLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/minha-conta/minha-conta.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/minha-conta/minha-conta.page.ts ***!
    \*************************************************/

  /*! exports provided: MinhaContaPage */

  /***/
  function srcAppMinhaContaMinhaContaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinhaContaPage", function () {
      return MinhaContaPage;
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


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/push/ngx */
    "./node_modules/@ionic-native/push/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");

    let MinhaContaPage = class MinhaContaPage {
      constructor(http, router, zone, alertCtrl, sanitizer, navCtrl, loadingController, activerouter, push, fb, platform) {
        this.http = http;
        this.router = router;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.activerouter = activerouter;
        this.push = push;
        this.fb = fb;
        this.platform = platform;
        this.buscando_cep = false;
        this.bairros = [];
        this.userdata = null;
        this.restaurante = [];
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/bairros', {}, {}).then(data => {
          this.bairros = JSON.parse(data.data);
        });
        this.platform.backButton.subscribe(() => {
          this.routerlink_api('/conta');
        });
        const data = JSON.parse(localStorage.getItem('cliente_data')); //this.alert_erro('Ops :(', 'Falta uma informação', '' + data);

        if (data == null) {
          this.logado = false;
        } else {
          this.logado = true;
          this.myaccount = data;
          this.endereco = this.myaccount['endereco'];
          this.cep_s = this.myaccount['cep'];
          this.uf = this.myaccount['cidade'];
          this.nome_s = this.myaccount['nome'];
          this.bairro_s = this.myaccount['bairro'];
          this.data_s = this.myaccount['aniversario'];
          this.complemento_s = this.myaccount['complemento'];
          this.numero_s = this.myaccount['numero'];
          this.email_s = this.myaccount['email'];
          this.senha_s = this.myaccount['senha'];
          this.tel_s = this.myaccount['tel'];
        }
      }

      ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
      }

      ngOnInit() {}

      save() {
        if (this.nome_s == null) {
          this.alert_erro('Ops :(', 'Falta uma informação', 'Digite o seu nome');
          return;
        }

        if (this.tel_s == null) {
          this.alert_erro('Ops :(', 'Falta uma informação', 'Digite o seu telefone');
          return;
        }

        if (this.email_s == null) {
          this.alert_erro('Ops :(', 'Falta uma informação', 'Digite o seu e-mail');
          return;
        }

        if (this.senha_s == null) {
          this.alert_erro('Ops :(', 'Falta uma informação', 'Digite sua senha');
          return;
        }
        /*
        public endereco;
        public cep_s;
        public uf;
        public nome_s;
        public bairro_s;
        public complemento_s;
        public numero_s;
        public email_s;
        public senha_s;
        */


        var bodys = {
          "nome": this.nome_s,
          "email": this.email_s,
          "tel": this.tel_s,
          "senha": this.senha_s,
          "aniversario": this.data_s
        };
        this.http.setDataSerializer('json');
        this.http.post(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/atualizar', bodys, {}).then(data => {
          this.alert_erro('SUCESSO', 'Dados salvos com sucesso.', '');
          var jsonobject = JSON.parse(data.data);
          localStorage.setItem('cliente_data', JSON.stringify(jsonobject));
          this.myaccount = JSON.parse(localStorage.getItem('cliente_data'));
        }).catch(err => {});
      }

      routerlink_api(string) {
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

      sair() {
        this.logado = false;
        localStorage.removeItem('cliente_data');
        this.navCtrl.navigateRoot('/home');
      }

      pedidos() {
        this.navCtrl.navigateRoot('/pedidos');
      }

      login() {
        if (this.email_l == null) {
          this.alert_erro('Ops :(', 'Falta uma informação', 'Digite o seu e-mail');
          return;
        }

        if (this.senha_l == null) {
          this.alert_erro('Ops :(', 'Falta uma informação', 'Digite sua senha');
          return;
        }

        this.carregando();
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/login?email=' + this.email_l, {}, {}).then(data => {
          var jsonobject = JSON.parse(data.data);

          if (this.email_l == jsonobject['email'] && this.senha_l == jsonobject['senha']) {
            setTimeout(() => {
              this.loading.dismiss();

              if (jsonobject['de'] != null) {
                this.alert_erro('Ops :(', 'Login apenas para usuários', 'Faça login no site: https://tonascompras.com.br/painel');
                return;
              }

              localStorage.setItem('cliente_data', JSON.stringify(jsonobject));
              this.restaurante = JSON.parse(localStorage.getItem('restaurante'));

              if (this.restaurante == null) {
                this.navCtrl.navigateRoot('/home');
              } else {
                this.navCtrl.navigateRoot('/cardapio/' + this.restaurante['id']);
              }
            }, 2000);
          } else {
            setTimeout(() => {
              this.loading.dismiss();
              this.errologin();
            }, 2000);
          }
        }).catch(err => {
          setTimeout(() => {
            this.loading.dismiss();
            this.errologin();
          }, 2000);
        });
        this.push.hasPermission().then(res => {
          const options = {
            android: {},
            ios: {
              alert: 'true',
              badge: true,
              sound: 'false'
            },
            windows: {},
            browser: {
              pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
          };
          const pushObject = this.push.init(options);
          pushObject.on('notification').subscribe(notification => {});
          pushObject.on('registration').subscribe(registration => {
            this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/token?email=' + this.email_l + '&token=' + registration.registrationId, {}, {}).then(data => {});
          });
          pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
        });
      }

      cep() {
        this.carregando();
        setTimeout(() => {
          this.loading.dismiss();
        }, 10000);
        this.http.get('https://viacep.com.br/ws/' + this.cep_s + '/json/', {}, {}).then(data => {
          var jsonobject = JSON.parse(data.data);

          if (jsonobject.uf != null) {
            setTimeout(() => {
              this.loading.dismiss();
              this.buscando_cep = true;
              this.endereco = jsonobject.logradouro + ", " + jsonobject.bairro;
              this.uf = jsonobject.localidade + "/" + jsonobject.uf;
            }, 2000);
          } else {
            setTimeout(() => {
              this.loading.dismiss();
              this.alerterrorcep();
            }, 1000);
          }
        }).catch(err => {
          setTimeout(() => {
            this.loading.dismiss();
          }, 2000);
        });
      }

      loginfacebook() {
        this.fb.login(['email', 'public_profile']).then(response => {
          this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
            this.carregando();
            this.userdata = {
              email: profile['email'],
              first_name: profile['first_name'],
              picture: profile['picture_large']['data']['url'],
              username: profile['name']
            };
            var bodys = {
              "nome": profile['first_name'],
              "cep": "",
              "endereco": "",
              "uf": "",
              "bairro": "",
              "complemento": "",
              "numero": "",
              "email": profile['email'],
              "tel": "",
              "senha": ""
            };
            this.http.setDataSerializer('json');
            this.http.post(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/login', bodys, {}).then(data => {
              if (data.data.includes('USER_EXIST')) {
                this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/login?email=' + profile['email'], {}, {}).then(data => {
                  var jsonobject = JSON.parse(data.data);
                  localStorage.setItem('cliente_data', JSON.stringify(jsonobject));
                  this.restaurante = JSON.parse(localStorage.getItem('restaurante'));

                  if (this.restaurante == null) {
                    this.loading.dismiss();
                    this.navCtrl.navigateRoot('/home');
                  } else {
                    this.loading.dismiss();
                    this.navCtrl.navigateRoot('/pedido/' + this.restaurante['id']);
                  }
                });
                return;
              } else {
                this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/login?email=' + profile['email'], {}, {}).then(data => {
                  var jsonobject = JSON.parse(data.data);
                  localStorage.setItem('cliente_data', JSON.stringify(jsonobject));
                  this.loading.dismiss();
                  this.alert_erro('SUCESSO', 'Conta criada com sucesso', 'Agora você precisa atualizar seus dados.');
                  this.navCtrl.navigateRoot("/home");
                });
              }
            });
          });
        });
      }

      recuperar() {
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_7__["Config"]().local_link_api + '/api/recovery?id=' + this.email_r, {}, {}).then(data => {
          this.alert_erro('Recuperação de senha', data.data, '');
        }).catch(err => {
          this.alert_erro("erro", "", err.data);
        });
      }

      carregando() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.loadingController.create({
                  message: 'Carregando'
                });

              case 2:
                this.loading = _context3.sent;
                _context3.next = 5;
                return this.loading.present();

              case 5:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
      }

      remover_carregando() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                this.loading.dismiss();

              case 1:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
      }

      alerterrorcep() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          var alert;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.alertCtrl.create({
                  header: 'ERRO',
                  subHeader: 'CEP não encontrado',
                  message: 'O cep digitado não foi encontrado.',
                  buttons: ['OK']
                });

              case 2:
                alert = _context5.sent;
                _context5.next = 5;
                return alert.present();

              case 5:
              case "end":
                return _context5.stop();
            }
          }, _callee5, this);
        }));
      }

      errologin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          var alert;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.alertCtrl.create({
                  header: 'ERRO',
                  subHeader: 'Login incorreto',
                  message: 'Usuário ou senha estão incorretos',
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

      alert_erro(header, subheader, message) {
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

    };

    MinhaContaPage.ctorParameters = () => [{
      type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__["Push"]
    }, {
      type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
    }];

    MinhaContaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-minha-conta',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./minha-conta.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/minha-conta/minha-conta.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./minha-conta.page.scss */
      "./src/app/minha-conta/minha-conta.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__["Push"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], MinhaContaPage);
    /***/
  }
}]);
//# sourceMappingURL=minha-conta-minha-conta-module-es5.js.map