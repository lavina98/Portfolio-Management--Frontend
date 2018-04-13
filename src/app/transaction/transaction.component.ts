import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model';
import { Portfolio } from '../porfolio.model';
import { StockService } from '../stock.service';
import { Stock } from "../stock.model";
import { NgForm } from '@angular/forms';
import { PortfolioService } from '../portfolio.service';
import { UserService } from '../user.service';
import { UserStockService } from '../user-stock.service';
import { UserStock } from '../user-stock.model';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  add:boolean;
  edit:boolean;
  delete:boolean;
  next:boolean;
  transactionId:number;
  buy:boolean;
  transactionArr:Transaction[]=[];
  portfolioList:Portfolio[]=[];
  stockList:Stock[]=[];
  x:number;
  uStockList:UserStock[]=[];
  t:Transaction=new Transaction();
  s:UserStock=new UserStock();
  constructor(private transactionService:TransactionService,
              private stockService:StockService,
              private portfolioService:PortfolioService,
              private userStockService:UserStockService,
              private userService:UserService)
   {

   }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(
      (data:Transaction[])=>{this.transactionArr=data;}
    );
    //this.stocksArr=this.stockService.getStocks();
    this.portfolioService.getAllPortfolios().subscribe(
      (data:Portfolio[])=>{this.portfolioList=data;}
    );
    
      
  }
  addOn()
  {
    this.add=true;
    // this.transactionId=this.transactionService.getId();
  }
  addmidDone(f:NgForm)
  {
      console.log(f);
      this.t.portfolioId=f.value.pid;
      this.t.type=f.value.type;
      if(f.value.type==='buy')
      {
          this.stockService.getStocks().subscribe(
            (data:Stock[])=>{this.stockList=data;
              console.log(data);}
          );
          this.buy=true;
          
      }
      else
      {
        this.userStockService.getAllUserStocks(f.value.pid).subscribe(
          (data:UserStock[])=>{
            this.uStockList=data;
          console.log(data);}
        );
        this.buy=false;
      }

      
     this.next=true;
  }
  addDone(f:NgForm)
  {
      this.t.price=f.value.price;
      this.t.quantity=f.value.quantity;
      if(this.buy==true)
      {
          this.t.sName=f.value.stock;
          this.s.sName=f.value.stock;
          this.s.buyingPrice=f.value.price;
          this.s.quantity=f.value.quantity;
          this.transactionService.addTransaction(this.t).subscribe(
           (_)=>{ this.transactionService.getTransactions().subscribe(
              (data:Transaction[])=>{this.transactionArr=data;}
            );}
          );
          this.userStockService.addUserStock(this.s,this.t.portfolioId).subscribe();
      }
      else
      {
        this.t.sName=f.value.ustock;
        this.transactionService.addTransaction(this.t).subscribe(
          (_)=>{ this.transactionService.getTransactions().subscribe(
            (data:Transaction[])=>{this.transactionArr=data;}
          );}
        );
        this.userStockService.getUserStockInAPortfolio(this.t.portfolioId,f.value.ustock).subscribe(
          (data:UserStock)=>{this.s=data;
            console.log(this.s);
             this.s.quantity-=f.value.quantity;
             this.userStockService.deleteUserStock(this.t.portfolioId,this.s.sId).subscribe();
             if(this.s.quantity>0)
                this.userStockService.addUserStock(this.s,this.t.portfolioId).subscribe();
          });
        }
        this.next=false;
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
