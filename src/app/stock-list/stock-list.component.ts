import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock.model';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  list:Stock[]=[];
  constructor(private stockService:StockService) { }

  ngOnInit() {
    this.stockService.getStocks().subscribe(
      (data:Stock[])=>{this.list=data;}
    );
  }
  //getAllStocks()
  // {
    
  // } 

}
