import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from '../../porfolio.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {

  @Input() portfolio:Portfolio;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  pathChange()
  {
      this.router.navigate(['/portfolio',this.portfolio.id]);
  }
}
