import { Component, OnInit, NgZone } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Config } from "../config";
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {
  public logado = false
  public myaccount;
  public de = "";
  public admin = false;
  public restaurantes = [];
  public status = false;
  public email_sugestao = new Config().email_sugestao

  constructor(private http: HTTP, private zone: NgZone, public navCtrl: NavController,
    public activerouter: ActivatedRoute, public alertCtrl: AlertController, public socialSharing: SocialSharing) {
    const data = JSON.parse(localStorage.getItem('cliente_data'));
    const datauser = JSON.parse(localStorage.getItem('cliente_data'));

  

    //this.alert_erro('Ops :(', 'Falta uma informação', '' + data);
    if (data == null) {
      this.logado = false;
    } else {

      this.myaccount = datauser
      
      this.http.get(new Config().local_link_api + '/api/restaurante?id='+this.myaccount['restaurante'], {}, {}).then((data) => {
        this.restaurantes = JSON.parse(data.data);
        if (JSON.parse(data.data)[0]['status'] != "ABERTO") {
          this.status = false;
        }else{
          this.status = true 
        }
    
        }).catch((err) => {
          //this.alert_erro("erro", "", err)
        });
        

      if (this.myaccount['de'] == null || this.myaccount['de'] == "") {
        this.admin = false;
      } else {
        this.admin = true
      }
      this.logado = true;
    }
  }

  share(){
    this.http.get(new Config().local_link_api + '/api/config', {}, {}).then((data) => {
      JSON.parse(data.data).forEach(e => {
        if (e['nome'] == "share-android") {
          this.socialSharing.share(e['valor'].split("{linha}").join('\n'))
        }
      });
    })
    
  }

  statuschange(stats){
    if (stats == "ON") {
      this.http.get(new Config().local_link_api + '/api/status?status=ABERTO&id=' + this.myaccount['restaurante'], {}, {}).then((data) => {
      })
    }else{
      this.http.get(new Config().local_link_api + '/api/status?status=FECHADO&id=' + this.myaccount['restaurante'], {}, {}).then((data) => {
      })
    }
  }

  sendmail(){
    window.open('mailto:' + this.email_sugestao, '_system');
  }
  ngOnInit() {


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

  sair() {
    this.logado = false
    localStorage.removeItem('cliente_data');
    this.navCtrl.navigateRoot('/home');
  }

  routerlink_api(string) {
    {
      this.zone.run(async () => {
        await this.navCtrl.navigateForward(string);
      });
    }

  }

}

