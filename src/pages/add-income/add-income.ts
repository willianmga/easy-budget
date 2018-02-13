import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { EasyBudgetApi } from '../../providers/app-providers';

@IonicPage()
@Component({
  selector: 'page-add-income',
  templateUrl: 'add-income.html',
})
export class AddIncomePage {

  private insertState: boolean = true;
  private currentIncome: any = {};
  private accounts: any;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private easyBudgetApi: EasyBudgetApi) {

    this.insertState = (this.navParams.get('action') !== 'EDIT');

    if (!this.insertState) {
      this.currentIncome = Object.assign({}, this.navParams.get('income'));
    }

  }

  ionViewDidLoad() {

    this.easyBudgetApi.getAllAccounts()
      .then((accounts) => {
        this.accounts = accounts;
      });

  }

  saveOrUpdate() {

    if (this.insertState) {
      this.insertIncome(this.currentIncome);
    } else {
      this.updateIncome(this.currentIncome);
    }

    this.navCtrl.pop();

  }

  private insertIncome(income) {

    let loading = this.loadingController.create({
      content: 'Gravando Receita...'
    });

    loading.present().then(() => {

      this.easyBudgetApi.postIncome(123, income)
        .then(() => {

          let toast = this.toastController.create({
            message: 'Receita adicionada com sucesso',
            duration: 3000,
            position: 'bottom'
          });

          loading.dismiss();
          toast.present();

        })
        .catch((err) => {

          let toast = this.toastController.create({
            message: 'Falha ao adicionar Receita. Tente novamente',
            duration: 3000,
            position: 'bottom'
          });

          loading.dismiss();
          toast.present();

        });

    });

  }

  private updateIncome(income) {

    let loading = this.loadingController.create({
      content: 'Atualizando Receita...'
    });

    loading.present().then(() => {

      this.easyBudgetApi.updateIncome(123, income)
        .then(() => {

          let toast = this.toastController.create({
            message: 'Receita atualizada com sucesso',
            duration: 3000,
            position: 'bottom'
          });

          loading.dismiss();
          toast.present();

        })
        .catch((err) => {

          let toast = this.toastController.create({
            message: 'Falha ao atualizar Receita. Tente novamente',
            duration: 3000,
            position: 'bottom'
          });

          loading.dismiss();
          toast.present();

        });

    });

  }

  goBack() {
    this.navCtrl.pop();
  }

}
