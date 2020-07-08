import { Component, OnInit, NgZone } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from "../config";
@Component({
  selector: 'app-pedido-info',
  templateUrl: './pedido-info.page.html',
  styleUrls: ['./pedido-info.page.scss'],
})
export class PedidoInfoPage implements OnInit {
  public nome
  public email
  public assunto
  public msg
  public telefone

  constructor(private router: Router, private http: HTTP, private zone: NgZone, public navCtrl: NavController,
    public activerouter: ActivatedRoute, public alertCtrl: AlertController, public platform: Platform) {

      this.platform.backButton.subscribe(() => {
        this.routerlink_api('/conta');
      });
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

  async send() {
    var bodys =
    {
      "nome": this.nome,
      "email": this.email,
      "assunto": this.assunto,
      "msg": this.msg,
      "telefone": this.telefone
    }
      ;

    this.http.setDataSerializer('json');
    this.http.post(new Config().local_link_api + '/api/email', bodys, {}).then((data) => {
      this.alert_erro('SUCESSO', 'Seu contato foi enviado com sucesso', ""); 
      this.navCtrl.navigateRoot("/home");
    }).catch((err) => {
      this.alert_erro("erro", "", err)
    });
  }
  
  routerlink_api(string) {
    this.zone.run(async () => {
      await this.navCtrl.navigateForward(string);
    });
  }
}
