(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conta-conta-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/conta/conta.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conta/conta.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContaContaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar mode='ios'> \n    <ion-title>Mais</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding\">\n  \n  <ion-list *ngIf=\"logado == true\">\n    <ion-item (click)='routerlink_api(\"/minha-conta\")'>\n      <ion-icon slot=\"end\" name=\"md-contact\" class=\"ion-icon\"></ion-icon>\n      <ion-label><h2>Minha conta</h2></ion-label>\n    </ion-item>\n\n    <ion-item (click)='routerlink_api(\"/enderecos\")'>\n      <ion-icon slot=\"end\" name=\"md-home\" class=\"ion-icon\"></ion-icon>\n      <ion-label><h2>Endereços de entrega</h2></ion-label>\n    </ion-item>\n\n    <ion-item (click)='routerlink_api(\"/pagamento\")'>\n      <ion-icon slot=\"end\" name=\"md-card\" class=\"ion-icon\"></ion-icon>\n      <ion-label><h2>Formas de pagamento</h2></ion-label>\n    </ion-item>\n\n    <ion-item (click)='share()'>\n      <ion-icon slot=\"end\" name=\"md-share\" class=\"ion-icon\"></ion-icon>\n      <ion-label><h2>Compartilhar nosso App</h2></ion-label>\n    </ion-item>\n\n    <ion-item (click)='routerlink_api(\"/pedido-info\")'>\n      <ion-icon slot=\"end\" name=\"md-happy\" class=\"ion-icon\"></ion-icon>\n      <ion-label><h2>Sugestões e reclamações</h2></ion-label>\n    </ion-item>\n\n\n    <div *ngIf='status == true'>\n      <ion-item *ngIf='admin == true && myaccount.de != 1'>\n        <ion-label><h2>Restaurante (ABERTO)</h2></ion-label>\n        <ion-toggle (ionChange)='statuschange(\"OFF\")' [(ngModel)]=\"status\" color='warning' slot=\"end\" checked></ion-toggle>\n      </ion-item>\n    </div>\n    <div *ngIf='status == false'>\n      <ion-item *ngIf='admin == true && myaccount.de != 1'>\n        <ion-label><h2>Restaurante (FECHADO)</h2></ion-label>\n        <ion-toggle (ionChange)='statuschange(\"ON\")' [(ngModel)]=\"status\" color='warning' slot=\"end\"></ion-toggle>\n      </ion-item>\n    </div>\n    \n \n    <br>\n    <br>\n    <ion-item (click)='sair()'>\n      <ion-icon slot=\"end\" name=\"md-log-out\" class=\"ion-icon\"></ion-icon>\n      <ion-label><h2>Sair</h2></ion-label>\n    </ion-item>\n\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf=\"logado == false\">\n    <ion-item (click)='routerlink_api(\"/minha-conta\")'>\n      <ion-icon slot=\"end\" name=\"md-contact\" class=\"ion-icon\"></ion-icon>\n      <ion-label><h2>Fazer Login</h2></ion-label>\n    </ion-item>\n\n    <ion-item (click)='routerlink_api(\"/pedido-info\")' >\n      <ion-icon slot=\"end\" name=\"md-happy\" class=\"ion-icon\"></ion-icon>\n      <ion-label><h2>Sugestões e reclamações</h2></ion-label>\n    </ion-item>\n\n    <ion-item (click)='share()'>\n      <ion-icon slot=\"end\" name=\"md-share\" class=\"ion-icon\"></ion-icon>\n      <ion-label><h2>Compartilhar nosso app</h2></ion-label>\n    </ion-item>\n  </ion-list>\n\n\n  <div class=\"ion-text-center\">\n    <font size=\"2px\" color=\"gray\">Aplicativo desenvolvido por <a href=\"\">Ores Software</a></font>\n  </div> \n</ion-content>\n\n\n\n \n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"tab-schedule\" (click)=\"routerlink_api('/home')\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Início</ion-label>\n      </ion-tab-button>\n    \n      <ion-tab-button tab=\"tab-cart\" (click)=\"routerlink_api('/notificacoes')\">\n        <ion-icon name=\"notifications\"></ion-icon>\n        <ion-label>Notificações</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"tab-cart\" (click)=\"routerlink_api('/pedidos')\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-label>Pedidos</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"tab-person\" (click)=\"routerlink_api('/conta')\">\n        <ion-icon name=\"list\" color='warning'></ion-icon>\n        <ion-label>Mais</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n\n\n<style>\n.ion-icon {\n    color: #512b72\n  }\n\n  h2{\n    color: gray\n  }\n</style>";
    /***/
  },

  /***/
  "./src/app/conta/conta.module.ts":
  /*!***************************************!*\
    !*** ./src/app/conta/conta.module.ts ***!
    \***************************************/

  /*! exports provided: ContaPageModule */

  /***/
  function srcAppContaContaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContaPageModule", function () {
      return ContaPageModule;
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


    var _conta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./conta.page */
    "./src/app/conta/conta.page.ts");

    const routes = [{
      path: '',
      component: _conta_page__WEBPACK_IMPORTED_MODULE_6__["ContaPage"]
    }];
    let ContaPageModule = class ContaPageModule {};
    ContaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_conta_page__WEBPACK_IMPORTED_MODULE_6__["ContaPage"]]
    })], ContaPageModule);
    /***/
  },

  /***/
  "./src/app/conta/conta.page.scss":
  /*!***************************************!*\
    !*** ./src/app/conta/conta.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppContaContaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhL2NvbnRhLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/conta/conta.page.ts":
  /*!*************************************!*\
    !*** ./src/app/conta/conta.page.ts ***!
    \*************************************/

  /*! exports provided: ContaPage */

  /***/
  function srcAppContaContaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContaPage", function () {
      return ContaPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");

    let ContaPage = class ContaPage {
      constructor(http, zone, navCtrl, activerouter, alertCtrl, socialSharing) {
        this.http = http;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.activerouter = activerouter;
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        this.logado = false;
        this.de = "";
        this.admin = false;
        this.restaurantes = [];
        this.status = false;
        this.email_sugestao = new _config__WEBPACK_IMPORTED_MODULE_5__["Config"]().email_sugestao;
        const data = JSON.parse(localStorage.getItem('cliente_data'));
        const datauser = JSON.parse(localStorage.getItem('cliente_data')); //this.alert_erro('Ops :(', 'Falta uma informação', '' + data);

        if (data == null) {
          this.logado = false;
        } else {
          this.myaccount = datauser;
          this.http.get(new _config__WEBPACK_IMPORTED_MODULE_5__["Config"]().local_link_api + '/api/restaurante?id=' + this.myaccount['restaurante'], {}, {}).then(data => {
            this.restaurantes = JSON.parse(data.data);

            if (JSON.parse(data.data)[0]['status'] != "ABERTO") {
              this.status = false;
            } else {
              this.status = true;
            }
          }).catch(err => {//this.alert_erro("erro", "", err)
          });

          if (this.myaccount['de'] == null || this.myaccount['de'] == "") {
            this.admin = false;
          } else {
            this.admin = true;
          }

          this.logado = true;
        }
      }

      share() {
        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_5__["Config"]().local_link_api + '/api/config', {}, {}).then(data => {
          JSON.parse(data.data).forEach(e => {
            if (e['nome'] == "share-android") {
              this.socialSharing.share(e['valor'].split("{linha}").join('\n'));
            }
          });
        });
      }

      statuschange(stats) {
        if (stats == "ON") {
          this.http.get(new _config__WEBPACK_IMPORTED_MODULE_5__["Config"]().local_link_api + '/api/status?status=ABERTO&id=' + this.myaccount['restaurante'], {}, {}).then(data => {});
        } else {
          this.http.get(new _config__WEBPACK_IMPORTED_MODULE_5__["Config"]().local_link_api + '/api/status?status=FECHADO&id=' + this.myaccount['restaurante'], {}, {}).then(data => {});
        }
      }

      sendmail() {
        window.open('mailto:' + this.email_sugestao, '_system');
      }

      ngOnInit() {}

      alert_erro(header, subheader, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var alert;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.alertCtrl.create({
                  header: header,
                  subHeader: subheader,
                  message: message,
                  buttons: ['OK']
                });

              case 2:
                alert = _context.sent;
                _context.next = 5;
                return alert.present();

              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      }

      sair() {
        this.logado = false;
        localStorage.removeItem('cliente_data');
        this.navCtrl.navigateRoot('/home');
      }

      routerlink_api(string) {
        {
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

    };

    ContaPage.ctorParameters = () => [{
      type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
    }, {
      type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]
    }];

    ContaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-conta',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./conta.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/conta/conta.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./conta.page.scss */
      "./src/app/conta/conta.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]])], ContaPage);
    /***/
  }
}]);
//# sourceMappingURL=conta-conta-module-es5.js.map