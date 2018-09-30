import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock.model';
import { StockService } from '../stock.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  list:Stock[]=[];
  constructor(private stockService:StockService,
              private http:HttpClient) { }

  ngOnInit() {
    this.stockService.getStocks().subscribe(
      (data:Stock[])=>{
       console.log(data);
            this.list=data;
            
          }
        );
  }
  //getAllStocks()
  // {
    
  // } 

}
