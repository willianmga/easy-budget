import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage, IncomesPage, OutcomesPage, LoginPage } from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  appName = "Easy-Budget";
  rootPage: any = HomePage;

  public loggedUser = {
    id: 1,
    displayName: 'Willian Azevedo',
    userName: 'willianmga',
    email: 'willian-mga@hotmail.com',
    role: 'PRIMARY',
    status: 'SUCCESS',
    sessionId: 'a9c3f73a-653a-4e12-9c36-3886befc18da'
  };

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openHome() {
    this.nav.popToRoot();
  }

  openIncomes() {
    this.nav.push(IncomesPage);
  }

  openOutcomes() {
    this.nav.push(OutcomesPage);
  }

  exitApplication() {
    this.nav.push(LoginPage, { action: 'exit' });
  }

}
