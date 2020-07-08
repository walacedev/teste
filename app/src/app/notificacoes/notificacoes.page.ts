import { Component, OnInit, NgZone } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from "../config";
@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage implements OnInit {
public notificacoes = []
public logado = false;


  constructor(private router: Router, private http: HTTP, private zone: NgZone, public navCtrl: NavController,
    public activerouter: ActivatedRoute, public alertCtrl: AlertController) {
      

    }

  ngOnInit() {
  }


  async ionViewWillEnter() {
    this.zone.run(() => {
      const dataz = JSON.parse(localStorage.getItem('cliente_data'));
      const data = JSON.parse(localStorage.getItem('cliente_data'));
      //this.alert_erro('Ops :(', 'Falta uma informação', '' + data);
      if (data == null) {
        this.logado = false;
        
      } else {
        this.logado = true;
      this.http.get(new Config().local_link_api + '/api/notificacoes?id=' + dataz['id'], [], {}).then((data) => {
        this.notificacoes = JSON.parse(data.data)
      })
    }
    })
  }


  routerlink_api(string){
    
     this.zone.run(async () => {
       await this.navCtrl.navigateForward(string);
     });
    
   
 }

}
