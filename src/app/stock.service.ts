import { Stock } from './stock.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class StockService
{
    list:Stock[]=[];
    //     new Stock(0,'Cadbury','BSE',2000,'Confectionery'),
    //     new Stock(1,'Reliance','BSE',5000,'Electricity'),
    //     new Stock(2,'Mahindra','BSE',1000,'AutoMobile'),
    //     new Stock(3,'ICICI','BSE',2000,'Banking'),
    //     new Stock(4,'HUL','BSE',3000,'Pharmacy'),
    //     new Stock(5,'TataMotors','BSE',3000,'Automobile'),
    //   ]
     constructor(private http:HttpClient)
     {

     }
      getStocks ()
      {
          return this.http.get('//localhost:8080//api/stocks').map(
              (res:Stock[])=>
          {
              return res;
          });
      }
      getStock(symbol:String)
      {
           return this.http.get('//localhost:8080//api/stocks/'+symbol).map(
               (res:Stock)=>{return res;}
           );
      }
}