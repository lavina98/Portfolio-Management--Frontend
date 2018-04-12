import { Component, OnInit,Input } from '@angular/core';
import { Transaction } from '../../transaction.model';
import { Router } from '@angular/router';
import { TransactionService } from '../../transaction.service';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit {
  @Input() transaction:Transaction;
  @Input() delete:boolean;
  constructor(private router:Router,private transactionService:TransactionService) { }

  ngOnInit() {
  }
  deleteItem()
  {
    this.transactionService.deleteTransaction(this.transaction.tId).subscribe();
    console.log('Deletion Successful');
    
  }
}
