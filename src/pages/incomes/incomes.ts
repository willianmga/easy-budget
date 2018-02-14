import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { AddIncomePage } from '../pages'
import { EasyBudgetApi } from '../../providers/app-providers';

@IonicPage()
@Component({
  selector: 'page-incomes',
  templateUrl: 'incomes.html',
})
export class IncomesPage {

  allIncomes: any;
  selectedMonthName: any;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private easyBudgetApi: EasyBudgetApi) {

  }

  ionViewDidLoad() {
    this.selectedMonthName = this.navParams.get('name');

    let loading = this.loadingController.create({
      content: 'Buscando receitas...'
    });

    loading.present().then(() => {

      this.easyBudgetApi.getAllIncomes()
        .then((incomes) => {
          this.allIncomes = incomes;
          loading.dismiss();
        })
        .catch((err) => {

          let toast = this.toastController.create({
            message: 'Falha ao buscar receitas. Tente novamente',
            duration: 3000,
            position: 'bottom'
          });

          loading.dismiss();
          toast.present();
        });

    });

  }

  openIncomeDetails(income) {

    let params = {
      action: 'EDIT',
      income: income,
    };

    this.navCtrl.push(AddIncomePage, params);
  }

  addIncome() {
    this.navCtrl.push(AddIncomePage);
  }

}
