import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController, NavController, AlertController, Platform } from '@ionic/angular';
import { Config } from "../config";

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})

export class CardapioPage implements OnInit {
  menuarray = [];
  menu = [];
  public abertura = ""
  public carregar;
  public destaque = null;
  public carrinho_boolean;
  public carrinho
  public total_carrinho = 0
  public teste = "a";
  public loading;
  public locais = []
  restaurante = []
  public local;
  public data;
  public link = new Config().local_link_img
  public segunda;
  public terca;
  public quarta;
  public quinta;
  public sexta;
  public sabado;
  public domingo;
  public feriado;
  public horarios = []
  public avaliacao = []
  public media
  public media_qualidade
  public media_entrega
  public quantidade = 0;
  public estrelas = 0

  constructor(
    private router: Router, private dataService: DataService,
    private http: HTTP, public loadingController: LoadingController,
    public navCtrl: NavController, private zone: NgZone,
    public alertCtrl: AlertController, public platform: Platform
  ) {
    var id = this.router.url.replace('/cardapio/', '');



    this.platform.backButton.subscribe(() => {
      this.routerlink_api('/home');
    });
  }

  limpar() {
    localStorage.clear();
  }

  routerlink_api(string) {
    if (string.match('pedido')) {
      if (this.restaurante['status'] != "ABERTO") {
        this.alert_erro('OPS :(', 'Estabelecimento fechado no momento', '');
      } else {
        this.zone.run(async () => {
          await this.navCtrl.navigateForward(string);
        });
      }
    } else {
      this.zone.run(async () => {
        await this.navCtrl.navigateForward(string);
      });
    }

  }


  rout(id, nome) {
    var data = JSON.parse(localStorage.getItem('cliente_data'));
    if(data == null){
      this.navCtrl.navigateRoot('/minha-conta');
      return;
    }
    if (this.restaurante['status'] != "ABERTO") {
      this.alert_erro('OPS :(', 'Estabelecimento fechado no momento', '');
      return;
    }
    this.navCtrl.navigateRoot('/produtos/' + id)
    

  }

  checkstring(string: String) {
    if (string == "Burgers" || string == "Combo de Burgers" || string == "Bebidas") {
      return "white"
    } else {
      return "white";
    }
  }

  img(img) {
    if (img == null || img == "") {
      return this.link + "none.png";
    } else {
      return this.link + "" + img
    }
  }

