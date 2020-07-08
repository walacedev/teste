import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController, NavController, LoadingController, Platform } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Config } from "../config";
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  public aa = "teste";
  public produto_name;
  public carrinho_boolean;
  public carrinho
  public total_carrinho = 0
  public error;
  produtos = [];
  public loading;
  public locais = []
  public local;
  public id;
  public link = new Config().local_link_img

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HTTP,
    private zone: NgZone,
    public alertCtrl: AlertController, sanitizer: DomSanitizer, public navCtrl: NavController,
    public loadingController: LoadingController, public platform: Platform
  ) {

     
  }

  img(img) {
    if (img == null) {
      return this.link + "none.png";
    } else {
      return this.link + "" + img 
    }
  }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.zone.run(async () => {
      this.platform.backButton.subscribe(() => {
        this.routerlink_api('/cardapio/' + this.id);
      });
      this.id = JSON.parse(localStorage.getItem('restaurante'))['id']
      this.total_carrinho = 0;
      const data = JSON.parse(localStorage.getItem('carrinho'));
      if (data == null) {
        this.carrinho_boolean = false;
      } else {
        this.carrinho_boolean = true;
  
        this.carrinho = data
  
        var product_ony = 0;
        this.carrinho.forEach(car => {
          product_ony = 0;
          product_ony = Number(product_ony) + Number(car['preco']);
          //this.total_carrinho = Number(this.total_carrinho) + Number(car['preco']);
          car['adicionais'].forEach(add => {
            //this.total_carrinho = Number(this.total_carrinho) + Number(add['preco']);
            product_ony = Number(product_ony) + Number(add['preco']);
          });
          product_ony = Number(car['quantidade']) * Number(product_ony);
          this.total_carrinho = Number(this.total_carrinho) + Number(product_ony);
  
        });
  
      }
      var id = this.router.url.replace('/produtos/', '');
      this.carregando();
      this.http.get(new Config().local_link_api + '/api/produtos/' + id + '/' + JSON.parse(localStorage.getItem('restaurante'))['id'], {}, {}).then((data) => {
        var datajson = JSON.parse(data.data);
        this.loading.dismiss();
        if (datajson.status == 204) {
          this.alert_erro()
          return false;
        }
        this.produtos = datajson;
  
      }).catch((err) => {
        this.loading.dismiss();
      });
    })
  }

  async carregando() {
    this.loading = await this.loadingController.create({
      message: 'Carregando'
    });
    await this.loading.present();
  }

  async alert_erro() {
    const alert = await this.alertCtrl.create({
      header: 'AVISO!',
      subHeader: 'Essa categoria esta vazia',
      message: '',
      buttons: [{
        text: 'Entendi!',
        handler: () => {
          this.navCtrl.back();
        }
      }]
    });
    await alert.present();
  }

  async alert_erroz(header, subheader, message) {
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: subheader,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  
  }
  precos(string){
    if (string == 0) {
      return "";
    }else{
      return 'R$ ' +string.replace('.', ',')
    }
  }
  routerlink_api(string){
    if(string == "/pedido"){
     this.http.get(new Config().local_link_api + '/api/version.json', {}, {}).then((data) => {
     var v = JSON.parse(data.data);
     {

       this.http.get(new Config().local_link_api + '/api/locais', {}, {}).then((data) => {
         this.locais = JSON.parse(data.data);
         this.locais.forEach(element => {
           if (element['id'] == this.local['id']) {
             if (element['status'] == "FECHADO" || element['status'] == null) {
               this.alert_erroz("AVISO!!", "Local fechado no momento", "Veja o horário de funcionamento em contato")
             }else{
               this.zone.run(async () => {
                 await this.navCtrl.navigateForward(string);
               });
             }
           }
         });
         }).catch((err) =>{
          
         });

     }
   }).catch((err) =>{
     
   });
    }else{
     this.zone.run(async () => {
       await this.navCtrl.navigateForward(string);
     });
    }
   
 }


  rout(id) {
    this.router.navigateByUrl('/produto/' + id);

  }

}
