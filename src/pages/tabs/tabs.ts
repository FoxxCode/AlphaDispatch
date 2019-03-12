import { Component } from '@angular/core';
import { ListacasosPage } from "../listacasos/listacasos";  
import { RegistroincidenciaPage } from "../registroincidencia/registroincidencia";  
import {  NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabCasos;
  tabRegistro;


  phone;
  constructor(navParams:NavParams){
      console.log(navParams);
      this.phone=navParams.get('phone');

      this.tabCasos=ListacasosPage;
      this.tabRegistro=RegistroincidenciaPage;
  }
}
