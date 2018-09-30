import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model';
import { Portfolio } from '../porfolio.model';
import { StockService } from '../stock.service';
import { Stock } from "../stock.model";
import { NgForm, FormGroup, FormBuilder, FormControl } from '@angular/forms';
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
  addTrans:FormGroup;
  constructor(private transactionService:TransactionService,
              private stockService:StockService,
              private portfolioService:PortfolioService,
              private userStockService:UserStockService,
              private userService:UserService,
              formBuilder:FormBuilder)
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
    this.addTrans=new FormGroup({
      pid: new FormControl(null),
      type:new FormControl(null),
      stockName:new FormControl(null),
      stockPrice:new FormControl(null),
      quantity:new FormControl(null)
    });

  }

  addOn()
  {
    this.add=true;
    // this.transactionId=this.transactionService.getId();
  }

  sListChange()
  {
    console.log('hello detecting changes');
    console.log(this.addTrans.value);
    if(this.addTrans.value.type=='buy')
    {
    this.stockService.getStocks().subscribe(
      (data:Stock[])=>{this.stockList=data;
        console.log(data)
      });
      this.buy=true;
    }
    else
    {
      console.log(this.addTrans.value);

      this.userStockService.getUserStocks(this.addTrans.value.pid).subscribe(
        (data:UserStock[])=>{this.uStockList=data;}
      );
      this.buy=false;
    }

  }
  transAdd()
  {
    console.log(this.addTrans);
    this.t.p_id=this.addTrans.value.pid;
    this.t.type=this.addTrans.value.type;
    this.t.s_name=this.addTrans.value.stockName;
    this.t.price=this.addTrans.value.stockPrice;
    this.t.quantity=this.addTrans.value.quantity;
    this.transactionService.addTransaction(this.t).subscribe(
      (data:any)=>{console.log(data);
        this.transactionService.getTransactions().subscribe(
          (data:Transaction[])=>{this.transactionArr=data;
          console.log('here syncing new')}
        );}
    )
    this.s.s_name=this.addTrans.value.stockName;
    this.s.quantity=this.addTrans.value.quantity;
    this.s.price=this.addTrans.value.stockPrice
    this.s.p_id=this.addTrans.value.pid;
    console.log('updating user stock....')
    this.userStockService.updateUserStock(this.s,this.addTrans.value.type).subscribe(
      (data:any)=>{
        console.log('user stock table updated');
        console.log(data);}
    )
    
    this.add=false;
  }
  
  ngOnChanges()
  {

  }

  deleteOn()
  {
    this.delete=true;
  }
  deleteDone()
  {
    this.delete=false;
    this.transactionService.getTransactions().subscribe(
      (data:Transaction[])=>{this.transactionArr=data;}
    );
  }

}
