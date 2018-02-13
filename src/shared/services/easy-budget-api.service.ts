import { Injectable } from "@angular/core";
import { HTTP } from '@ionic-native/http';

@Injectable
export class EasyBudgetApi {

  private baseUrl = 'http://localhost:8080/easybudget';

  constructor(private http: HTTP) {

  }

}
