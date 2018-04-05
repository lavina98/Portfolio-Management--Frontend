import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { Portfolio } from '../porfolio.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  plist:Portfolio[];
  constructor(private investmentservice:InvestmentService) { }

  ngOnInit() {
    this.plist=this.investmentservice.getAllPortfolios();
  }

}
