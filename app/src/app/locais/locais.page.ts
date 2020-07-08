import { Component, OnInit, NgZone } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Config } from "../config";
@Component({
  selector: 'app-locais',
  templateUrl: './locais.page.html',
  styleUrls: ['./locais.page.scss'],
})
export class LocaisPage implements OnInit {
 
  public locais = []
  public estados = []


  constructor(public alertCtrl: AlertController, private http: HTTP,private zone: NgZone, public navCtrl: NavController, public loadingController: LoadingController) { 
 
  
  
}

async ionViewWillEnter() {
  this.zone.run(() => {
    this.http.get(new Config().local_link_api + '/api/cidades', {}, {}).then((data) => {
      this.locais = JSON.parse(data.data);

    }).catch((err) =>{
      this.locais = []
      this.getitens()
    });

    this.http.get(new Config().local_link_api + '/api/estados', {}, {}).then((data) => {
      this.estados = JSON.parse(data.data);

    }).catch((err) =>{
      this.estados = []
      this.getitens()
    });
  })
  }


  getitens() {
    this.http.get(new Config().local_link_api + '/api/cidades', {}, {}).then((data) => {
      this.locais = JSON.parse(data.data);

    }).catch((err) =>{
      
    });

    this.http.get(new Config().local_link_api + '/api/estados', {}, {}).then((data) => {
      this.estados = JSON.parse(data.data);

    }).catch((err) =>{
      
    });
  }


  ngOnInit() {
  }

  get_estados(eid){
    var nome
    this.estados.forEach(e => {
      if (e['id'] == eid) {
       nome = e['nome']
      }
    });
    return nome
  }

  

  set(local){
    localStorage.setItem('local', JSON.stringify(local));
    this.navCtrl.navigateForward("/home");
  }
  
  routerlink_api(string){
    this.zone.run(async () => {
      await this.navCtrl.navigateForward(string);
    });
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
