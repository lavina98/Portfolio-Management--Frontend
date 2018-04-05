import { Component, OnInit,Input } from '@angular/core';
import { Transaction } from '../../transaction.model';
import { Router } from '@angular/router';
import { InvestmentService } from '../../investment.service';
import { TransactionService } from '../../transaction.service';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit {
  @Input() transaction:Transaction;
  @Input() delete:boolean;
  constructor(private router:Router,private investmentService:InvestmentService,
              private transactionServise:TransactionService) { }

  ngOnInit() {
  }
  pathChange()
  {
      this.router.navigate(['\transaction',this.transaction.transactionId]);
  }
  deleteItem()
  {
    console.log('Deletion Successful');
    this.transactionServise.deleteTransaction(this.transaction.transactionId);
    this.investmentService.deleteStock(this.transaction.portfolioId,this.transaction.stock.id,
      this.transaction.quantity)
  }
}
