import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from "@angular/http";
import xml2js from "xml2js";

import { RegistrodetallesPage } from "../registrodetalles/registrodetalles";


/**
 * Generated class for the ListacasosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listacasos',
  templateUrl: 'listacasos.html',
})
export class ListacasosPage {

  data:any=[];
  phone:any;
  //index:any;
  constructor(public navCtrl: NavController, 
              public cdr: ChangeDetectorRef,
              public navParams: NavParams,
              public http:Http) {

              this.phone=navParams.data;
              this.http=http;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroincidenciaPage');
    this.getCasos();
  }

  getCasos(){
    //Formateo de Fecha
    var today=new Date();
    var dd=today.getDate();
    var mm=today.getMonth()+1;//Enero es 0
    var yyyy=today.getFullYear();

    var fechactual=yyyy.toString()+"-"+mm.toString()+"-"+dd.toString();
    var user='ALPHADOM\\jescarcha'; //usuario de prueba

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('POST', 'http://10.1.70.145/wsDispatch/Service1.asmx?WSDL', false);
    var soapRequest =   		
          `<?xml version="1.0" encoding="utf-8"?>
          <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
            <soap12:Body>
              <TareaTecnico xmlns="http://tempuri.org/">
                <codtecnico>`+user+`</codtecnico>
                <fecha>`+"2017-03-16"+`</fecha>
              </TareaTecnico>
            </soap12:Body>
          </soap12:Envelope>`;

    var auxthis=[]
    
    xmlHttp.onreadystatechange = ()=>{
      if (xmlHttp.readyState===4 && xmlHttp.status===200){
        //alert(xmlHttp.response);  
        var parseString = xml2js.parseString;
        parseString(xmlHttp.response, (err, result)=>{
          if(err){
            console.log(err);
          }
          
          //console.log(JSON.stringify(result))
          let datos= result['soap:Envelope']['soap:Body'][0].TareaTecnicoResponse[0].TareaTecnicoResult[0]['diffgr:diffgram'][0].NewDataSet[0].VISTA
          
          var auxdata=[]
          //console.log()
          datos.forEach(function (element){
            // console.log('JSON.stringify(element)');
            // console.log(JSON.stringify(element.COD_ASIGNACION[0]));
              let dato={
                Codigo: element['COD_ASIGNACION'][0],
                Observacion: element['OBSERVACION'][0],
                Tipo: element['TIPO_ESTADOS'][0],
                Horario: element['HORARIO'][0]
              };
              //auxdata.push(Object.keys(dato).map(i=>dato[i]))
              auxdata.push(dato);
          }, this);
          auxthis=auxdata;
          //auxthis.cdr.detectChanges();//revisar
          //console.log("qwer"+auxdata);
        });
        
      }
      //console.log('asd' + auxthis);
    };
    
    xmlHttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    xmlHttp.send(soapRequest);
    this.data=auxthis;
    //console.log(this.data)
  }

  launchRegistroDetalles(i:number){
    this.navCtrl.push(RegistrodetallesPage,{CodAs:this.data[i].Codigo});
    //alert(i);
  }
  
}
