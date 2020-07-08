import { Component, OnInit, NgZone } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController, LoadingController, AlertController, Platform } from '@ionic/angular';
import { Config } from "../config";
import { NgxXml2jsonService } from 'ngx-xml2json';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  public cards = []
  public number_s
  public date_s
  public code_s
  public name_s
  public cpf_s
  public new = false
  public myaccount;
  public logado;
  public itens = false

  constructor(private ngxXml2jsonService: NgxXml2jsonService,
    public alertCtrl: AlertController,
    private router: Router, private dataService: DataService,
    private http: HTTP,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    private zone: NgZone,
    public platform: Platform) { 

      const datauser = JSON.parse(localStorage.getItem('cliente_data'));
      this.platform.backButton.subscribe(() => {
        this.routerlink_api('/home');
      });
     
      if (datauser == null) {
        this.logado = false;
        this.navCtrl.navigateRoot('/minha-conta');
      } else {
        this.logado = true;
        this.myaccount = datauser
  
      }

      this.http.get(new Config().local_link_api + '/api/pagamento?de=' + this.myaccount['id'], {}, {}).then((data) => {
        var datajson = JSON.parse(data.data);
        this.cards = JSON.parse(data.data)

        if (datajson == null) {
          this.itens = false
        }else{   
          this.itens = true
        }
      })



    }

    get(){
      return JSON.stringify(this.cards)
    }  

    adicionar(){
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
   var bodys = 
   {
    "number": this.number_s,
    "date": this.date_s,
    "code": this.code_s,
    "name": this.name_s, 
    "cpf": this.cpf_s,
    "de": this.myaccount['id']
   } 
  ;
  
  this.http.setDataSerializer('json');
    this.http.post(new Config().local_link_api + '/api/pagamento', bodys, {}).then((data) => {
      this.alert_erro('SUCESSO', 'Seu cartão foi adicionado','');
      this.new = false;

      this.http.get(new Config().local_link_api + '/api/pagamento?de=' + this.myaccount['id'], {}, {}).then((data) => {
        var datajson = JSON.parse(data.data);
        this.cards = datajson
      })

    });
  }

  ngOnInit() {



  }

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

  return testarCC(cardnumber, cartoes)
}



deletecard(id){
  this.http.delete(new Config().local_link_api + '/api/pagamento?id=' + id, {}, {}).then((data) => {
    this.alert_erro('SUCESSO', 'Seu cartão foi deletado',''+data.data);
    this.http.get(new Config().local_link_api + '/api/pagamento?de=' + this.myaccount['id'], {}, {}).then((data) => {
      var datajson = JSON.parse(data.data);
      this.cards = JSON.parse(data.data)

      if (datajson == null) {
        this.itens = false
      }else{   
        this.itens = true  
      }
    })
  })
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



  routerlink_api(string){
    this.zone.run(async () => {
      await this.navCtrl.navigateForward(string);
    });
  }


  mudar(){
    if (this.new == true) {
      this.new = false
    }else{
      this.new = true
    }
  }
}
