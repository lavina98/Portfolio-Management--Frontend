import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  constructor(
    private portfolioService:PortfolioService,
    private ref: ChangeDetectorRef  
  ) { }

  ngOnInit() {
    this.portfolioService.getAllPortfolios().subscribe(
      (data:Portfolio[])=>{
      this.portfolioList=data;
      console.log('in home component all portfolios');
      console.log(this.portfolioList);
    });
    // this.portfolioService.calculateNetworth(this.portfolio.pId).subscribe(
    //   (data:number)=>{this.portfolio.pWor000000000000000000000000th=data;}
    // )
      
  }
  createPortfolio()
  {
      this.create=true;
  }
  createP(form:NgForm)
  {
    console.log(form);
    this.p.p_name=form.value.pname;
    this.p.p_worth=0;
    console.log(this.p);
    this.portfolioService.addPortfolio(this.p).subscribe((_) => {
      this.portfolioService.getAllPortfolios().subscribe(
        (data:Portfolio[])=>{
          this.portfolioList=data;
          // this.ref.detectChanges();
        }
      );
    });
    this.create=false;
  }
  deletePortfolio()
  {
    this.delete=true;
  }
  deleteDone()
  {
    this.delete=false;
    this.portfolioService.getAllPortfolios().subscribe(
      (data:Portfolio[])=>{
        this.portfolioList=data;
        // this.ref.detectChanges();
      }
    );

    



  }
  ngOnDestroy()
  {
      
  }
}
