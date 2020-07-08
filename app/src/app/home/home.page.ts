import { Component, NgZone } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Config } from "../config";
import { HTTP } from '@ionic-native/http/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public local_name = new Config().local_name
  public email_sugestao = new Config().email_sugestao
  public item = []
  public locais = [];
  public local;
  public restaurantes = [];
  public procurar_s = null
  public show = false
  public horario;
  public segunda;
  public terca;
  public quarta;
  public erro_cidade;
  public quinta;
  public sexta;
  public sabado;
  public domingo;
  public feriado;
  public horarios = []
  public final = []
  public categorias = []
  public logado;
  public lido = false;
  public link = new Config().local_link_img

  public carregando;
  constructor(private localNotifications: LocalNotifications, private http: HTTP, private zone: NgZone, public navCtrl: NavController, public activerouter: ActivatedRoute, public alertCtrl: AlertController) {

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
 

  async ionViewWillEnter() {
    this.zone.run(() => {

      this.localNotifications.hasPermission()
        .then((res: any) => {
          if (res.isEnabled) {
            console.log('We have permission to send push notifications');
          } else {
            console.log('We do not have permission to send push notifications');
          }

        });
        this.http.get(new Config().local_link_api + '/api/cardapio?id=ALL', {}, {}).then((data) => {
          this.categorias = JSON.parse(data.data);
        }).catch((err) => {
          //this.alert_erro("erro", "", err)
        });
      this.erro_cidade = false
      this.restaurantes = []
      this.carregando = true;

      if (localStorage.getItem('local') == null) {
        this.routerlink_api('/locais');
      } else {
        this.local = JSON.parse(localStorage.getItem('local'))

      }
      localStorage.removeItem("restaurante")
      const data = JSON.parse(localStorage.getItem('cliente_data'));
      //this.alert_erro('Ops :(', 'Falta uma informação', '' + data);
      if (data == null) {
        this.logado = false;
      } else {

        if (data['tel'] == "") {
          this.alert_erro("OPS :(", "", "Você precisa atualizar seus dados")
          this.navCtrl.navigateRoot("/minha-conta");
        }
        this.logado = true;
      }

      if (localStorage.getItem('local') == null) {
        this.http.get(new Config().local_link_api + '/api/restaurante?cidade=1', {}, {}).then((data) => {
          this.restaurantes = JSON.parse(data.data);
          this.carregando = false;
          this.show =true

        }).catch((err) => {
          //this.alert_erro("erro", "", err)
        });
      } else {
        this.http.get(new Config().local_link_api + '/api/restaurante?cidade=' + JSON.parse(localStorage.getItem('local'))['id'], {}, {}).then((data) => {
          if (data.data.includes('ERRO_CIDADE')) {
            this.erro_cidade = true
          } else {
            this.restaurantes = JSON.parse(data.data);
          }
          this.show =true

          this.carregando = false;

        }).catch((err) => {
          //this.alert_erro("erro", "", err)
        });
      }
    });

  }


  ngOnInit() {
  }

  procurar_array(){
    var array = []
    this.restaurantes.forEach(e => {
      if (e['nome'].toLowerCase().includes(this.procurar_s.toLowerCase())) {
        array.push(e)
      }
    });
    return array
  }

  tipo_entrega(id) {
    if (id == 1) {
      return "Balcão"
    } else if (id == 2) {
      return "Entrega"
    } else if (id == 3) {
      return "Entrega e Balcão"
    }
  }

  reload() {
    this.show = false
    this.carregando = true;
    this.restaurantes = []
    localStorage.removeItem("restaurante")
    const data = JSON.parse(localStorage.getItem('cliente_data'));
    //this.alert_erro('Ops :(', 'Falta uma informação', '' + data);
    if (data == null) {
      this.logado = false;
    } else {
      this.logado = true;
    }
    if (localStorage.getItem('local') == null) {
      this.http.get(new Config().local_link_api + '/api/restaurante?cidade=1', {}, {}).then((data) => {
        this.restaurantes = JSON.parse(data.data);
        this.carregando = false;
        this.show = true
      }).catch((err) => {
        //this.alert_erro("erro", "", err)
      });
    } else {
      this.http.get(new Config().local_link_api + '/api/restaurante?cidade=' + JSON.parse(localStorage.getItem('local'))['id'], {}, {}).then((data) => {
        if (data.data.includes('ERRO_CIDADE')) {
          this.erro_cidade = true
        } else {
          this.restaurantes = JSON.parse(data.data);
        }
this.show = true
        this.carregando = false;

      }).catch((err) => {
        //this.alert_erro("erro", "", err)
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
  async alert_erro(header, subheader, message) {
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: subheader,
      message: message,
      buttons: ['OK']
    });
    await alert.present();

  }

  img(img) {
    if (img == null || img == "") {
      return this.link + "none.png";
    } else {
      return this.link + "" + img
    }
  }

  rout(string) {
    const datauser = JSON.parse(localStorage.getItem('cliente_data'));
      this.restaurantes.forEach(e => {
        if (string == e['id']) {
          localStorage.setItem('restaurante', JSON.stringify(e));
          if (datauser != null) {
          this.http.get(new Config().local_link_api + '/api/visita?restaurante=' + e['id'] + '&de=' + datauser['id'], {}, {}).then((data) => {
          }).catch((err) => {
            //this.alert_erro("erro", "", err)
          });
         } 
        }
      });
    
   
    this.zone.run(async () => {
      await this.navCtrl.navigateForward('/cardapio/' + string);
    });
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
      this.http.get(new Config().local_link_api + '/api/version.json', {}, {}).then((data) => {
        var v = JSON.parse(data.data);
        {

          this.http.get(new Config().local_link_api + '/api/locais', {}, {}).then((data) => {
            this.locais = JSON.parse(data.data);
            this.locais.forEach(element => {
              if (element['id'] == this.local['id']) {
                if (element['status'] == "FECHADO" || element['status'] == null) {
                  this.alert_erro("AVISO!!", "Local fechado no momento", "Veja o horário de funcionamento em contato")
                } else {
                  this.zone.run(async () => {
                    await this.navCtrl.navigateForward(string);
                  });
                }
              }
            });
          }).catch((err) => {

          });

        }
      }).catch((err) => {

      });
    } else {
      this.zone.run(async () => {
        await this.navCtrl.navigateForward(string);
      });
    }

  }
  get_categoria(eid){
    var nome
    this.categorias.forEach(e => {
      if (e['id'] == eid) {
       nome = e['nome']
      }
    });
    return nome
  }
}
