import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {

  convertGroup:string[] = [];
  valueBase:string ='';
  baseCurrency:string ='COP';
  convertedCurrency:string ='COP';
  valueConvert:string = '';

  constructor(private currencyService: CurrencyService) {
    this.currencyService.listCurrencies('COP')
      .subscribe(data => {
        this.convertGroup = Object.keys(data);
      })
   }

  ngOnInit(): void {
  }

  convertCurrency(){
    this.getConvert(this.baseCurrency, this.convertedCurrency);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 45 || charCode > 57));
  }

  changeBase(value){
    this.baseCurrency = value;
    this.getConvert(this.baseCurrency, this.convertedCurrency);
    console.log(this.baseCurrency);
  }
  
  changeConvert(value){
    this.convertedCurrency = value;
    this.getConvert(this.baseCurrency, this.convertedCurrency);
    console.log(this.convertedCurrency);
  }

  getConvert(base:string, conv:string){
    this.currencyService.get(base)
    .subscribe(data => {
      let total = +this.valueBase * data[`${conv}`];
      this.valueConvert = ''+total;
    })
  }

  clearBase(){
    this.valueBase = '';
    this.valueConvert = '0';
  }

}
