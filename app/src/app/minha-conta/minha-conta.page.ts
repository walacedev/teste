import { Component, OnInit, NgZone } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController, Platform } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { Config } from "../config";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx'



@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.page.html',
  styleUrls: ['./minha-conta.page.scss'],
})
export class MinhaContaPage implements OnInit {
  public logado;
  public buscando_cep = false;
  public loading;
  public myaccount;
  public bairros = [];
  public userdata = null
  //Strings login 
  public email_l;
  public senha_l;

  public data_s;

  //strings cadastro
  public endereco;
  public cep_s;
  public uf;
  public nome_s;
  public bairro_s;
  public complemento_s;
  public numero_s;
  public email_s;
  public senha_s;
  public tel_s;
  restaurante = []


  constructor(private http: HTTP, private router: Router, private zone: NgZone,
    public alertCtrl: AlertController, sanitizer: DomSanitizer, public navCtrl: NavController,
    public loadingController: LoadingController, public activerouter: ActivatedRoute, private push: Push,
    public fb: Facebook, public platform: Platform) {

    this.http.get(new Config().local_link_api + '/api/bairros', {}, {}).then((data) => {
      this.bairros = JSON.parse(data.data);
    });

    this.platform.backButton.subscribe(() => {
      this.routerlink_api('/conta');
    });

    const data = JSON.parse(localStorage.getItem('cliente_data'));
    //this.alert_erro('Ops :(', 'Falta uma informação', '' + data);
    if (data == null) {
      this.logado = false;
    } else {
      this.logado = true;
      this.myaccount = data
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

  async ionViewWillEnter() {
  }

  ngOnInit() {

  }

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


    var bodys =
    {
      "nome": this.nome_s,
      "email": this.email_s,
      "tel": this.tel_s,
      "senha": this.senha_s,
      "aniversario": this.data_s
    }
      ;

    this.http.setDataSerializer('json');
    this.http.post(new Config().local_link_api + '/api/atualizar', bodys, {}).then((data) => {
      this.alert_erro('SUCESSO', 'Dados salvos com sucesso.', '');
      var jsonobject = JSON.parse(data.data);
      localStorage.setItem('cliente_data', JSON.stringify(jsonobject));
      this.myaccount = JSON.parse(localStorage.getItem('cliente_data'));
    }).catch((err) => {

    });

  }

  routerlink_api(string) {
    this.zone.run(async () => {
      await this.navCtrl.navigateForward(string);
    });
  }



  sair() {
    this.logado = false
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
    this.http.get(new Config().local_link_api + '/api/login?email=' + this.email_l, {}, {}).then((data) => {
      var jsonobject = JSON.parse(data.data);
      if (this.email_l == jsonobject['email'] && this.senha_l == jsonobject['senha']) {
        setTimeout(() => {
          this.loading.dismiss();
          if(jsonobject['de'] != null){
            this.alert_erro('Ops :(', 'Login apenas para usuários', 'Faça login no site: https://tonascompras.com.br/painel');
            return;
          }
          localStorage.setItem('cliente_data', JSON.stringify(jsonobject));
          this.restaurante = JSON.parse(localStorage.getItem('restaurante'))
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




    }).catch((err) => {
      setTimeout(() => {
        this.loading.dismiss();
        this.errologin();
      }, 2000);
    });

  


    this.push.hasPermission()
      .then((res: any) => {

        
          const options: PushOptions = {
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
          }
          const pushObject: PushObject = this.push.init(options);

          pushObject.on('notification').subscribe((notification: any) => {

          });

          pushObject.on('registration').subscribe((registration: any) => {
            this.http.get(new Config().local_link_api + '/api/token?email=' + this.email_l + '&token=' + registration.registrationId, {}, {}).then((data) => {

            })
          });

          pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));


        

      });

  }



  cep() {
    this.carregando();
    setTimeout(() => {
      this.loading.dismiss();
    }, 10000);
    this.http.get('https://viacep.com.br/ws/' + this.cep_s + '/json/', {}, {}).then((data) => {
      var jsonobject = JSON.parse(data.data);
      if (jsonobject.uf != null) {
        setTimeout(() => {
          this.loading.dismiss();
          this.buscando_cep = true;
          this.endereco = jsonobject.logradouro + ", " + jsonobject.bairro;
          this.uf = jsonobject.localidade + "/" + jsonobject.uf
        }, 2000);

      } else {

        setTimeout(() => {
          this.loading.dismiss();
          this.alerterrorcep();
        }, 1000);
      }
    }).catch((err) => {
      setTimeout(() => {
        this.loading.dismiss();
      }, 2000);
    });
  }




  loginfacebook() {
    this.fb.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.carregando();
        this.userdata = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] }
        var bodys =
        {
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
        }
          ;
        this.http.setDataSerializer('json');
        this.http.post(new Config().local_link_api + '/api/login', bodys, {}).then((data) => {
          if (data.data.includes('USER_EXIST')) {
        this.http.get(new Config().local_link_api + '/api/login?email=' + profile['email'], {}, {}).then((data) => {
          var jsonobject = JSON.parse(data.data);  
          localStorage.setItem('cliente_data', JSON.stringify(jsonobject));
          this.restaurante = JSON.parse(localStorage.getItem('restaurante'))
          if (this.restaurante == null) {
            this.loading.dismiss();
            this.navCtrl.navigateRoot('/home');
          } else {
            this.loading.dismiss();
            this.navCtrl.navigateRoot('/pedido/' + this.restaurante['id']);
          }
        })
        return;
          } else {
            this.http.get(new Config().local_link_api + '/api/login?email=' + profile['email'], {}, {}).then((data) => {
              var jsonobject = JSON.parse(data.data);
              localStorage.setItem('cliente_data', JSON.stringify(jsonobject));
              this.loading.dismiss();
              this.alert_erro('SUCESSO', 'Conta criada com sucesso', 'Agora você precisa atualizar seus dados.');
              this.navCtrl.navigateRoot("/home");
            })
          }
        });
      });
    });
  }

  public recovery
  public email_r
  recuperar(){
    this.http.get(new Config().local_link_api + '/api/recovery?id=' + this.email_r, {}, {}).then((data) => {
       this.alert_erro('Recuperação de senha', data.data, '');
    }).catch((err) =>{
      this.alert_erro("erro", "", err.data)
    });
  }

  async carregando() {
    this.loading = await this.loadingController.create({
      message: 'Carregando'
    });
    await this.loading.present();
  }

  async remover_carregando() {
    this.loading.dismiss();
  }

  async alerterrorcep() {
    const alert = await this.alertCtrl.create({
      header: 'ERRO',
      subHeader: 'CEP não encontrado',
      message: 'O cep digitado não foi encontrado.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async errologin() {
    const alert = await this.alertCtrl.create({
      header: 'ERRO',
      subHeader: 'Login incorreto',
      message: 'Usuário ou senha estão incorretos',
      buttons: ['OK']
    });
    await alert.present();
  }

  async alert_erro(header, subheader, message) {
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: subheader,
      message: message,
      buttons: ['OK']
    });
    await alert.present();

  }



}
