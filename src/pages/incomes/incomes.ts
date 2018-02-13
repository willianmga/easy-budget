import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-incomes',
  templateUrl: 'incomes.html',
})
export class IncomesPage {

  allIncomes: any[];
  selectedMonthName: any;

  mockedIncomes = [
    {
      id: 1,
      title: 'Salário do mês (Willian)',
      amount: 2200,
      type: 'C',
      accountId: 1,
      tags: ['salary'],
      createdDate: '02/07/2018T12:00:00',
      userName: 'willianmga'
    }, {
      id: 1,
      title: 'Salário do mês (Camila)',
      amount: 1100,
      type: 'C',
      accountId: 1,
      tags: ['salary'],
      createdDate: '02/07/2018T12:05:00',
      userName: 'willianmga'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.selectedMonthName = this.navParams.get('selectedMonthName');
    this.allIncomes = this.mockedIncomes;
  }

}
