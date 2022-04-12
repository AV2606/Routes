import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  BTCUSD=0;
  ETHUSD=0;

  constructor(private httpClient:HttpClient) {
    this.apiGet();
   }

  ngOnInit(): void {
  }
  apiGet(){
    this.httpClient.get('https://api.n.exchange/en/api/v1/get_price/ETHUSD/').subscribe(
    (value:any)=>{
      this.ETHUSD=value.price;
    }
    );
    this.httpClient.get('https://api.n.exchange/en/api/v1/get_price/BTCUSD/').subscribe(
    (value:any)=>{
      this.BTCUSD=value.price;
    }
    );
  }

}
