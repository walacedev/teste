import { Component, OnInit, NgZone } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, NavController, LoadingController, Platform } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Config } from "../config";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],  
})
export class CadastroPage implements OnInit {
//strings cadastro
public bairros = [];
public cidades = [];
public endereco;
public cep_s;
public uf;
public nome_s;
public bairro_s;
public complemento_s;
public numero_s;
public data_s;
public email_s;
public senha_s;
public tel_s;
  constructor(private http: HTTP, private router : Router, public platform: Platform,
    public alertCtrl: AlertController, sanitizer: DomSanitizer, public navCtrl: NavController,
     public loadingController: LoadingController, public activerouter: ActivatedRoute, private zone: NgZone) {
      this.platform.backButton.subscribe(() => {
        this.routerlink_api('/minha-conta');
      });

      this.http.get(new Config().local_link_api + '/api/bairros', {}, {}).then((data) => {
        this.bairros = JSON.parse(data.data);
     });

     this.http.get(new Config().local_link_api + '/api/cidades', {}, {}).then((dataz) => {
      this.cidades = JSON.parse(dataz.data);
   });

      }


  routerlink_api(string){
    this.zone.run(async () => {
      await this.navCtrl.navigateForward(string);
    });
  }

  ngOnInit() {
  }


   ValidateEmail() 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email_s))
    {
      return true
    }
      return false
  }


  cadastro(){


    if(this.nome_s == null){
      this.alert_erro('Ops :(', 'Falta uma informação', 'Digite o seu nome');
      return;
    }if(this.tel_s == null){
      this.alert_erro('Ops :(', 'Falta uma informação', 'Digite o seu telefone');
      return;
    }
 
    if(this.ValidateEmail()  == false){
      this.alert_erro('Ops :(', 'E-mail incorreto', '');
      return;
    }


    if(this.senha_s == null){
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
    "aniversario": this.data_s,
    "email": this.email_s,
    "tel": this.tel_s,
    "senha": this.senha_s
   }
  ;
  
  this.http.setDataSerializer('json');
    this.http.post(new Config().local_link_api + '/api/login', bodys, {}).then((data) => {
    if(data.data.includes('USER_EXIST')){
      this.alert_erro('Ops :(', 'Esse e-mail ja foi cadastrado', 'Tente novamente :D');
      return;
    }else{
      this.alert_erro('Ebaa', 'Tudo certo', 'Vamos comprar');
      this.http.get(new Config().local_link_api + '/api/login?email=' + this.email_s, {}, {}).then((data) => {
        var jsonobject = JSON.parse(data.data);
            localStorage.setItem('cliente_data', JSON.stringify(jsonobject));
            this.navCtrl.navigateRoot("/home");
      })
    }

  }).catch((err) =>{
 
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
