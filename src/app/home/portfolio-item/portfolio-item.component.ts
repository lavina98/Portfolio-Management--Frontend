import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Portfolio } from '../../porfolio.model';
import { Router } from '@angular/router';
import { PortfolioService } from '../../portfolio.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {

  @Input() portfolio:Portfolio;
  @Input() delete:boolean;
  constructor(private router:Router, private portfolioService:PortfolioService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
      this.portfolioService.calculateNetworth(this.portfolio.pId).subscribe(
        (data:number)=>{this.portfolio.pWorth=data;}
      )
  }
  pathChange()
  {
      this.router.navigate(['/portfolio',this.portfolio.pId]);
  }
  deletePortfolio()
  {
      this.portfolioService.deletePortfolio(this.portfolio.pId).subscribe(
        (_)=>{this.ref.detectChanges();}
      );
  }
}
