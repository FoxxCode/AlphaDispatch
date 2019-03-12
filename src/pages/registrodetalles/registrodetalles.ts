import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import xml2js from "xml2js";

/**
 * Generated class for the RegistrodetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrodetalles',
  templateUrl: 'registrodetalles.html',
})
export class RegistrodetallesPage {

  CodAs:any; //Codigo de Asignacion
  data:any=[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http:Http) {

              this.CodAs=navParams.data.CodAs;
              //console.log(this.CodAs);
              this.data.fechallegada="";
              this.data.horallegada="";
              this.data.fechainicio="";
              this.data.horainicio="";
              this.data.fechafin="";
              this.data.horafin="";
              this.data.observacion="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrodetallesPage');
  }

  // testfechas(){
  //   console.log(this.data);
  // }

  registroTiempo(){

    var fulldatellegada=this.data.fechallegada+" "+this.data.horallegada
    var fulldateinicio=this.data.fechainicio+" "+this.data.horainicio
    var fulldatefin= this.data.fechafin+" "+this.data.horafin

    var tiempotr= parseInt(this.data.horafin)-parseInt(this.data.horainicio);


    var total= 45;
    var codtec='ALPHADOM\\jescarcha';
    var numtick=this.CodAs;
    var obserb=this.data.observacion;

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('POST', 'http://10.1.70.145/wsDispatch/Service1.asmx?WSDL', true);
    var soapRequest=
    `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <InsertaTiempo xmlns="http://tempuri.org/">
          <horalleg>`+"2018-09-13 03:00:00"+`</horalleg>
          <inic>`+"2018-09-13 03:00:00"+`</inic>
          <horfin>`+"2018-09-13 04:00:00"+`</horfin>
          <tiemptr>`+"2018-09-13 01:00:00"+`</tiemptr>
          <total>`+45+`</total>
          <codtec>`+"ALPHADOM\\jescarcha"+`</codtec>
          <numtick>`+3226+`</numtick>
          <obserb>`+obserb+`</obserb>
        </InsertaTiempo>
      </soap:Body>
    </soap:Envelope>`;
    xmlHttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');

    var auxnav=this;
    xmlHttp.onreadystatechange = function(){
      if (xmlHttp.readyState===4 && xmlHttp.status===200){
        //alert(xmlHttp.response);  
        var parseString = xml2js.parseString;
        parseString(xmlHttp.response, (err, result)=>{
          if(err){
            console.log(err);
          }
          //console.log(JSON.stringify(result))

          let datos= result['soap:Envelope']['soap:Body'][0].InsertaTiempoResponse[0].InsertaTiempoResult[0]
          if(datos=="true"){
            alert("Tiempo registrado Correctamente");
            auxnav.navCtrl.pop();
          }else{
            alert("No se pudo registrar el usuario, Verifique los datos");
          }
        });
      }
    };
    xmlHttp.send(soapRequest);
  }
}
