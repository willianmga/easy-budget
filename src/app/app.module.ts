import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage, IncomesPage, OutcomesPage, LoginPage, SigninPage, AddIncomePage, AddOutcomePage } from '../pages/pages';
import { EasyBudgetApi } from '../shared/shared';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IncomesPage,
    OutcomesPage,
    LoginPage,
    SigninPage,
    AddIncomePage,
    AddOutcomePage,
    EasyBudgetApi
  ],
  imports: [
    BrowserModule,
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
    AddOutcomePage,
    EasyBudgetApi
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
