import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Config } from "../config";


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  menuarray = [];
  public produtos = []
  public cupomarray
  public adicionais = []
  public total_carrinho = 0
  public endereco_s
  public teste = "a";
  public buscar_s
  public logado;
  public myaccount;
  public bairros = [];
  public pagamentos = []
  public frete = 0;
  public restaurante = []
  public new_address = false
  public id
  public cupom_s;
  public endereco;
  public cep_s;
  public uf;
  public bairro_s;
  public complemento_s;
  public numero_s;
  public estado;
  public frete_status = false;
  public cats = []
  public admin = false;
  public enderecos;
  public arry = []
  public obs_s;
  public loading;
  public cidades
  public desccupom

  public array_cpmplementos = []

  constructor(
    private ngxXml2jsonService: NgxXml2jsonService,
    public alertCtrl: AlertController,
    private router: Router, private dataService: DataService,
    private http: HTTP,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    private iab: InAppBrowser,
    private zone: NgZone
  ) {

    
  }









  get_categoria(eid) {
    var nome
    this.cats.forEach(e => {
      if (e['id'] == eid) {
        nome = e['nome']
        this.arry.push(e['nome'])
      }
    });
    return this.arry

  }
  precos(string) {
    if (string == 0) {
      return "";
    } else {
      return Number(string).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    }
  }


  public pedir_s;
  public all_products = []
  public erros = false
  public produtos_string = []



  getestoque(){
    this.produtos_string = [];
    this.produtos.forEach(produto => {
      this.http.get(new Config().local_link_api + '/api/produto/' + produto['id'], {}, {}).then((data) => {
        var dat = JSON.parse(data.data);
        if(dat[0]['estoque'] <= 0){
          this.produtos_string.push(dat[0]['nome'])
        }
      });
    });
  }


 public processando = false;
  pedir() {

   
    if(this.produtos_string.length > 0){
      this.alert_OPS('Ops :(', 'O(s) produto(s): ' + this.produtos_string + ", não estão mais disponíveis para compra.", "Retire esse(s) produto(s)");
      return
    } 
  

    if (this.total_carrinho == null || this.total_carrinho == 0) {
      this.alert_OPS('Ops :(', 'Seu carrinho está vázio', "");
      return;
    }
    if (this.buscar_s == null) {
      this.alert_OPS('Ops :(', 'Escolha como deseja receber', "");
      return;
    }
    if (this.frete_status == false && this.buscar_s == "casa") {
      this.alert_OPS('Ops :(', 'Escolha um endereço correto para entrega', "");
      return;
    }
    if (this.pedir_s == null) {
      this.alert_OPS('Ops :(', 'Escolha um método de pagamento', "");
      return;
    }

    if (this.pedir_s == 'dinheiro') {
      this.entrega()
    }else if(this.pedir_s == 'cartao'){
      this.entrega_cartao()
    }else if(this.pedir_s != 'dinheiro' && this.pedir_s != 'cartao'){
      this.online(this.pedir_s)
    }
  
    

  }




  set_bairro() {


  }




  public horario = "";
  gethorario() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var str_data = dia + '/' + (mes + 1) + '/' + ano;
    var str_hora = hora + ':' + minutos;

    this.horario = str_data + ' as ' + str_hora;
  }


  cupom() {
    this.http.get(new Config().local_link_api + '/api/cupom?id=' + this.cupom_s, {}, {}).then((datas) => {
      if (datas.data == "OPS") {
        this.alert_OPS('OPS', 'Esse cupom não existe', "");
        this.desccupom = "";
      } else {
        var cup = JSON.parse(datas.data);
        this.cupomarray = JSON.parse(datas.data);
        if (this.total_carrinho < cup['minimo']) {
          this.alert_OPS('Ops :(', 'Esse cupom vale para pedidos maiores que R$' + cup['minimo'], '');
          return;
        }
        if (cup['tipo'] == "FRETE_GRATIS") {
          this.alert_OPS('SUCESSO', 'Você adicionou o cupom ' + this.cupom_s, 'Esse cupom oferece frete grátis.');
          this.desccupom = 'Esse cupom oferece frete grátis.';
        } else if (cup['tipo'] == "PORCENTAGEM") {
          this.alert_OPS('SUCESSO', 'Você adicionou o cupom ' + this.cupom_s, 'Esse cupom oferece ' + cup['desconto'].replace('%', '') + '% de desconto.');
          this.desccupom = 'Esse cupom oferece ' + cup['desconto'].replace('%', '') + '% de desconto.';
        } else if (cup['tipo'] == "TOTAL") {
          this.alert_OPS('SUCESSO', 'Você adicionou o cupom ' + this.cupom_s, 'Esse cupom oferece ' + cup['desconto'].replace('%', '') + 'R$ de desconto.');
          this.desccupom = 'Esse cupom oferece ' + cup['desconto'].replace('%', '') + 'R$ de desconto.';
        }
      }
      this.setcupom();

    })
  }

  cancelchange() {
    this.restaurante = JSON.parse(localStorage.getItem('restaurante'))
    var fretamento = JSON.parse(this.restaurante['fretes'])

    for (let frete in fretamento) {
      this.frete = Number(fretamento[this.myaccount['bairro']])
    }

    if (fretamento[this.myaccount['bairro']] == undefined) {
      this.frete = 0
    }


    this.get_total();
  }




  getbairro(id) {
    var bairro

    this.enderecos.forEach(e => {
      if (e['id'] == id) {
        this.bairros.forEach(b => {
          if (b['id'] == e['bairro']) {
            bairro = b['id']
          }
        });
      }
    });
    return bairro
  }

  getcidade_b(id) {
    var cidade
        this.cidades.forEach(b => {
          if (b['id'] == id) {
            cidade = b['nome']
          }
        });
    return cidade
  }
  getbairro_b(id) {
    var bairro
        this.bairros.forEach(b => {
          if (b['id'] == id) {
            bairro = b['nome']
          }
        });
    return bairro
  }


  changefrete() {
    var fretes
    var fretevar
    this.restaurante = JSON.parse(localStorage.getItem('restaurante'))
    var fretamento = JSON.parse(this.restaurante['fretes'])
    if(fretamento == null){
      this.alert_OPS('OPS', 'Infelizmente!', 'Esse estabelecimento não cadastrou nenhum bairro.');
    }
    if (fretamento[this.getbairro(this.endereco)] == undefined) {
      this.alert_OPS('OPS', 'Infelizmente!', 'Esse estabelecimento não entrega nesse endereço');
      this.frete_status = false;
      this.frete = Number(0) 
    } else {
      for (let frete in fretamento) {
        this.frete = Number(fretamento[this.getbairro(this.endereco)])
        this.frete_status = true
      }
    }




    this.get_total();



  }


  public prices = []
  get_total() {
    this.total_carrinho = 0;
    var product_ony = 0;
    var id = this.router.url.replace('/pedido/', '')
    this.produtos.forEach(car => { 
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
          this.prices.push(ftotal)

        });

        car['adicionais_gratis'].forEach(add => {
          var ftotal = Number(add['preco']) * add['quantidade']
          product_ony = Number(product_ony) + Number(ftotal)
        });

        if (this.prices.length != 0) {
          product_ony = Number(product_ony) + Number(Math.max(...this.prices))
        }


        product_ony = Number(car['quantidade']) * Number(product_ony);
        this.total_carrinho = Number(this.total_carrinho) + Number(product_ony);
      }
    });

    this.frete = Number(this.frete) + Number(JSON.parse(localStorage.getItem('restaurante'))['taxa']);
    this.total_carrinho = Number(this.total_carrinho) + Number(this.frete);
  }

  cancelcupom() {
    this.get_total();

  } 

  setcupom() {
    this.cancelcupom()
    if (this.cupomarray != null) {
      if (this.cupomarray['tipo'] == "FRETE_GRATIS") {
        this.total_carrinho = Number(this.total_carrinho) - Number(this.frete)
      } else if (this.cupomarray['tipo'] == "PORCENTAGEM") {
        var rest = Number(this.total_carrinho) * (Number(this.cupomarray['desconto']) / 100)
        this.total_carrinho = Number(this.total_carrinho) - Number(rest);
      } else if (this.cupomarray['tipo'] == "TOTAL") {
        this.total_carrinho = Number(this.total_carrinho) - Number(this.cupomarray['desconto']);
      }
    }
  }

  buscarchange(){
    this.endereco = ""
    this.frete = Number(0) 
    this.get_total()
  }


  getbandeira(cardnumber) {
    var cartoes = {
      'VISA': /^4[0-9]{12}(?:[0-9]{3})/,
      'Mastercard': /^5[1-5][0-9]{14}/,
      'Amex': /^3[47][0-9]{13}/,
      'DinersClub': /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
      'Discover': /^6(?:011|5[0-9]{2})[0-9]{12}/,
      'JCB': /^(?:2131|1800|35\d{3})\d{11}/
  };
  
  function testarCC(number, cartoes) {
      for (var cartao in cartoes) if (number.match(cartoes[cartao])) return cartao;
      return false;
  }

  return testarCC(cardnumber, cartoes)
}

  async ionViewWillEnter() {
    this.zone.run(() => {

    this.produtos = []
    this.gethorario();
    this.id = JSON.parse(localStorage.getItem('restaurante'))['id']
    const datauser = JSON.parse(localStorage.getItem('cliente_data'));


    if (datauser == null) {
      this.logado = false;
      this.navCtrl.navigateRoot('/minha-conta');
    } else {
      this.logado = true;
      this.myaccount = datauser

    }


    this.pagamentos = []
    this.http.get(new Config().local_link_api + '/api/pagamento?de=' + this.myaccount['id'], {}, {}).then((data) => {
      var datajson = JSON.parse(data.data);
      this.pagamentos = datajson
    })

    this.http.get(new Config().local_link_api + '/api/enderecos?id=' + this.myaccount['id'], {}, {}).then((data) => {
      this.enderecos = JSON.parse(data.data);
    });


    this.http.get(new Config().local_link_api + '/api/bairros', {}, {}).then((data) => {
      this.bairros = JSON.parse(data.data);
    });

    this.http.get(new Config().local_link_api + '/api/cidades', {}, {}).then((data) => {
      this.cidades = JSON.parse(data.data);
    });

    this.restaurante = JSON.parse(localStorage.getItem('restaurante'))
    var fretamento = JSON.parse(this.restaurante['fretes'])



    const data = JSON.parse(localStorage.getItem('carrinho'));
    if (data == null) {
    } else {

      var id = this.router.url.replace('/pedido/', '')
      data.forEach(it => {
        if (it['restaurante'] == id) {
          this.produtos.push({
            restaurante: it['restaurante'],
            nome: it['nome'],
            adicionais: it['adicionais'].sort(function (a, b) {
              return a.de - b.de;
            }),
            adicionais_prev: it['adicionais_prev'],
            adicionais_gratis: it['adicionais_gratis'],
            id: it['id'],
            obs: this.obs_s,
            quantidade: it['quantidade'],
            preco: it['preco'],
            tipo: it['tipo']
          })
        }
      });









      this.http.get(new Config().local_link_api + '/api/categorias', {}, {}).then((data) => {
        var datajson = JSON.parse(data.data);
        this.cats = datajson
      })


      this.frete = Number(0)


      this.get_total()




    }
    this.getestoque()
  })

  }



  limpar() {
    localStorage.clear();
  }

  rout(id) {
    this.router.navigateByUrl('/produtos/' + id);

  }

  async carregando() {
    this.loading = await this.loadingController.create({
      message: 'Carregando'
    });
    await this.loading.present();
  }

  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }




  openlink(url) {
    this.iab.create(url, '_system');
  }




  async entrega_cartao() {
    this.getestoque()
   
    var id = this.router.url.replace('/pedido/', '')
    if (this.buscar_s != 'buscar') {
      this.changefrete();
      if (this.frete_status == false) {
        return;
      }
    }
    this.setcupom();

    const alert = await this.alertCtrl.create({
      header: 'Finalizar pedido',
      subHeader: 'Você escolheu pagar com cartão.',
      message: 'Valor do pedido ' + this.precos(this.total_carrinho),
      buttons: [
        {
          text: 'Escolher outro',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Confirmar',
          handler: (data) => {
            if (this.buscar_s == 'buscar') {
              var bodys =
              {
                code: 'no_code',
                restaurante: id,
                frete: this.frete,
                local: id,
                status: '',
                estado: this.uf + "-" + this.estado,
                de: this.myaccount['id'],
                pagamento: 'Buscar no local',
                nome: this.myaccount['nome'],
                endereco: this.endereco,
                cep: '',
                itens: JSON.stringify(this.produtos),
                cidade: this.uf,
                bairro: this.bairro_s,
                complemento: this.complemento_s,
                numero: this.numero_s,
                tel: this.myaccount['tel'],
                troco: 0,
                obs: "RCM " + this.obs_s,
                cupom: this.cupom_s,
                horario: this.horario,
                taxa: Number(JSON.parse(localStorage.getItem('restaurante'))['taxa'])
              }
                ;
            } else {
              var bodys =
              {
                code: 'no_code',
                restaurante: id,
                frete: this.frete,
                local: id,
                status: '',
                estado: this.uf + "-" + this.estado,
                de: this.myaccount['id'],
                pagamento: 'Receber em casa',
                nome: this.myaccount['nome'],
                endereco: this.endereco,
                cep: '',
                itens: JSON.stringify(this.produtos),
                cidade: this.uf,
                bairro: this.bairro_s,
                complemento: this.complemento_s,
                numero: this.numero_s,
                tel: this.myaccount['tel'],
                troco: 0,
                obs: "RCM " + this.obs_s,
                cupom: this.cupom_s,
                horario: this.horario,
                taxa: Number(JSON.parse(localStorage.getItem('restaurante'))['taxa'])
              }
                ;
            }
            this.http.setDataSerializer('json');
            this.http.post(new Config().local_link_api + '/api/pedidos', bodys, {}).then((data) => {
              this.alert_OPS('SUCESSO!', 'Pedido realizado com sucesso', 'Atenção: O tempo e a entrega do pedido é de responsabilidade do estabelecimento');
              localStorage.removeItem('carrinho');
              this.navCtrl.navigateRoot('/pedidos');
            }).catch((err) => {

            });
          }
        }
      ]
    });

    await alert.present();
  }


  async entrega() {
    var id = this.router.url.replace('/pedido/', '')
    if (this.buscar_s != 'buscar') {
      this.changefrete();
      if (this.frete_status == false) {
        return;
      }
    }
    this.setcupom();
    const alert = await this.alertCtrl.create({
      header: 'Digite o troco!',
      subHeader: 'Se você precisa de troco digite para quanto',
      message: 'Valor do pedido ' + this.precos(this.total_carrinho),
      inputs: [
        {
          name: 'troco',
          placeholder: 'Troco',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Escolher outro',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Pedir',
          handler: (data) => {
            if (this.buscar_s == 'buscar') {
              var bodys =
              {
                code: 'no_code',
                restaurante: id,
                frete: this.frete,
                local: id,
                status: '',
                estado: this.uf + "-" + this.estado,
                de: this.myaccount['id'],
                pagamento: 'Buscar no local',
                nome: this.myaccount['nome'],
                endereco: this.endereco,
                cep: '',
                itens: JSON.stringify(this.produtos),
                cidade: this.uf,
                bairro: this.bairro_s,
                complemento: this.complemento_s,
                numero: this.numero_s,
                tel: this.myaccount['tel'],
                troco: data.troco,
                obs: this.obs_s,
                cupom: this.cupom_s,
                horario: this.horario,
                taxa: Number(JSON.parse(localStorage.getItem('restaurante'))['taxa'])
              }
                ;
            } else {
              var bodys =
              {
                code: 'no_code',
                restaurante: id,
                frete: this.frete,
                local: id,
                status: '',
                estado: this.myaccount['cidade'] + "",
                de: this.myaccount['id'],
                pagamento: 'Receber em casa',
                nome: this.myaccount['nome'],
                endereco: this.endereco,
                cep: this.myaccount['cidade'] + "",
                itens: JSON.stringify(this.produtos),
                cidade: this.myaccount['cidade'],
                bairro: this.myaccount['bairro'],
                complemento: this.myaccount['complemento'],
                numero: this.myaccount['numero'],
                tel: this.myaccount['tel'],
                troco: data.troco,
                obs: this.obs_s,
                cupom: this.cupom_s,
                horario: this.horario,
                taxa: Number(JSON.parse(localStorage.getItem('restaurante'))['taxa'])
              }
                ;
            }
            this.http.setDataSerializer('json');
            this.http.post(new Config().local_link_api + '/api/pedidos', bodys, {}).then((data) => {
              this.alert_OPS('SUCESSO!', 'Pedido realizado com sucesso', 'Atenção: O tempo e a entrega do pedido é de responsabilidade do estabelecimento');
              localStorage.removeItem('carrinho');
              this.navCtrl.navigateRoot('/pedidos');
            }).catch((err) => {

            });
          }
        }
      ]
    });


    await alert.present();



  }

  async online(id_cartao) {
    this.getestoque()
   
    var id = this.router.url.replace('/pedido/', '')
    if (this.buscar_s != 'buscar') {
      this.changefrete();
      if (this.frete_status == false) {
        return;
      }
    }
    this.setcupom();
  
    const alert = await this.alertCtrl.create({
      header: 'Você irá efetuar o pagamento online',
      subHeader: '',
      message: this.precos(this.total_carrinho),
      buttons: [
        {
          text: 'Escolher outro',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Pagar',
          handler: (data) => {
            if (this.new_address == true) {
              var bodys =
              {
                code: 'no_code',
                restaurante: id,
                frete: this.frete,
                local: id,
                status: '',
                estado: this.uf + "-" + this.estado,
                de: this.myaccount['id'],
                pagamento: 'Buscar no local',
                nome: this.myaccount['nome'],
                endereco: this.endereco,
                cep: '',
                itens: JSON.stringify(this.produtos),
                pay: id_cartao,
                cidade: this.uf,
                bairro: this.bairro_s,
                complemento: this.complemento_s,
                numero: this.numero_s,
                tel: this.myaccount['tel'],
                obs: this.obs_s,
                total: Number(this.total_carrinho),
                cupom: this.cupom_s,
                horario: this.horario,
                taxa: Number(JSON.parse(localStorage.getItem('restaurante'))['taxa'])
              }
                ;
            } else {
              var bodys =
              {
                code: 'no_code',
                restaurante: id,
                frete: this.frete,
                local: id,
                status: '',
                estado: this.myaccount['cidade'] + "",
                de: this.myaccount['id'],
                pagamento: 'Pagamento online (PAGO)',
                nome: this.myaccount['nome'],
                endereco: this.endereco,
                cep: this.myaccount['cidade'] + "",
                itens: JSON.stringify(this.produtos),
                pay: id_cartao,
                cidade: this.myaccount['cidade'],
                bairro: this.myaccount['bairro'],
                complemento: this.myaccount['complemento'],
                numero: this.myaccount['numero'],
                tel: this.myaccount['tel'],
                obs: this.obs_s,
                total: Number(this.total_carrinho) ,
                cupom: this.cupom_s,
                horario: this.horario,
                taxa: Number(JSON.parse(localStorage.getItem('restaurante'))['taxa'])
              }
                ;
            }
            this.processando = true
            this.http.setDataSerializer('json');
            this.http.post(new Config().local_link_api + '/api/pedidos', bodys, {}).then((data) => {
              //
              if(data.data == "4" || data.data == "6" || data.data == "00"){
                this.alert_OPS('SUCESSO!', 'Pedido realizado com sucesso', 'Atenção: O tempo e a entrega do pedido é de responsabilidade do estabelecimento');
                localStorage.removeItem('carrinho');
                this.navCtrl.navigateRoot('/pedidos'); 
                
              }else{
                //this.alert_OPS('Ops :(', 'Ainda não estamos aceitando pagamento on-line','Tente novamente usar outro.' + data.data);
                this.alert_OPS('Ops :(', 'Houve um problema com seu cartão','Tente novamente ou use outro. (ERRO ' + data.data + ')');
                this.processando = false
              }
              
            }).catch((err) => {

            });

          }
        }
      ]
    });

    await alert.present();
  }



  check_bairro() {
    return status
  }

  routerlink_api(string) {
    this.zone.run(async () => {
      await this.navCtrl.navigateForward(string);
    });
  }



  ngOnInit() {
    const datauser = JSON.parse(localStorage.getItem('cliente_data'));
    //this.alert_OPS('OPS', 'Falta uma informação', '' + data);
    if (datauser == null) {
      this.navCtrl.navigateRoot('/minha-conta/' + 'pedido');
    }
  }



  async alert_OPS(header, subheader, message) {
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: subheader,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }


  remove_item(item) {
  
    this.alert_OPS("AVISO", "Item removido", "")
    var index = this.produtos.indexOf(item);
    this.produtos.splice(index, 1)
    localStorage.setItem('carrinho', JSON.stringify(this.produtos))

    this.total_carrinho = 0;

    var product_ony = 0;
    this.produtos.forEach(car => {
      product_ony = 0;
      product_ony = Number(product_ony) + Number(car['preco']);
      //this.total_carrinho = Number(this.total_carrinho) + Number(car['preco']);
      car['adicionais'].forEach(add => {
        this.adicionais.push({ preco: add['preco'] })

        //this.total_carrinho = Number(this.total_carrinho) + Number(add['preco']);
        product_ony = Number(product_ony) + Number(add['preco']);
      });
      product_ony = Number(car['quantidade']) * Number(product_ony);
      this.total_carrinho = Number(this.total_carrinho) + Number(product_ony);

    });
    this.frete = Number(this.frete) + Number(JSON.parse(localStorage.getItem('restaurante'))['taxa']);
    this.total_carrinho = Number(this.total_carrinho) + Number(this.frete);


this.getestoque()
  }







}
