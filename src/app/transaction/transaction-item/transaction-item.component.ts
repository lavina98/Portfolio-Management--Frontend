import { Component, OnInit,Input } from '@angular/core';
import { Transaction } from '../../transaction.model';
import { Router } from '@angular/router';
import { TransactionService } from '../../transaction.service';
import { UserStockService } from '../../user-stock.service';
import { UserStock } from '../../user-stock.model';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit {
  @Input() transaction:Transaction;
  @Input() delete:boolean;
  s:UserStock=new UserStock();
  constructor(private router:Router,private transactionService:TransactionService,
              private userStockService:UserStockService) { }

  ngOnInit() {
  }
  deleteItem()
  {
    this.transactionService.deleteTransaction(this.transaction.tId).subscribe();
    //console.log('Deletion Successful');
    if(this.transaction.type==='buy')
    {
       this.userStockService.getUserStockInAPortfolio(this.transaction.portfolioId,this.transaction.sName).
       subscribe( (data:UserStock)=>{this.s=data;})
       this.userStockService.deleteUserStock(this.transaction.portfolioId,this.s.sId).subscribe();
       this.s.quantity-=this.transaction.quantity;
       if(this.s.quantity>0)
            this.userStockService.addUserStock(this.s,this.transaction.portfolioId).subscribe();
    }
}
}
