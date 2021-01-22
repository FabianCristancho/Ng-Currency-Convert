import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencies = [];
  pathImages:string[] = [];

  constructor(private currencyService:CurrencyService) { 
    this.currencyService.getCurrencyNames()
    .subscribe((data:any) => {
      this.currencies = Object.entries(data);
      this.addImages();
    })
  }

  ngOnInit(): void {
  }

  addImages(){
    for (let i = 0; i < this.currencies.length; i++) {
      this.currencies[i][3] = "assets/" +Math.floor(Math.random() * (20)) +".png";
    }
  }

}
