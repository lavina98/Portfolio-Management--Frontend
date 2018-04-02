import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { UserStock } from '../user-stock.model';
import { Portfolio } from '../porfolio.model';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio:Portfolio=null;
  id:number=0;
  edit:boolean;
  constructor(private portfolioService:PortfolioService,private active:ActivatedRoute) {
    
   }

  ngOnInit() {
    this.id=+this.active.snapshot.params['pid'];
    this.portfolio=this.portfolioService.getPortfolio(this.id);
    this.active.params.subscribe(
      (param:Params)=>{
        this.id=+param['pid'];
        this.portfolio=this.portfolioService.getPortfolio(this.id);
      }
    );
    console.log(this.portfolio);
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
