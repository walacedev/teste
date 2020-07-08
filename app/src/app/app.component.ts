import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import { Config } from "./config";
export interface Item { id: string; name: string; }
export interface Produtos { id: string; name: string; descricao: string; preco: string; de: string }
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  items: Observable<Item[]>;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HTTP,
    public alertCtrl: AlertController
  ) {

      setInterval(() => {
	if (!navigator.onLine) {
        alertCtrl.dismiss();
        this.alert_erro('AVISO', 'O aparelho está sem conexão com a internet.', '');
    }
      }, 5000);
     

    
  
    /**
    this.addproduct("Pizza GG", "Pizza excelente com 12 pedaços", "50.00", "Pizza")
    this.addproduct("Pizza G", "Pizza excelente com 8 pedaços", "50.00", "Pizza")
    this.addproduct("Pizza P", "Pizza excelente com 4 pedaços", "50.00", "Pizza")
    */
    //console.log(this.items);
    this.initializeApp();

  }

  public onlineOffline: boolean = navigator.onLine;

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleLightContent();
      this.splashScreen.hide();

      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };
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
