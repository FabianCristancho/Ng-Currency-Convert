import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http:HttpClient) { }

  listCurrencies(baseCurrency:string){
    return this.http.get(`https://v6.exchangerate-api.com/v6/c43b24b592a24b05a30a0bbf/latest/${baseCurrency}`)
    .pipe(map(currencie => currencie['conversion_rates']));
  }

  get(baseCurrency:string){
    return this.http.get(`https://v6.exchangerate-api.com/v6/c43b24b592a24b05a30a0bbf/latest/${baseCurrency}`)
    .pipe(map(currencie => currencie['conversion_rates']));
  }

  getCurrencyNames(){
    return this.http.get('https://openexchangerates.org/api/currencies.json');
  }
}
