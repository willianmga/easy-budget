import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IncomesPage, OutcomesPage, AddIncomePage, AddOutcomePage } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  summary = {
    totalBalance: 50,
    totalIncomes: 100,
    totalOutcomes: 50,
    month: {
      month: 2,
      name: 'Fevereiro',
    }
  };

  constructor(public navController: NavController) {

  }

  addIncome() {
    this.navController.push(AddIncomePage);
  }

  addOutcome() {
    this.navController.push(AddOutcomePage);
  }

  openIncomes() {
    this.navController.push(IncomesPage, this.summary.month);
  }

  openOutcomes() {
    this.navController.push(OutcomesPage);
  }

}
