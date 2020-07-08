import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { AlertController, NavController, Events, LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HTTP } from '@ionic-native/http/ngx';
import { ViewController } from '@ionic/core';
import { interval } from 'rxjs';

import { Config } from "../config";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})

export class PedidosPage implements OnInit {
  public status = "";
  public menuarray = []
  public myaccount;
  public loading;
  public pedidos = []
  public restaurantes = []
  public atual = [];
  public atual_b = false;
  public logado
  public admin = false
  public tel_cancelamento = new Config().tel_cancelamento
public cats = []
  constructor(
    private ngxXml2jsonService: NgxXml2jsonService,
    public alertCtrl: AlertController,
    private router: Router, private dataService: DataService,
    private http: HTTP,
    public navCtrl: NavController,
    public events: Events,
    private zone: NgZone,
    public platform: Platform,
    public loadingController: LoadingController
  ) {
    this.http.get(new Config().local_link_api + '/api/categorias', {}, {}).then((data) => {
      var datajson = JSON.parse(data.data);
      this.cats = datajson
    })

    if(this.atual_b == true){
      this.platform.backButton.subscribe(() => {
        this.atual_b = false
      });
    }
  
  }

  ngOnInit() {

 
  }
 
  changepedido($event, id){
    var status = $event.target.value
    this.http.get(new Config().local_link_api + '/api/change?id=' + id + "&status=" + status, {}, {}).then((data) => {
      this.menuarray = []
      this.pedidos = []
      this.restaurantes = []
      this.get_pedidos();
    })
  }


  
  get_categoria(eid){
    var nome
    this.cats.forEach(e => {
      if (e['id'] == eid) {
       nome = e['nome']
      }
    });
    return nome
  }

  


  cancelar(restaurante){
    this.http.get(new Config().local_link_api + '/api/horario?id=' + restaurante, {}, {}).then((data) => {
      if (JSON.parse(data.data)['telefone'] == null || JSON.parse(data.data)['telefone'] == "") {
        this.alert_erro('Ops :(', 'O estabelecimento ainda não definiu um número', '');
        return
      }
      window.open('tel:' + JSON.parse(data.data)['telefone'], '_system') 
    })
   
  }

  public enderecos = []
  get_endereco(id, string){
    var s
    this.http.get(new Config().local_link_api + '/api/enderecos?id=' + this.myaccount['id'], {}, {}).then((data) => {
      this.enderecos = JSON.parse(data.data)
    })
    this.enderecos.forEach(e => {
      if(e['id'] == id){
        s = e[string]
      }
    });
    return s;
  }

  public bairros = []
  get_bairros(id){
    var s
    this.http.get(new Config().local_link_api + '/api/bairros', {}, {}).then((data) => {
      this.bairros = JSON.parse(data.data);
    });
    this.bairros.forEach(e => {
      if(e['id'] == id){
        s = e['nome']
      }
    });
    return s;
  }

  public cidades = []
  get_cidades(id){
    var s
    this.http.get(new Config().local_link_api + '/api/cidades', {}, {}).then((data) => {
      this.cidades = JSON.parse(data.data);
    });
    this.cidades.forEach(e => {
      if(e['id'] == id){
        s = e['nome']
      }
    });
    return s;
  }


  async carregando() {
    this.loading = await this.loadingController.create({
      message: 'Carregando'
    });
    await this.loading.present();
  }

  async ionViewWillEnter() {
    this.zone.run(() => {
    
        this.get_pedidos();
  
    });

  }

  get_pedidos(){
    
    const data = JSON.parse(localStorage.getItem('cliente_data'));
    //this.alert_erro('Ops :(', 'Falta uma informação', '' + data);
    if (data == null) {
      this.logado = false;
      
    } else {
      this.logado = true;
      this.zone.run(() => {
        this.carregando();
        const datauser = JSON.parse(localStorage.getItem('cliente_data'));
        this.myaccount = datauser
        if (this.myaccount['de'] == null || this.myaccount['de'] == "") {
          this.admin = false; 
        }else{ 
          this.admin = true
        }
    
        this.http.get(new Config().local_link_api + '/api/restaurante', {}, {}).then((data) => {
          this.restaurantes = JSON.parse(data.data);
    
        })

        this.http.get(new Config().local_link_api + '/api/pedidos?de=' + this.myaccount['id'], {}, {}).then((data) => {
          this.menuarray = JSON.parse(data.data);
          this.loading.dismiss();
        }).catch((err) => {
          this.loading.dismiss(); 
        });
        
        setInterval(() => {
          this.http.get(new Config().local_link_api + '/api/pedidos?de=' + this.myaccount['id'], {}, {}).then((data) => {
            this.menuarray = []
            this.menuarray = JSON.parse(data.data);
            this.loading.dismiss();
          }).catch((err) => {
            this.loading.dismiss(); 
          });
        }, 15000);
      
        this.pedidos = JSON.parse(localStorage.getItem('carrinho'))
        
      });
    
  
    }
  }

  avaliar(status, id){
    if (status != "success") {
      this.alert_erro('Ops :(', 'Você não pode avaliar agora', 'Apenas quando o pedido for entregue.');
    }else{
      this.routerlink_api('/avaliar/' + id);
    }
  }


  restaurante(id, string){
    var ss = "";
    this.restaurantes.forEach(user => {
      if (id == user['id']) {
        ss = user[string]
      }
    });
    return ss;
  }


  pedido(id) {
    this.atual_b = true;
    this.menuarray.forEach(e => {
      if (e['id'] == id) {
        this.atual.push(e);
      }
    });
  }

  routerlink_api(string) {
    this.zone.run(async () => {
      await this.navCtrl.navigateBack(string);
    });
  }


  getjson(data) {
    return JSON.parse(data)
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
