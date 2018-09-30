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
  disable:Boolean;
  s:UserStock=new UserStock();
  constructor(private router:Router,private transactionService:TransactionService,
              private userStockService:UserStockService) { }

  ngOnInit() {
    this.disable=false;
    console.log(this.transaction);
  }
  deleteItem()
  {
    this.transactionService.deleteTransaction(this.transaction.t_id).subscribe(
      (data:any)=>console.log(data)
    );
    this.s.s_name=this.transaction.s_name;
    this.s.price=this.transaction.price;
    this.s.quantity=this.transaction.quantity;
    this.s.p_id=this.transaction.p_id;
    var type=this.transaction.type;
    if(type=='buy')
        type='sell';
    else
        type='buy';
    this.userStockService.updateUserStock(this.s,type).subscribe(
      (data)=>console.log(data)
    )
    this.disable=true;
  }
}
