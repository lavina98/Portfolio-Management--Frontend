import { Component, OnInit } from '@angular/core';
import { UserStock } from '../user-stock.model';
import { Portfolio } from '../porfolio.model';
import {ActivatedRoute, Params} from '@angular/router';
import { UserStockService } from '../user-stock.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  pid:number=0;
  edit:boolean;
  listOfuStocks:UserStock[]=[];
  p:Portfolio ;
  constructor(private active:ActivatedRoute,private userStockService:UserStockService) {
    
   }

  ngOnInit() {
    this.pid=+this.active.snapshot.params['pid'];
    // this.portfolio=this. investmentService.getPortfolio(this.id);
    this.active.params.subscribe(
      (param:Params)=>{
        this.pid=+param['pid'];
        // this.portfolio=this. investmentService.getPortfolio(this.id);
      }
    );
    this.userStockService.getAllUserStocks(this.pid).subscribe(
      (data:UserStock[])=>{this.listOfuStocks=data;}
    );
  }
  editEnable()
  {
    this.edit=true;
  }
  editDisable()
  {
    this.edit=false;
  }
 

}
