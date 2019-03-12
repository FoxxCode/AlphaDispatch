webpackJsonp([3],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListacasosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xml2js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registrodetalles_registrodetalles__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ListacasosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListacasosPage = /** @class */ (function () {
    //index:any;
    function ListacasosPage(navCtrl, cdr, navParams, http) {
        this.navCtrl = navCtrl;
        this.cdr = cdr;
        this.navParams = navParams;
        this.http = http;
        this.data = [];
        this.phone = navParams.data;
        this.http = http;
    }
    ListacasosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroincidenciaPage');
        this.getCasos();
    };
    ListacasosPage.prototype.getCasos = function () {
        var _this = this;
        //Formateo de Fecha
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //Enero es 0
        var yyyy = today.getFullYear();
        var fechactual = yyyy.toString() + "-" + mm.toString() + "-" + dd.toString();
        var user = 'ALPHADOM\\jescarcha'; //usuario de prueba
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('POST', 'http://10.1.70.145/wsDispatch/Service1.asmx?WSDL', false);
        var soapRequest = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n          <soap12:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap12=\"http://www.w3.org/2003/05/soap-envelope\">\n            <soap12:Body>\n              <TareaTecnico xmlns=\"http://tempuri.org/\">\n                <codtecnico>" + user + "</codtecnico>\n                <fecha>" + "2017-03-16" + "</fecha>\n              </TareaTecnico>\n            </soap12:Body>\n          </soap12:Envelope>";
        var auxthis = [];
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                //alert(xmlHttp.response);  
                var parseString = __WEBPACK_IMPORTED_MODULE_3_xml2js___default.a.parseString;
                parseString(xmlHttp.response, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    //console.log(JSON.stringify(result))
                    var datos = result['soap:Envelope']['soap:Body'][0].TareaTecnicoResponse[0].TareaTecnicoResult[0]['diffgr:diffgram'][0].NewDataSet[0].VISTA;
                    var auxdata = [];
                    //console.log()
                    datos.forEach(function (element) {
                        // console.log('JSON.stringify(element)');
                        // console.log(JSON.stringify(element.COD_ASIGNACION[0]));
                        var dato = {
                            Codigo: element['COD_ASIGNACION'][0],
                            Observacion: element['OBSERVACION'][0],
                            Tipo: element['TIPO_ESTADOS'][0],
                            Horario: element['HORARIO'][0]
                        };
                        //auxdata.push(Object.keys(dato).map(i=>dato[i]))
                        auxdata.push(dato);
                    }, _this);
                    auxthis = auxdata;
                    //auxthis.cdr.detectChanges();//revisar
                    //console.log("qwer"+auxdata);
                });
            }
            //console.log('asd' + auxthis);
        };
        xmlHttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
        xmlHttp.send(soapRequest);
        this.data = auxthis;
        //console.log(this.data)
    };
    ListacasosPage.prototype.launchRegistroDetalles = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registrodetalles_registrodetalles__["a" /* RegistrodetallesPage */], { CodAs: this.data[i].Codigo });
        //alert(i);
    };
    ListacasosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listacasos',template:/*ion-inline-start:"C:\Users\BDuchen\Desktop\Dispatch\DispatchFront\src\pages\listacasos\listacasos.html"*/'<!--\n  Generated template for the ListacasosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Lista de Casos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col>\n          <ion-list>\n              <ion-row *ngFor="let caso of data; index as i" >\n                <ion-card>\n                  <ion-card-header>\n                    <ion-row>\n                      <ion-col><b>Caso Nº {{i+1}}</b></ion-col>\n                      <ion-col></ion-col>\n                      <ion-col>\n                        <button (click)="launchRegistroDetalles(i)" ion-button color="dark"> Registro Detalles &nbsp; <i><ion-icon name="exit"></ion-icon></i></button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-card-header>\n                  <ion-card-content>\n                    <ion-item>Código de Asignación: {{data[i].Codigo}}</ion-item>\n                    <ion-item>Observacion: {{data[i].Observacion}}</ion-item>\n                    <ion-item>Tipo Estados: {{data[i].Tipo}} </ion-item>\n                    <ion-item>Horario: {{data[i].Horario}}</ion-item>\n                    <!-- <button ion-item (click)="getCaso()">Ver Detalles</button> -->\n                  </ion-card-content>\n                </ion-card>\n              </ion-row>\n            </ion-list>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\BDuchen\Desktop\Dispatch\DispatchFront\src\pages\listacasos\listacasos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ListacasosPage);
    return ListacasosPage;
}());

