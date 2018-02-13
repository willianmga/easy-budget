import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage, IncomesPage, OutcomesPage, LoginPage, SigninPage, AddIncomePage, AddOutcomePage } from '../pages/pages';
import { EasyBudgetApi } from '../providers/app-providers';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IncomesPage,
    OutcomesPage,
    LoginPage,
    SigninPage,
    AddIncomePage,
    AddOutcomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IncomesPage,
    OutcomesPage,
    LoginPage,
    SigninPage,
    AddIncomePage,
    AddOutcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EasyBudgetApi,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