  async ionViewWillEnter() {
    this.zone.run(async () => {
      this.carregar = true
      var id = this.router.url.replace('/cardapio/', '');

      this.http.get(new Config().local_link_api + '/api/avaliacao?id=' + id, {}, {}).then((data) => {
        this.avaliacao = JSON.parse(data.data)



        {
          var cinco = 0;
          var quatro = 0;
          var tres = 0;
          var dois = 0;
          var um = 0;
          var vezes = 0;
          var soma = 0;
          JSON.parse(data.data).forEach(element => {
            this.quantidade++;
            if (element['avaliacao']['avaliacao'] == "5") {
              cinco++;
            }
            if (element['avaliacao']['avaliacao'] == "4") {
              quatro++;
            }
            if (element['avaliacao']['avaliacao'] == "3") {
              tres++;
            }
            if (element['avaliacao']['avaliacao'] == "2") {
              dois++;
            }
            if (element['avaliacao']['avaliacao'] == "1") {
              um++;
            }
            vezes = vezes * element['avaliacao']['avaliacao']
            soma = soma + element['avaliacao']['avaliacao']
          });

          vezes = 5 * cinco + 4 * quatro + 3 * tres + 2 * dois + 1 * 1;
          soma = cinco + quatro + tres + dois + um;
          var res = vezes / soma
          this.media = parseFloat(res.toFixed(2))
        }
        //QUALIDADE
        {
          var cinco = 0;
          var quatro = 0;
          var tres = 0;
          var dois = 0;
          var um = 0;
          var vezes = 0;
          var soma = 0;
          JSON.parse(data.data).forEach(element => {
            
            if (element['avaliacao']['qualidade'] == "5") {
              cinco++;
            }
            if (element['avaliacao']['qualidade'] == "4") {
              quatro++;
            }
            if (element['avaliacao']['qualidade'] == "3") {
              tres++;
            }
            if (element['avaliacao']['qualidade'] == "2") {
              dois++;
            }
            if (element['avaliacao']['qualidade'] == "1") {
              um++;
            }
            vezes = vezes * element['avaliacao']['qualidade']
            soma = soma + element['avaliacao']['qualidade']
          });

          vezes = 5 * cinco + 4 * quatro + 3 * tres + 2 * dois + 1 * 1;
          soma = cinco + quatro + tres + dois + um;
          var res = vezes / soma
          this.media_qualidade = parseFloat(res.toFixed(2))
        }
        //ENTREGA
        {
          var cinco = 0;
          var quatro = 0;
          var tres = 0;
          var dois = 0;
          var um = 0;
          var vezes = 0;
          var soma = 0;
          JSON.parse(data.data).forEach(element => {
            if (element['avaliacao']['entrega'] == "5") {
              cinco++;
            }
            if (element['avaliacao']['entrega'] == "4") {
              quatro++;
            }
            if (element['avaliacao']['entrega'] == "3") {
              tres++;
            }
            if (element['avaliacao']['entrega'] == "2") {
              dois++;
            }
            if (element['avaliacao']['entrega'] == "1") {
              um++;
            }
            vezes = vezes * element['avaliacao']['entrega']
            soma = soma + element['avaliacao']['entrega']
          });

          vezes = 5 * cinco + 4 * quatro + 3 * tres + 2 * dois + 1 * 1;
          soma = cinco + quatro + tres + dois + um;
          var res = vezes / soma
          this.media_entrega = parseFloat(res.toFixed(2))
        }


      })






      this.http.get(new Config().local_link_api + '/api/horario?id=' + id, {}, {}).then((dataa) => {
        var jsonobject = JSON.parse(dataa.data);
        localStorage.setItem('horario', JSON.stringify(jsonobject));

        var semana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
        var d = new Date();
        if (jsonobject[semana[d.getDay()]] == "NA") {
          this.data = "Não funciona hoje"
        } else {
          this.data = "Aberto de " + JSON.parse(jsonobject[semana[d.getDay()]])['de'] + " até " + JSON.parse(jsonobject[semana[d.getDay()]])['ate']
        }

        if (this.restaurante['status'] != "ABERTO") {
          this.data = "Fechado no momento";
        }
        //this.data = semana[d.getDay()]  
      })
      this.restaurante = JSON.parse(localStorage.getItem('restaurante'))
      this.menuarray = [];
      this.menu = [];
      //this.destaque = JSON.parse(localStorage.getItem('destaque'))
      var id = this.router.url.replace('/cardapio/', '')
      this.http.get(new Config().local_link_api + '/api/cardapio?id=' + id, {}, {}).then((data) => {
        this.local = JSON.parse(localStorage.getItem('local'))
        this.carregar = false
        this.menuarray = JSON.parse(data.data).filter(function (a) {
          return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
        }, Object.create(null)) 
        this.menuarray.forEach(e => {
          this.menu.push(e)
        });
       

      }).catch((err) => {

       
      });
      this.total_carrinho = 0;
      const data = JSON.parse(localStorage.getItem('carrinho'));
      if (data == null) {
        this.carrinho_boolean = false;
      } else {
        this.carrinho_boolean = true;

        this.carrinho = data



        var product_ony = 0;
        var prices = []
        this.carrinho.forEach(car => {
          if (car['restaurante'] == id) {
            product_ony = 0;
            product_ony = Number(product_ony) + Number(car['preco']);
            //this.total_carrinho = Number(this.total_carrinho) + Number(car['preco']);
            car['adicionais'].forEach(add => {
              //this.total_carrinho = Number(this.total_carrinho) + Number(add['preco']);
              var ftotal = Number(add['preco']) * add['quantidade']
              product_ony = Number(product_ony) + Number(ftotal)
            });
            
            car['adicionais_prev'].forEach(add => {
              var ftotal = Number(add['preco']) * add['quantidade']
              prices.push(ftotal)
              
            });

            car['adicionais_gratis'].forEach(add => {
              var ftotal = Number(add['preco']) * add['quantidade']
              product_ony = Number(product_ony) + Number(ftotal)
            });

            if (prices.length != 0) {
              product_ony = Number(product_ony) + Number(Math.max(...prices))
            }


            product_ony = Number(car['quantidade']) * Number(product_ony);
            this.total_carrinho = Number(this.total_carrinho) + Number(product_ony);
          }
        });






      }
      this.http.get(new Config().local_link_api + '/api/cardapio?id=ALL', {}, {}).then((data) => {
        this.categorias = JSON.parse(data.data);
      }).catch((err) => {
        //this.alert_erro("erro", "", err)
      });
      var id = this.router.url.replace('/cardapio/', '')
    });
  }

  ngOnInit() {

  }

  total(int){
    return int.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  showitens(){

  }

  async carregando() {
    this.loading = await this.loadingController.create({
      message: 'Carregando'
    });
    await this.loading.present();
  }



  horario() {



  }

  limpaValoresRepetidos(array){
    for(let i in array){ 
        let valorComparado = array[i]    
        let cont = 0         //contador de incidencia de repeticao, seu valor deve ser 1
        for(let i in array){
            if(valorComparado === array[i]){
                cont +=1
                if(cont > 1){
                    cont --
                    delete array[i]
                }
            }
        }
    }
    return array
}

  public sobre = false;
  public avalicoes = false;
  public cardapio = true;

  sobre_s() {
    this.sobre = true;
    this.avalicoes = false;
    this.cardapio = false;
  }
  avaliacoes_s() {
    this.sobre = false;
    this.avalicoes = true;
    this.cardapio = false;
  }
  cardapio_s() {
    this.sobre = false;
    this.avalicoes = false;
    this.cardapio = true;
  }

  public categorias = []
  get_categoria(eid){
    var nome
    this.categorias.forEach(e => {
      if (e['id'] == eid) {
       nome = e['nome']
      }
    });
    return nome
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

  getnumber(int) {
    return Math.round(int)
  }

  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }

}
