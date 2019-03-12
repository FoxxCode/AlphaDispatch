import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from "@angular/forms";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListacasosPage } from "../pages/listacasos/listacasos";
import { RegistroincidenciaPage } from "../pages/registroincidencia/registroincidencia";
import { TabsPage } from "../pages/tabs/tabs";
import { RegistrodetallesPage } from "../pages/registrodetalles/registrodetalles";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListacasosPage,
    RegistroincidenciaPage,
    TabsPage,
    RegistrodetallesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListacasosPage,
    RegistroincidenciaPage,
    TabsPage,
    RegistrodetallesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
