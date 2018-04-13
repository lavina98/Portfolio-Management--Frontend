import { Component, OnInit, Input } from '@angular/core';
import { UserStock } from '../../user-stock.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-userstockitem',
  templateUrl: './userstockitem.component.html',
  styleUrls: ['./userstockitem.component.css']
})
export class UserstockitemComponent implements OnInit {
  @Input() currUserStock:UserStock;
  portfolioId:number;
  constructor(private active:ActivatedRoute) { }

  ngOnInit() {
    // this.portfolioId=+this.active.snapshot.params['pid'];
    // this.active.params.subscribe(
    //   (param:Params)=>
    //   {
    //     this.portfolioId=+param['pid'];
    //   }
    // )
  }

}
