import { Component, OnInit, NgZone } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { NavController } from '@ionic/angular';
import { Config } from "../config";

@Component({
  selector: 'app-contato', 
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  public segunda;
  public terca;
  public quarta; 
  public quinta;
  public sexta;
  public sabado;
  public domingo;
  public feriado;
  public horarios=[]
  public endereco = new Config().local_adress
  public telefone = new Config().local_phone
  public whatsapp = new Config().local_whatsapp
  public local_phone = new Config().local_phone
  public nome = new Config().local_name
  public sobre = new Config().local_about


  constructor(public navCtrl: NavController, private zone: NgZone) {
    this.horarios = JSON.parse(localStorage.getItem('horario'))
    if(this.horarios['segunda'] != "NA"){
      this.segunda = JSON.parse(this.horarios['segunda'])
    }else{
      this.segunda = "NA";
    }

    if(this.horarios['terca'] != "NA"){
      this.terca = JSON.parse(this.horarios['terca'])
    }else{
      this.terca = "NA";
    }


    if(this.horarios['quarta'] != "NA"){
      this.quarta = JSON.parse(this.horarios['quarta'])
    }else{
      this.quarta = "NA";
    }

    if(this.horarios['quinta'] != "NA"){
      this.quinta = JSON.parse(this.horarios['quinta'])
    }else{
      this.quinta = "NA";
    }

    if(this.horarios['sexta'] != "NA"){
      this.sexta = JSON.parse(this.horarios['sexta'])
    }else{
      this.sexta = "NA";
    }

    if(this.horarios['sabado'] != "NA"){
      this.sabado = JSON.parse(this.horarios['sabado'])
    }else{
      this.sabado = "NA";
    }

    if(this.horarios['domingo'] != "NA"){
      this.domingo = JSON.parse(this.horarios['domingo'])
    }else{
      this.domingo = "NA";
    }


    
   
    
   
   }

   routerlink_api(string){
    this.zone.run(async () => {
      await this.navCtrl.navigateForward(string);
    });
  }


  ngOnInit() {
  }

}
