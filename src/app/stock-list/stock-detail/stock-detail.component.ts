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
  sy:String;
  constructor(private currRoute:ActivatedRoute,private stockService:StockService) { }

  ngOnInit() {
    this.sy=this.currRoute.snapshot.params['id'];
   this.stockService.getStock(this.sy).subscribe(
    (data:Stock) =>{this.currstock=data});
    this.currRoute.params.subscribe(
      (param:Params)=>{
        this.sy=param['id'];
        this.stockService.getStock(this.sy).subscribe(
          (data:Stock) =>{this.currstock=data});
      }
    );
   
  }

}