//# sourceMappingURL=listacasos.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrodetallesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xml2js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_xml2js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegistrodetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrodetallesPage = /** @class */ (function () {
    function RegistrodetallesPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.data = [];
        this.CodAs = navParams.data.CodAs;
        //console.log(this.CodAs);
        this.data.fechallegada = "";
        this.data.horallegada = "";
        this.data.fechainicio = "";
        this.data.horainicio = "";
        this.data.fechafin = "";
        this.data.horafin = "";
        this.data.observacion = "";
    }
    RegistrodetallesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrodetallesPage');
    };
    // testfechas(){
    //   console.log(this.data);
    // }
    RegistrodetallesPage.prototype.registroTiempo = function () {
        var fulldatellegada = this.data.fechallegada + " " + this.data.horallegada;
        var fulldateinicio = this.data.fechainicio + " " + this.data.horainicio;
        var fulldatefin = this.data.fechafin + " " + this.data.horafin;
        var tiempotr = parseInt(this.data.horafin) - parseInt(this.data.horainicio);
        var total = 45;
        var codtec = 'ALPHADOM\\jescarcha';
        var numtick = this.CodAs;
        var obserb = this.data.observacion;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('POST', 'http://10.1.70.145/wsDispatch/Service1.asmx?WSDL', true);
        var soapRequest = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n    <soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n      <soap:Body>\n        <InsertaTiempo xmlns=\"http://tempuri.org/\">\n          <horalleg>" + "2018-09-13 03:00:00" + "</horalleg>\n          <inic>" + "2018-09-13 03:00:00" + "</inic>\n          <horfin>" + "2018-09-13 04:00:00" + "</horfin>\n          <tiemptr>" + "2018-09-13 01:00:00" + "</tiemptr>\n          <total>" + 45 + "</total>\n          <codtec>" + "ALPHADOM\\jescarcha" + "</codtec>\n          <numtick>" + 3226 + "</numtick>\n          <obserb>" + obserb + "</obserb>\n        </InsertaTiempo>\n      </soap:Body>\n    </soap:Envelope>";
        xmlHttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
        var auxnav = this;
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                //alert(xmlHttp.response);  
                var parseString = __WEBPACK_IMPORTED_MODULE_3_xml2js___default.a.parseString;
                parseString(xmlHttp.response, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    //console.log(JSON.stringify(result))
                    var datos = result['soap:Envelope']['soap:Body'][0].InsertaTiempoResponse[0].InsertaTiempoResult[0];
                    if (datos == "true") {
                        alert("Tiempo registrado Correctamente");
                        auxnav.navCtrl.pop();
                    }
                    else {
                        alert("No se pudo registrar el usuario, Verifique los datos");
                    }
                });
            }
        };
        xmlHttp.send(soapRequest);
    };
    RegistrodetallesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registrodetalles',template:/*ion-inline-start:"C:\Users\BDuchen\Desktop\Dispatch\DispatchFront\src\pages\registrodetalles\registrodetalles.html"*/'<!--\n\n  Generated template for the RegistrodetallesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Registro de Detalles</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-1></ion-col>\n\n      <ion-col col-10>\n\n        <form>\n\n            <ion-row>\n\n              <ion-col>\n\n                  <ion-item>\n\n                      <ion-label>Fecha de llegada</ion-label>\n\n                      <ion-datetime name="fechallegada" [(ngModel)]="data.fechallegada" displayFormat="DD MMM YYYY"  pickerFormat="DD MMM YYYY"  cancelText ="Cancelar" doneText="Ok"></ion-datetime> \n\n                  </ion-item>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <ion-item>\n\n                      <ion-label>Hora de llegada</ion-label>\n\n                      <ion-datetime name="horallegada" [(ngModel)]="data.horallegada" displayFormat="h:mm A" pickerFormat="h mm s A"></ion-datetime>\n\n                  </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                  <ion-item>\n\n                      <ion-label>Fecha de Inicio</ion-label>\n\n                      <ion-datetime name="fechainicio" [(ngModel)]="data.fechainicio" displayFormat="DD MMM YYYY"  pickerFormat="DD MMM YYYY"  cancelText ="Cancelar" doneText="Ok"></ion-datetime> \n\n                  </ion-item>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <ion-item>\n\n                      <ion-label>Hora de Inicio</ion-label>\n\n                      <ion-datetime name="horainicio" [(ngModel)]="data.horainicio" displayFormat="h:mm A" pickerFormat="h mm A"></ion-datetime>\n\n                  </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                  <ion-item>\n\n                      <ion-label>Fecha de Fin Trabajo</ion-label>\n\n                      <ion-datetime name="fechafin" [(ngModel)]="data.fechafin" displayFormat="DD MMM YYYY"  pickerFormat="DD MMM YYYY"  cancelText ="Cancelar" doneText="Ok"></ion-datetime> \n\n                  </ion-item>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <ion-item>\n\n                      <ion-label>Hora de Fin Trabajo</ion-label>\n\n                      <ion-datetime name="horafin" [(ngModel)]="data.horafin" displayFormat="h:mm A" pickerFormat="h mm A"></ion-datetime>\n\n                  </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-item>\n\n                    <ion-label floating>Observación</ion-label>\n\n                    <ion-textarea name="observacion" [(ngModel)]="data.observacion" style="height: 200px"></ion-textarea>\n\n                </ion-item>\n\n            </ion-row>\n\n            <br>\n\n            <ion-row>\n\n                <ion-col text center>\n\n                  <button ion-button block color="dark" (click)="registroTiempo()">Registrar</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </form>\n\n      </ion-col>\n\n      <ion-col col-1></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\BDuchen\Desktop\Dispatch\DispatchFront\src\pages\registrodetalles\registrodetalles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], RegistrodetallesPage);
    return RegistrodetallesPage;
}());

