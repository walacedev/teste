import { Component, OnInit, NgZone } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from "../config";
@Component({
  selector: 'app-avaliar',
  templateUrl: './avaliar.page.html',
  styleUrls: ['./avaliar.page.scss'],
})
export class AvaliarPage implements OnInit {
  public id;
  public qualidade;
  public rapidez;
  public avaliacao;
  public comentario;

  constructor(private router: Router, private http: HTTP, private zone: NgZone, public navCtrl: NavController,
    public activerouter: ActivatedRoute, public alertCtrl: AlertController, public platform: Platform) {
    this.id = this.router.url.replace('/avaliar/', '');
    this.platform.backButton.subscribe(() => {
      this.routerlink_api('/pedidos');
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
    const alert = await this.alertCtrl.create({
      header: 'Sua avaliação',
      subHeader: 'Qualidade: ' + this.qualidade,
      message: 'Entrega: ' + this.rapidez + "<br>Avaliação: " + this.avaliacao + "<br><br>Comentário: " + this.comentario,
      buttons: [
        {
          text: 'Alterar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Confirmar',

    /*
 'de' $de,
                                  'qualidade' $qualidade,
                                  'entrega' $entrega,
                                  'avaliação' $avaliacao,
                                  'texto' $texto,
                                  'restaurante' $restaurante
  */

          handler: (data) => {
const dataz = JSON.parse(localStorage.getItem('cliente_data'));
 var bodys = 
   {
    "qualidade": this.qualidade,
    "entrega": this.rapidez,
    "avaliacao": this.avaliacao,
    "texto": this.comentario,
    "de": dataz['id'],
    "restaurante": this.id
   }
  ;
  
  this.http.setDataSerializer('json');
    this.http.post(new Config().local_link_api + '/api/avaliacao', bodys, {}).then((data) => {
      this.alert_erro('SUCESSO', 'Sua avaliação foi registrada', '');
      this.navCtrl.navigateRoot("/home");
    })
          }
        }
      ]
    })
    await alert.present();
  }

  routerlink_api(string){
    this.zone.run(async () => {
      await this.navCtrl.navigateForward(string);
    });
  }
}
