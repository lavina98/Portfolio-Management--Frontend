import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { Portfolio } from "../porfolio.model";
import { NgForm } from '@angular/forms';
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
  constructor(private investmentService:InvestmentService) { }

  ngOnInit() {
    this.portfolioList=this.investmentService.getAllPortfolios();
  }
  createPortfolio()
  {
      this.create=true;
  }
  createP(form:NgForm)
  {
     this.id=form.value.pId;
     this.investmentService.addPortfolio(this.id);
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
}
