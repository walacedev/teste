import { Component, OnInit, NgZone } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Config } from "../config";

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.page.html',
  styleUrls: ['./enderecos.page.scss'],
})
export class EnderecosPage implements OnInit {
 
  public locais = []
  public enderecos = []
  public bairros = []
  public cidades = []
  public criar = false;

  public rua_s
  public numero_s
  public complemento_s
  public cidade_s
  public bairro_s

  public id_restaurante = []



  constructor(public alertCtrl: AlertController, private http: HTTP,private zone: NgZone, public navCtrl: NavController, public loadingController: LoadingController) { 
    const datauser = JSON.parse(localStorage.getItem('cliente_data'));
    this.id_restaurante = JSON.parse(localStorage.getItem('restaurante'));
    this.http.get(new Config().local_link_api + '/api/enderecos?id=' + datauser['id'], {}, {}).then((data) => {
      this.enderecos = JSON.parse(data.data);
    })

    this.http.get(new Config().local_link_api + '/api/bairros', {}, {}).then((data) => {
      this.bairros = JSON.parse(data.data);
    });
    
    this.http.get(new Config().local_link_api + '/api/cidades', {}, {}).then((data) => {
      this.cidades = JSON.parse(data.data);
    });
  
}

betbairros(){
  var array = []
  this.bairros.forEach(b => {
    if (b['cidade'] == this.cidade_s) {
      array.push(b)
    }
  });
  return array
}

delete(id){
  var datauser = JSON.parse(localStorage.getItem('cliente_data'));
  this.http.delete(new Config().local_link_api + '/api/enderecos?id=' + id, {}, {}).then((data) => {
    this.alert_erro('Pronto', 'Seu endereço foi excluído', '');
    this.enderecos = []
    this.http.get(new Config().local_link_api + '/api/enderecos?id=' + datauser['id'], {}, {}).then((data) => {
     this.enderecos = JSON.parse(data.data);
   })
  });
}

save(){
  var datauser = JSON.parse(localStorage.getItem('cliente_data'));
  var bodys = 
  {
    "endereco": this.rua_s,
    "numero": this.numero_s,
    "complemento": this.complemento_s,
    "de": datauser['id'],
    "cidade": this.cidade_s,
    "bairro": this.bairro_s
  }
 ;
 
 this.http.setDataSerializer('json');
   this.http.post(new Config().local_link_api + '/api/enderecos', bodys, {}).then((data) => {
     this.alert_erro('Ebaa', 'Tudo certinho', 'Seu endereço foi cadastrado com sucesso.');
     this.criar = false;
  
     this.enderecos = []
     this.http.get(new Config().local_link_api + '/api/enderecos?id=' + datauser['id'], {}, {}).then((data) => {
      this.enderecos = JSON.parse(data.data);
    })

 }).catch((err) =>{

 });

}

  ngOnInit() {
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

  getbairro(id){
    var nome;
   this.bairros.forEach(b => {
     if (b['id'] == id) {
       nome = b['nome']
     }
   });
   return nome;
  }

}
