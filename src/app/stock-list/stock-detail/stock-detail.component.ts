import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Stock } from '../../stock.model';
import { StockService } from '../../stock.service';
@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  currstock:Stock;
  no:number;
  constructor(private currRoute:ActivatedRoute,private stockService:StockService) { }

  ngOnInit() {
    this.no=+this.currRoute.snapshot.params['id'];
    this.currstock=this.stockService.getStock(this.no);
    this.currRoute.params.subscribe(
      (param:Params)=>{
        this.no=+param['id'];
        this.currstock=this.stockService.getStock(this.no);
      }
    );
   
  }

}
