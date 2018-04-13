import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { Portfolio } from '../porfolio.model';
import { OverallPortDataService } from '../overall-port-data.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
      // Pie
    public pieChartLabels:string[]=[];
    // = ['PId: 1', 'PId: 2', 'PId: 3'];
    public pieChartData:number[]=[]; 
    // = [300, 500, 250];
    public pieChartType:string = 'pie';
   
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }
  
  constructor(private port:PortfolioService, private overallPortData: OverallPortDataService) { }

  ngOnInit() {
    this.overallPortData.getIds().subscribe(
      (data:any) => { this.pieChartLabels = data;}
    );

    this.overallPortData.getNetWorth().subscribe(
      (data:any) => { this.pieChartData = data;}
    );
  }

}
