import { Component, OnInit } from '@angular/core';
import { Portfolio } from "../porfolio.model";
import { NgForm } from '@angular/forms';
import { PortfolioService } from '../portfolio.service';
import 'rxjs/Rx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  create:boolean;
  delete:boolean;
  portfolioList:Portfolio[];
  id:number;
  p:Portfolio=new Portfolio();
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getAllPortfolios().subscribe(
      (data:Portfolio[])=>{this.portfolioList=data;}
    );
      
  }
  createPortfolio()
  {
      this.create=true;
  }
  createP(form:NgForm)
  {
    console.log(form);
    this.p.pName=form.value.pname;
    this.p.pWorth=0;
    console.log(this.p);
    this.portfolioService.addPortfolio(this.p).subscribe();
    this.create=false;
  }
  deletePortfolio()
  {
    this.delete=true;
  }
  deleteDone()
  {
    this.delete=false;
  }
  ngOnDestroy()
  {
      
  }
}
