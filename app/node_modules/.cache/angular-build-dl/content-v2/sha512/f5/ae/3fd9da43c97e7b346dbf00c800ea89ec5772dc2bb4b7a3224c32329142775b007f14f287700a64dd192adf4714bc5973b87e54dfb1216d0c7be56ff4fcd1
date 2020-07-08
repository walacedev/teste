(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagamento-pagamento-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagamento/pagamento.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagamento/pagamento.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagamentoPagamentoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-buttons slot=\"start\">\n          <a (click)=\"routerlink_api('/conta')\"><h3><ion-icon style=\"color: white;\" name=\"arrow-back\"></ion-icon></h3></a>\n          </ion-buttons>\n    </ion-buttons>\n    <ion-title>Pagamento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf='new == false'>\n    <ion-card>\n      <div *ngIf='this.cards == null'>\n        <ion-card-content>\n          <div class=\"ion-text-center\">\n            <p><font color='black'>Você não tem nenhum cartão adicionado.</font></p>\n            <br>\n            <ion-button (click)='mudar()' color='warning'>Adicionar</ion-button>\n          </div>\n        </ion-card-content>\n      </div> \n\n\n\n      <ion-card-content *ngIf='this.cards != null'>\n        <div class=\"ion-text-center\">\n          <p><font color='black'>Cartões adicionados</font></p>\n          </div>\n          <br>\n        <div class=\"ion-text-center\">\n          <div *ngFor='let card of cards'>\n            <ion-item>\n              <ion-row>\n                <ion-col col-6>\n                  <div><img src=\"{{ getbandeira(card.number) }}\" alt=\"\" style=\"width: 50%;\"></div>\n                </ion-col>\n                <ion-col>\n                  <div><font color='black'>final {{ card.number.substr(-4) }}</font></div>\n                </ion-col>\n                <ion-col>\n                  <div (click)='deletecard(card.id)'><font color='blue'>Excluir</font></div>\n                </ion-col>\n              </ion-row>\n              <br>\n            </ion-item>\n            <br>\n          </div>\n          <br>\n            <ion-button (click)='mudar()' color='warning'>Adicionar outro</ion-button>\n        </div>    \n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n\n\n\n  <div class=\"ion-padding\" *ngIf='new == true'>\n   <ion-list>\n    <ion-list-header>\n      Adicione um novo cartão\n    </ion-list-header>\n    <ion-item>\n      <ion-label position='floating'><b>Número do cartão</b></ion-label>\n      <ion-input pattern=\"[0-9]*\"  type='number' placeholder=\"\" [(ngModel)]='number_s'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position='floating'><b>DATA DE VALIDADE</b></ion-label>\n      <ion-datetime displayFormat=\"MM/YY\" max='2030' [(ngModel)]='date_s' placeholder=\"\"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label position='floating'><b>CVV</b></ion-label>\n      <ion-input pattern=\"[0-9]*\" type='number' placeholder=\"\" [(ngModel)]='code_s'></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position='floating'><b>NOME DO TITULAR</b></ion-label>\n      <ion-input type=\"text\" [(ngModel)]='name_s' placeholder=\"\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position='floating'><b>CPF DO TITULAR</b></ion-label>\n      <ion-input pattern=\"[0-9]*\"  type=\"number\" [(ngModel)]='cpf_s' placeholder=\"\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div class=\"ion-text-center\">\n    <ion-button (click)='mudar()' color='danger'>Cancelar</ion-button>&nbsp;&nbsp;&nbsp;<ion-button (click)='adicionar()' color='warning'>Adicionar</ion-button>\n  </div>\n  \n  </div>\n\n</ion-content>\n\n\n\n<style>\n  #rounded {\n    width: 100%;\n    height: 100px;\n    -moz-border-radius: 50px;\n    -webkit-border-radius: 50px;\n    border-radius: 10px;\n    margin-bottom: 10px;\n  }\n</style>\n\n<style>\n  \n</style>";
    /***/
  },

  /***/
  "./src/app/pagamento/pagamento.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pagamento/pagamento.module.ts ***!
    \***********************************************/

  /*! exports provided: PagamentoPageModule */

  /***/
  function srcAppPagamentoPagamentoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagamentoPageModule", function () {
      return PagamentoPageModule;
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


    var _pagamento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pagamento.page */
    "./src/app/pagamento/pagamento.page.ts");

    const routes = [{
      path: '',
      component: _pagamento_page__WEBPACK_IMPORTED_MODULE_6__["PagamentoPage"]
    }];
    let PagamentoPageModule = class PagamentoPageModule {};
    PagamentoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_pagamento_page__WEBPACK_IMPORTED_MODULE_6__["PagamentoPage"]]
    })], PagamentoPageModule);
    /***/
  },

  /***/
  "./src/app/pagamento/pagamento.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pagamento/pagamento.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagamentoPagamentoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2FtZW50by9wYWdhbWVudG8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pagamento/pagamento.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pagamento/pagamento.page.ts ***!
    \*********************************************/

  /*! exports provided: PagamentoPage */

  /***/
  function srcAppPagamentoPagamentoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagamentoPage", function () {
      return PagamentoPage;
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


    var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var ngx_xml2json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-xml2json */
    "./node_modules/ngx-xml2json/fesm2015/ngx-xml2json.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    let PagamentoPage = class PagamentoPage {
      constructor(ngxXml2jsonService, alertCtrl, router, dataService, http, loadingController, navCtrl, zone, platform) {
        this.ngxXml2jsonService = ngxXml2jsonService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.dataService = dataService;
        this.http = http;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.platform = platform;
        this.cards = [];
        this.new = false;
        this.itens = false;
        const datauser = JSON.parse(localStorage.getItem('cliente_data'));
        this.platform.backButton.subscribe(() => {
          this.routerlink_api('/home');
        });

        if (datauser == null) {
          this.logado = false;
          this.navCtrl.navigateRoot('/minha-conta');
        } else {
          this.logado = true;
          this.myaccount = datauser;
        }

        this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/pagamento?de=' + this.myaccount['id'], {}, {}).then(data => {
          var datajson = JSON.parse(data.data);
          this.cards = JSON.parse(data.data);

          if (datajson == null) {
            this.itens = false;
          } else {
            this.itens = true;
          }
        });
      }

      get() {
        return JSON.stringify(this.cards);
      }

      adicionar() {
        if (this.number_s == false) {
          this.alert_erro('Vish :(', 'O número do seu cartão está incorreto', '');
          return true;
        }

        if (this.date_s == null) {
          this.alert_erro('Vish :(', 'Digite a validade do cartão', '');
          return true;
        }

        if (this.code_s == null) {
          this.alert_erro('Vish :(', 'Digite o cvv do cartão', 'Ele se encontra no verso do cartão');
          return true;
        }

        if (this.name_s == null) {
          this.alert_erro('Vish :(', 'Digite o nome do titular', '');
          return true;
        }

        if (this.cpf_s == null) {
          this.alert_erro('Vish :(', 'Digite o cpf do titular', '');
          return true;
        }

        var bodys = {
          "number": this.number_s,
          "date": this.date_s,
          "code": this.code_s,
          "name": this.name_s,
          "cpf": this.cpf_s,
          "de": this.myaccount['id']
        };
        this.http.setDataSerializer('json');
        this.http.post(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/pagamento', bodys, {}).then(data => {
          this.alert_erro('SUCESSO', 'Seu cartão foi adicionado', '');
          this.new = false;
          this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/pagamento?de=' + this.myaccount['id'], {}, {}).then(data => {
            var datajson = JSON.parse(data.data);
            this.cards = datajson;
          });
        });
      }

      ngOnInit() {}

      getbandeira(cardnumber) {
        var cartoes = {
          'https://logodownload.org/wp-content/uploads/2016/10/visa-logo.png': /^4[0-9]{12}(?:[0-9]{3})/,
          'https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png': /^5[1-5][0-9]{14}/,
          'https://www.waterfront.co.za/wp-content/uploads/2018/05/amex.jpg': /^3[47][0-9]{13}/,
          'https://logodownload.org/wp-content/uploads/2016/10/Diners-Club-Logo-1.png': /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
          'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042018/untitled-2_3.png': /^6(?:011|5[0-9]{2})[0-9]{12}/,
          'JCB': /^(?:2131|1800|35\d{3})\d{11}/
        };

        function testarCC(number, cartoes) {
          for (var cartao in cartoes) if (number.match(cartoes[cartao])) return cartao;

          return false;
        }

        return testarCC(cardnumber, cartoes);
      }

      deletecard(id) {
        this.http.delete(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/pagamento?id=' + id, {}, {}).then(data => {
          this.alert_erro('SUCESSO', 'Seu cartão foi deletado', '' + data.data);
          this.http.get(new _config__WEBPACK_IMPORTED_MODULE_4__["Config"]().local_link_api + '/api/pagamento?de=' + this.myaccount['id'], {}, {}).then(data => {
            var datajson = JSON.parse(data.data);
            this.cards = JSON.parse(data.data);

            if (datajson == null) {
              this.itens = false;
            } else {
              this.itens = true;
            }
          });
        });
      }

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

      mudar() {
        if (this.new == true) {
          this.new = false;
        } else {
          this.new = true;
        }
      }

    };

    PagamentoPage.ctorParameters = () => [{
      type: ngx_xml2json__WEBPACK_IMPORTED_MODULE_5__["NgxXml2jsonService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
    }, {
      type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
    }];

    PagamentoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pagamento',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pagamento.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagamento/pagamento.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pagamento.page.scss */
      "./src/app/pagamento/pagamento.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_xml2json__WEBPACK_IMPORTED_MODULE_5__["NgxXml2jsonService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], PagamentoPage);
    /***/
  }
}]);
//# sourceMappingURL=pagamento-pagamento-module-es5.js.map