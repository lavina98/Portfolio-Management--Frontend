import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from '../../porfolio.model';
import { Router } from '@angular/router';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {

  @Input() portfolio:Portfolio;
  @Input() delete:boolean;
  constructor(private router:Router,private investmentService:InvestmentService) { }

  ngOnInit() {
  }
  pathChange()
  {
      this.router.navigate(['/portfolio',this.portfolio.id]);
  }
  deletePortfolio()
  {
      this.investmentService.deletePortfolio(this.portfolio.id);
  }
}
