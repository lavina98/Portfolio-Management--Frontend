import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model';
import { InvestmentService } from '../investment.service';
import { Portfolio } from '../porfolio.model';
import { StockService } from '../stock.service';
import { Stock } from "../stock.model";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  add:boolean;
  edit:boolean;
  delete:boolean;
  transactionId:number;
  transactionArr:Transaction[]=[];
  portfolioArr:Portfolio[]=[];
  stocksArr:Stock[];
  stock:Stock;
  portfolio:Portfolio;
  constructor(private transactionService:TransactionService,private investmentService:InvestmentService,
  private stockService:StockService)
   {

   }

  ngOnInit() {
    this.transactionArr=this.transactionService.getTransactions();
    this.portfolioArr=this.investmentService.getAllPortfolios();
    this.stocksArr=this.stockService.getStocks();

  }
  addOn()
  {
    this.add=true;
    this.transactionId=this.transactionService.getId();
  }
  addDone(f:NgForm)
  {
      //console.log(f);
      this.stock=this.stockService.getStock(f.value.stock);
      this.transactionService.addTransaction(f.value.pid,f.value.type,this.stock,f.value.price,f.value.quantity);
      this.add=false;
  }
  deleteOn()
  {
    this.delete=true;
  }
  deleteDone(f:NgForm)
  {
    this.delete=false;
  }

}
