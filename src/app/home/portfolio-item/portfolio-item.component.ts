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

  @Input() portfolio: Portfolio;
  @Input() delete: boolean;
  disable:boolean;
  constructor(private router: Router, private portfolioService: PortfolioService,
    private ref: ChangeDetectorRef) { }
  ngOnInit() {
    this.portfolioService.calculateNetworth(this.portfolio.p_id).subscribe(
      (data: any) => {
        this.portfolio.p_worth = data.val;
        console.log('calculated portfolio net worth');
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
    this.disable=false;
  }
  pathChange() {
    this.router.navigate(['/portfolio', this.portfolio.p_id]);
  }
  deletePortfolio() {
    this.portfolioService.deletePortfolio(this.portfolio.p_id).subscribe(
      (res) => { 
        console.log('porfolio delete status'+res);
        // this.ref.detectChanges();
        this.disable=true;
      });
  }
}

