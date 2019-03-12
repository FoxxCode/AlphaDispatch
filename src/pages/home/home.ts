import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Http } from "@angular/http";
import xml2js from "xml2js";

// import { ListacasosPage } from "../listacasos/listacasos";
import { TabsPage } from "../tabs/tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:any={};
  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform:Platform,
              private formBuilder: FormBuilder,
              public http:Http) {
                this.credentialsForm=this.formBuilder.group({
                  phone: new FormControl('',Validators.compose([
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(8),
                    Validators.pattern('^[0-9]*$')
                  ])),
                  pin:new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.pattern('^[0-9]*$')
                  ]))
                });
                this.data.phone='';
                this.data.pin='';

                this.http=http;
  }

  validation_messages={
    'phone':[
      {type: 'required', message: 'El Número de celular es obligatorio'},
      {type: 'maxlength', message: 'El Número de celular debe contener 8 caracteres numéricos'},
      {type: 'minlength', message: 'El Número de celular debe contener 8 caracteres numéricos'},
      {type: 'pattern', message: 'El Número de celular no puede contener letras o caracteres especiales'}
    ],
    'pin':[ 
      {type: 'required', message: 'El pin es obligatorio'},
      {type: 'minlength', message: 'El pin debe contener como mínimo 4 caracteres numéricos'},
      {type: 'pattern', message: 'El pin no puede contener letras o caracteres especiales'}
    ]
  }

  sendForm(){
    //var myData=JSON.stringify({phone: this.data.phone,pin: this.data.pin});

    var xmlHttp=new XMLHttpRequest();
    xmlHttp.open('POST','http://10.1.70.145/wsDispatch/Service1.asmx?WSDL', true);
    var soapRequest= 
    // '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">'+
    //     '<Body>'+
    //         '<AndroidLogin xmlns="http://tempuri.org/"'+
    //             '<tel>'+this.data.phone+'</tel>'+
    //             '<pin>'+this.data.pin+'</pin>'+
    //         '</AndroidLogin>'+
    //     '</Body>'+
    // '</Envelope>';
    `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <AndroidLogin xmlns="http://tempuri.org/">
          <tel>`+this.data.phone+`</tel>
          <pin>`+this.data.pin+`</pin>
        </AndroidLogin>
      </soap:Body>
    </soap:Envelope>`;
    xmlHttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');

    var auxnav=this;// variable auxiliar para evitar sobreescritura de palabra reservada "this"
    xmlHttp.onreadystatechange = function(){
      if (xmlHttp.readyState===4 && xmlHttp.status===200){
        //alert(xmlHttp.response);  
        var parseString = xml2js.parseString;
        parseString(xmlHttp.response, (err, result)=>{
          if(err){
            console.log(err);
          }
          //console.log(JSON.stringify(result))

          let datos= result['soap:Envelope']['soap:Body'][0].AndroidLoginResponse[0].AndroidLoginResult[0]
          if(datos=="true"){
            auxnav.navCtrl.push(TabsPage,{phone:auxnav.data.phone});
          }else{
            alert("Usuario Invalido, intente de nuevo");
          }
        });
      }
    };

    xmlHttp.send(soapRequest);

    //console.log(this.data);
  }
}