//# sourceMappingURL=registrodetalles.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroincidenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegistroincidenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroincidenciaPage = /** @class */ (function () {
    function RegistroincidenciaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegistroincidenciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroincidenciaPage');
    };
    RegistroincidenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registroincidencia',template:/*ion-inline-start:"C:\Users\BDuchen\Desktop\Dispatch\DispatchFront\src\pages\registroincidencia\registroincidencia.html"*/'<!--\n  Generated template for the RegistroincidenciaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Registro de Incidencias</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cumque repellat? Necessitatibus alias repellendus impedit, consectetur quaerat cupiditate doloribus sequi nisi id atque accusamus accusantium fugit similique porro iusto magni.</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\BDuchen\Desktop\Dispatch\DispatchFront\src\pages\registroincidencia\registroincidencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegistroincidenciaPage);
    return RegistroincidenciaPage;
}());

//# sourceMappingURL=registroincidencia.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/listacasos/listacasos.module": [
		338,
		2
	],
	"../pages/registrodetalles/registrodetalles.module": [
		339,
		1
	],
	"../pages/registroincidencia/registroincidencia.module": [
		340,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml2js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ListacasosPage } from "../listacasos/listacasos";

var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, platform, formBuilder, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.http = http;
        this.data = {};
        this.validation_messages = {
            'phone': [
                { type: 'required', message: 'El Número de celular es obligatorio' },
                { type: 'maxlength', message: 'El Número de celular debe contener 8 caracteres numéricos' },
                { type: 'minlength', message: 'El Número de celular debe contener 8 caracteres numéricos' },
                { type: 'pattern', message: 'El Número de celular no puede contener letras o caracteres especiales' }
            ],
            'pin': [
                { type: 'required', message: 'El pin es obligatorio' },
                { type: 'minlength', message: 'El pin debe contener como mínimo 4 caracteres numéricos' },
                { type: 'pattern', message: 'El pin no puede contener letras o caracteres especiales' }
            ]
        };
        this.credentialsForm = this.formBuilder.group({
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(8),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')
            ])),
            pin: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')
            ]))
        });
        this.data.phone = '';
        this.data.pin = '';
        this.http = http;
    }
    HomePage.prototype.sendForm = function () {
        //var myData=JSON.stringify({phone: this.data.phone,pin: this.data.pin});
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('POST', 'http://10.1.70.145/wsDispatch/Service1.asmx?WSDL', true);
        var soapRequest = 
        // '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">'+
        //     '<Body>'+
        //         '<AndroidLogin xmlns="http://tempuri.org/"'+
        //             '<tel>'+this.data.phone+'</tel>'+
        //             '<pin>'+this.data.pin+'</pin>'+
        //         '</AndroidLogin>'+
        //     '</Body>'+
        // '</Envelope>';
        "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n    <soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n      <soap:Body>\n        <AndroidLogin xmlns=\"http://tempuri.org/\">\n          <tel>" + this.data.phone + "</tel>\n          <pin>" + this.data.pin + "</pin>\n        </AndroidLogin>\n      </soap:Body>\n    </soap:Envelope>";
        xmlHttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
        var auxnav = this; // variable auxiliar para evitar sobreescritura de palabra reservada "this"
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                //alert(xmlHttp.response);  
                var parseString = __WEBPACK_IMPORTED_MODULE_4_xml2js___default.a.parseString;
                parseString(xmlHttp.response, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    //console.log(JSON.stringify(result))
                    var datos = result['soap:Envelope']['soap:Body'][0].AndroidLoginResponse[0].AndroidLoginResult[0];
                    if (datos == "true") {
                        auxnav.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], { phone: auxnav.data.phone });
                    }
                    else {
                        alert("Usuario Invalido, intente de nuevo");
                    }
                });
            }
        };
        xmlHttp.send(soapRequest);
        //console.log(this.data);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\BDuchen\Desktop\Dispatch\DispatchFront\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      Casos Dispatch\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-style">\n  <ion-grid>\n    <br><br><br>\n    <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n        <ion-card>\n          <ion-card-header>\n            Formulario de Ingreso\n          </ion-card-header>\n          <ion-card-content>\n            <form [formGroup]="credentialsForm">\n              <ion-item>\n                <ion-label floating> Número de Celular </ion-label>\n                <ion-input [(ngModel)]="data.phone" [formControl]="credentialsForm.controls[\'phone\']"></ion-input>\n              </ion-item>\n              <div class="validation-errors">\n                <ng-container *ngFor="let validation of validation_messages.phone">\n                  <div style="color: brown" class="error.message" *ngIf="credentialsForm.get(\'phone\').hasError(validation.type) && (credentialsForm.get(\'phone\').dirty || credentialsForm.get(\'phone\').touched)">\n                    {{validation.message}}\n                  </div>\n                </ng-container>\n              </div>\n              <ion-item>\n                <ion-label floating> Número de Pin</ion-label>\n                <ion-input [(ngModel)]="data.pin" [formControl]="credentialsForm.controls[\'pin\']" type="password"></ion-input>\n              </ion-item>\n              <div class="validation-errors">\n                <ng-container *ngFor="let validation of validation_messages.pin">\n                  <div style="color: brown" class="error.message" *ngIf="credentialsForm.get(\'pin\').hasError(validation.type) && (credentialsForm.get(\'pin\').dirty || credentialsForm.get(\'pin\').touched)">\n                    {{validation.message}}\n                  </div>\n                </ng-container>\n              </div>\n              <br>\n              <ion-row>\n                <ion-col text center>\n                  <button (click)="sendForm()" ion-button block color="dark">INGRESAR</button>\n                </ion-col>\n              </ion-row>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-1></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\BDuchen\Desktop\Dispatch\DispatchFront\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listacasos_listacasos__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registroincidencia_registroincidencia__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        console.log(navParams);
        this.phone = navParams.get('phone');
        this.tabCasos = __WEBPACK_IMPORTED_MODULE_1__listacasos_listacasos__["a" /* ListacasosPage */];
        this.tabRegistro = __WEBPACK_IMPORTED_MODULE_2__registroincidencia_registroincidencia__["a" /* RegistroincidenciaPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\BDuchen\Desktop\Dispatch\DispatchFront\src\pages\tabs\tabs.html"*/'  <ion-tabs color="dark">\n    <ion-tab [root]="tabCasos" [rootParams]="phone" tabTitle="Casos" tabIcon="book" ></ion-tab>\n    <ion-tab [root]="tabRegistro"  tabTitle="Registro" tabIcon="create"  ></ion-tab>\n  </ion-tabs>\n'/*ion-inline-end:"C:\Users\BDuchen\Desktop\Dispatch\DispatchFront\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(261);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_listacasos_listacasos__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_registroincidencia_registroincidencia__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_registrodetalles_registrodetalles__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_listacasos_listacasos__["a" /* ListacasosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_registroincidencia_registroincidencia__["a" /* RegistroincidenciaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_registrodetalles_registrodetalles__["a" /* RegistrodetallesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/listacasos/listacasos.module#ListacasosPageModule', name: 'ListacasosPage', segment: 'listacasos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrodetalles/registrodetalles.module#RegistrodetallesPageModule', name: 'RegistrodetallesPage', segment: 'registrodetalles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registroincidencia/registroincidencia.module#RegistroincidenciaPageModule', name: 'RegistroincidenciaPage', segment: 'registroincidencia', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_listacasos_listacasos__["a" /* ListacasosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_registroincidencia_registroincidencia__["a" /* RegistroincidenciaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_registrodetalles_registrodetalles__["a" /* RegistrodetallesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\BDuchen\Desktop\Dispatch\DispatchFront\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\BDuchen\Desktop\Dispatch\DispatchFront\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[240]);
//# sourceMappingURL=main.js.map