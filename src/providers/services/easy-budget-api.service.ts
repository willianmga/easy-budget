import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class EasyBudgetApi {

  private baseUrl = 'https://easy-budget-ce062.firebaseio.com';

  private loggedUser = {
    id: '3dd50aaf-6b03-4497-b074-d81703f07ee8',
    displayName: 'Willian Azevedo',
    userName: 'willianmga',
    email: 'willian-mga@hotmail.com',
    role: 'PRIMARY',
    status: 'SUCCESS',
    sessionId: 'a9c3f73a-653a-4e12-9c36-3886befc18da'
  };

  constructor(public http: Http) {

  }

  getLoggedUser() {
    return Object.assign({}, this.loggedUser);
  }

  getAllIncomes() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/usersData/${this.loggedUser.id}/incomes.json`)
        .subscribe((response) => {
          resolve(response.json());
        });
    });
  }

  postIncome(income) {
    return new Promise(resolve => {
      this.http.post(`${this.baseUrl}/usersData/${this.loggedUser.id}/incomes.json`, income)
        .subscribe((response) => {

          if (response.status !== 200) {
            throw new Error('status-not-200');
          }

          resolve();
        })
    });
  }

  updateIncome(income) {
    return new Promise(resolve => {
      this.http.put(`${this.baseUrl}/usersData/${this.loggedUser.id}/incomes/${income.id}/.json`, income)
        .subscribe((response) => {

          if (response.status !== 200) {
            throw new Error('status-not-200');
          }

          resolve();
        });
    });
  }

  deleteIncome(incomeId) {
    return new Promise(resolve => {
      this.http.delete(`${this.baseUrl}/usersData/${this.loggedUser.id}/incomes/${incomeId}.json`)
        .subscribe((response) => {

          if (response.status !== 200) {
            throw new Error('status-not-200');
          }

          resolve();
        });
    });
  }

  getAllAccounts() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/usersData/${this.loggedUser.id}/accounts.json`)
        .subscribe((response) => {
          resolve(response.json());
        });
    });
  }

}
