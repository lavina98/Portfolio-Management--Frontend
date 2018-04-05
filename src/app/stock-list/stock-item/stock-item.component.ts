import { Component, OnInit,Input } from '@angular/core';
import { Stock } from '../../stock.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  @Input() currstock:Stock;
  add:boolean;
  constructor(private router:Router,private investmentService:InvestmentService) { }

  ngOnInit() {
  }

  changePath()
  {
    this.router.navigate(['/stocks',this.currstock.id]);
  }

}
