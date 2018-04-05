import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Transaction } from '../../transaction.model';
import { TransactionService } from '../../transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  t:Transaction;
  id:number;
  constructor(private active:ActivatedRoute,private transactionService:TransactionService) { }

  ngOnInit() {
    this.id=+this.active.snapshot.params['tId'];
    this.t=this.transactionService.getTransaction(this.id);
    this.active.params.subscribe(
      (param:Params)=>{
        this.id=+param['tId'];
        this.t=this.transactionService.getTransaction(this.id);
      }
    );
  }
  
}
