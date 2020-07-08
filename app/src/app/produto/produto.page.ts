import { Component, OnInit, NgZone } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, AlertController, LoadingController, Platform } from '@ionic/angular';
import { Config } from "../config";
@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  public product = [];
  public adicionais = [];
  public total = 0;

  public nome;
  public descricao;
  public preco;
  public img;
  public estoque;

  public quantidade = 1;
  public final = []
  public final_prev = []
  public final_gratuito = []
  public itens = []
  public finalarray
  public jsonfinal = [];

  adicionaisitem = [];
  public loading;
  menuarray = [];

  menuarray_new = [];

  adicionais_select;
  public restaurante = []
  public back_button;

  public obs_s;

  public imglogo

  public NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HTTP,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public loadingController: LoadingController,
    private zone: NgZone,
    public platform: Platform
  ) {



  }

  async carregando() {
    this.loading = await this.loadingController.create({
      message: 'Carregando'
    });
    await this.loading.present();
  }



  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.final = []
    this.final_prev = []
    this.itens = []
    this.jsonfinal = [];
    this.adicionaisitem = [];
    this.menuarray = [];
    this.menuarray_new = [];
    this.zone.run(async () => {
      this.platform.backButton.subscribe(() => {
        this.routerlink_api('/produtos/' + this.back_button);
      });
      //this.carregando();
      var id = this.router.url.replace('/produto/', '');
      this.http.get(new Config().local_link_api + '/api/produto/' + id, {}, {}).then((data) => {
        var datajson = JSON.parse(data.data);
        this.product = datajson[0];
        this.nome = this.product['nome'];
        this.imglogo = new Config().local_link_img + this.product['img'];
        this.descricao = this.product['descricao'];
        this.preco = this.product['preco'];
        this.back_button = this.product['sub_produtos']
        this.total = Number(this.product['preco']);
        this.estoque = Number(this.product['estoque']);
        datajson.forEach(addc => {
          if (addc['prevalecer'] != undefined) {
            if (addc['de'].includes(this.product['id']) == true) {
              this.menuarray_new.push(addc)
            }




          } else if (addc['sub_produto'] == this.product['sub_produtos']) {
            this.adicionaisitem.push({ nome: addc['nome'], de: addc['de'], descricao: addc['descricao'], id: addc['id'], preco: addc['preco'], isChecked: false, quantidade: 0, gratuito: addc['gratuito'] })
          } else if (addc['sub_produto'] == null) {
            this.adicionaisitem.push({ nome: addc['nome'], de: addc['de'], descricao: addc['descricao'], id: addc['id'], preco: addc['preco'], isChecked: false, quantidade: 0, gratuito: addc['gratuito'] })
          }

          //this.adicionaisitem.push({nome: addc['nome'],de: addc['de'],id: addc['id'], preco: addc['preco'], isChecked: false})
        });

        this.adicionaisitem.splice(0, 1);


      })



      /*this.http.get(new Config().local_link_api + '/api/categorias', {}, {}).then((data) => {
          this.menuarray = JSON.parse(data.data);
          this.loading.dismiss()
          this.menuarray.forEach(a => { 
          JSON.parse(a['de']).forEach(de => {
            if(de == this.product['id']){
              this.menuarray_new.push(a)
            }
          });
          });
            
          }).catch((err) =>{ 
            this.loading.dismiss()
          });*/

    })

  }


  qtd(array, id) {
    var total = 0
    array.forEach(f => {
      if (f['de'] == id) {
        total = total + f['quantidade']
      }
    });


    return total
  }

  getttt() {
    return JSON.stringify(this.final_gratuito)
  }
  adicionar(cat, id, gratuito) {
    if (gratuito == "SIM") {
      if (this.checkcomplementos(true, cat) == false) {
        return false
      }
    } else {
      if (this.checkcomplementos(false, cat) == false) {
        return false
      }
    }

    this.adicionaisitem.forEach(add => {
      if (add['id'] == id) {
        add['quantidade'] = add['quantidade'] + 1

      }
    });
    this.get_total('')
  }

  remover(id) {
    this.adicionaisitem.forEach(add => {
      if (add['id'] == id) {
        if (add['quantidade'] != 0) {
          add['quantidade'] = add['quantidade'] - 1
        }
      }
    });
    this.get_total('')
  }




  adicionar_produto() {
    if(this.quantidade >= this.estoque){
      this.alert_erro('Ops :(', 'Você pode comprar apenas '+this.estoque+' quantidades do produto: ' +this.nome, "")
      return;
    }
    this.quantidade++
    this.get_total("");
  }

  remover_produto() {
    if (this.quantidade != 0) {
      this.quantidade--
    }
    this.get_total("");
  }

  categorias(id) {
    var adicionais_pr = []
    this.adicionaisitem.forEach(addc => {
      {
        if (addc['de'] == id) {
          adicionais_pr.push(addc)
        }
      }

    });
    return adicionais_pr
  }

  categorias_gratuitos(id, gratuito) {
    var adicionais_pr = []
    this.adicionaisitem.forEach(addc => {
      {
        if (addc['de'] == id) {
          if (gratuito == 0 || gratuito == null) {

          } else {
            adicionais_pr.push(addc)
          }
        }
      }

    });
    return adicionais_pr
  }

  routerlink_api(string) {
    this.zone.run(async () => {
      await this.navCtrl.navigateForward(string);
    });
  }




  public onKeyUp(event: any) {
    this.get_total('zz');
    let newValue = event.target.value;
    let regExp = new RegExp(this.NUMBER_REGEXP);

    if (!regExp.test(newValue)) {
      event.target.value = newValue.slice(0, -1);
    }


  }



  //TIPOS: 1 = ADICIONAL | 2 = COMPLEMENTO | 3 = PRODUTO | 4 = OPÇÕES
  public limit = [];
  checked = [];
  //Adds the checkedbox to the array and check if you unchecked it

  public prices = []
  get_total(id) {
    this.final = []
    this.final_prev = []
    this.final_gratuito = []
    this.total = 0;
    this.adicionaisitem.forEach(addc => {
      if (addc['quantidade'] > 0) {
        this.menuarray_new.forEach(e => {
          if (addc['de'] == e['id']) {


            if (e['prevalecer'] == 'Sim') {
              this.final_prev.push(addc);
            }
            if (e['gratuito'] <= 0 && e['prevalecer'] != 'Sim') {
              this.final.push(addc);
            }
            if (e['gratuito'] > 0) {
              if (addc['gratuito'] == "SIM") {
                this.final_gratuito.push(addc);
              } else {
                this.final_gratuito.push(addc);
              }

            }
          }
        });

        this.finalarray = JSON.stringify(this.final_gratuito)
      } else {
        this.final.forEach(f => {
          if (f['id'] == addc['id']) {
            this.final.splice(f, 1);
          }
        });
        this.final_prev.forEach(f => {
          if (f['id'] == addc['id']) {
            this.final_prev.splice(f, 1);
          }
        });
        this.final_gratuito.forEach(f => {
          if (f['id'] == addc['id']) {
            this.final_gratuito.splice(f, 1);
          }
        });
      }
    });

    this.final.forEach(v => {
      var ftotal = Number(v['preco']) * v['quantidade']
      this.total = Number(this.total) + Number(ftotal)
    });

    this.final_gratuito.forEach(v => {
      var ftotal = Number(v['preco']) * v['quantidade']
      this.total = Number(this.total) + Number(ftotal)
    });

    this.prices = []
    this.final_prev.forEach(v => {
      var ftotal = Number(v['preco']) * v['quantidade']
      this.prices.push(ftotal)
    });

    if (this.prices.length != 0) {
      this.total = Number(this.total) + Number(Math.max(...this.prices))
    }


    this.total = Number(this.total) + Number(this.product['preco']);

    this.total = Number(this.total) * Number(this.quantidade);


  }


  get_gratuito(add, gratuito) {
    for (let index = 0; index < gratuito; index++) {
      if (this.final_gratuito[index]['nome'] == add['nome']) {
        return true;
      }
    }

  }


  precos(string) {
    if (string == 0) {
      return "";
    } else {
      return Number(string).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    }
  }

  checkcomplementos_minimo() {
    var retornar = true;
    var limite = []
    this.menuarray_new.forEach(cat => {
      var qtd = 0;
      var qtdgratuitos = 0;


      this.final.forEach(fin => {
        if (fin['de'] == cat['id']) {
          qtd = qtd + fin['quantidade']
        }
      });

      this.final_gratuito.forEach(fin => {
        if (fin['de'] == cat['id']) {
          if (fin['gratuito'] == "SIM") {
            qtdgratuitos = qtdgratuitos + fin['quantidade']
            qtd = qtd + fin['quantidade']
          } else {
            qtd = qtd + fin['quantidade']
          }

        }
      });


      this.final_prev.forEach(fin => {
        if (fin['de'] == cat['id']) {
          qtd = qtd + fin['quantidade']
        }
      });



      if (qtd < cat['minimo']) {
        this.alert_erro('Ops :(', 'Você precisa escolher pelo menos ' + cat['minimo'] + " item em " + cat['nome'], "")
        retornar = false;
      }


    });
    return retornar;
  }


  checkcomplementos(gratuito, id) {
    var retornar = true;
    var limite = []
    this.menuarray_new.forEach(cat => {
      var qtd = 0;
      var qtdgratuitos = 0;

      this.final.forEach(fin => {
        if (fin['de'] == cat['id']) {
          qtd = qtd + fin['quantidade']
        }
      });

      this.final_gratuito.forEach(fin => {
        if (fin['de'] == cat['id']) {
          if (fin['gratuito'] == "SIM") {
            qtdgratuitos = qtdgratuitos + fin['quantidade']
            qtd = qtd + fin['quantidade']
          } else {
            qtd = qtd + fin['quantidade']
          }

        }
      });

      this.final_prev.forEach(fin => {
        if (fin['de'] == cat['id']) {
          qtd = qtd + fin['quantidade']
        }
      });

      if (cat['id'] == id) {
        if (qtd == cat['quantidade']) {
          this.alert_erro('Ops :(', 'Você só pode escolher ' + cat['quantidade'] + " itens em: " + "" + cat['nome'] + "", "")
          retornar = false;
        }
        if (gratuito == true) {
          if (qtdgratuitos == cat['gratuito'] && cat['gratuito'] != 0) {
            this.alert_erro('Ops :(', 'Você só pode escolher ' + cat['gratuito'] + " itens gratuitos em: " + "" + cat['nome'] + "", "")
            retornar = false;
          }
        }
      }




    });
    return retornar;
  }

  addcart() {
    if(this.quantidade > this.estoque){
      this.alert_erro('Ops :(', 'Infelizmente esse produto não tem estoque disponível.', "")
      return;
    }
    this.restaurante = JSON.parse(localStorage.getItem('restaurante'))

    if(this.quantidade < 1){
      this.alert_erro('Ops :(', 'Você precisa escolher pelo menos 1', "");
      return;
    }


    if (this.checkcomplementos_minimo() == false) {
      return false
    }
    const dataz = JSON.parse(localStorage.getItem('carrinho'));

    this.itens.push({ restaurante: this.restaurante['id'], nome: this.product['nome'], adicionais: this.final, adicionais_prev: this.final_prev, adicionais_gratis: this.final_gratuito, id: this.product['id'], quantidade: this.quantidade, preco: this.product['preco'], tipo: 3 });

    if (dataz == null) {
      localStorage.setItem('carrinho', JSON.stringify(this.itens));
    } else {
      dataz.forEach(it => {
        this.jsonfinal.push({
          restaurante: it['restaurante'],
          nome: it['nome'],
          adicionais: it['adicionais'],
          adicionais_prev: it['adicionais_prev'],
          adicionais_gratis: it['adicionais_gratis'],
          id: it['id'],
          obs: this.obs_s,
          quantidade: it['quantidade'],
          preco: it['preco'],
          tipo: it['tipo']
        })
      });
      this.itens.forEach(it => {
        this.jsonfinal.push({
          restaurante: it['restaurante'],
          nome: it['nome'],
          adicionais: it['adicionais'],
          adicionais_prev: it['adicionais_prev'],
          adicionais_gratis: it['adicionais_gratis'],
          id: it['id'],
          obs: this.obs_s,
          quantidade: it['quantidade'],
          preco: it['preco'],
          tipo: it['tipo']
        })
      });


      localStorage.setItem('carrinho', JSON.stringify(this.jsonfinal));
    }


    this.navCtrl.navigateRoot('/cardapio/' + JSON.parse(localStorage.getItem('restaurante'))['id']);
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
