import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../porfolio.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  plist:Portfolio[];
  constructor() { }

  ngOnInit() {
    // this.plist=this.investmentservice.getAllPortfolios();
  }

}
