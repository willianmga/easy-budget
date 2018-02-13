import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class EasyBudgetApi {

  private baseUrl = 'https://easy-budget-ce062.firebaseio.com';

  mockedIncomes = [{
      id: 1,
      title: 'Salário do mês (Willian)',
      amount: 2200,
      type: 'C',
      accountId: 1,
      tags: ['salary'],
      createdDate: '02/07/2018T12:00:00',
      userId: 1
    }, {
      id: 1,
      title: 'Salário do mês (Camila)',
      amount: 1100,
      type: 'C',
      accountId: 1,
      tags: ['salary'],
      createdDate: '02/07/2018T12:05:00',
      userId: 1
    }
  ];

  constructor(public http: Http) {

  }

  getAllIncomes(userId) {
    return new Promise(resolve => {
      return this.http.get(`${this.baseUrl}/usersData/${userId}/incomes.json`)
        .subscribe((response) => {
          resolve(response.json());
        });
    });
  }

  postIncome(userId, income) {

    return new Promise(resolve => {
      this.mockedIncomes.push(income);
      resolve();
    });

  }

  updateIncome(userId, income) {

    return new Promise(resolve => {

      const index = this.mockedIncomes.findIndex(obj => obj.id === income.id);

      if (index === -1) {
        throw new Error('object-not-found');
      }

      this.mockedIncomes[index] = income;

      resolve();
    });

  }

  deleteIncome(userId, income) {

    return new Promise(resolve => {

      const index = this.mockedIncomes.findIndex(obj => obj.id === income.id);

      if (index === -1) {
        throw new Error('object-not-found');
      }

      this.mockedIncomes.splice(index, 1);

      resolve();
    });

  }

  getAllAccounts() {
    return new Promise(resolve => {

      const mockedAccounts = [
        {
          id: 1,
          name: 'Conta familiar',
          createdDate: '02/07/2018T12:00:00',
          userName: 'willianmga'
        }
      ];

      return resolve(mockedAccounts);

    });
  }

}
