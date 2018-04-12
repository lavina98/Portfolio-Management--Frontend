import { Component, OnInit,Input } from '@angular/core';
import { Stock } from '../../stock.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  @Input() currstock:Stock;
  add:boolean;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  changePath()
  {
    this.router.navigate(['/stocks',this.currstock.symbol]);
  }

}
