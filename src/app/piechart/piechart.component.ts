import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { Portfolio } from '../porfolio.model';
import { OverallPortDataService } from '../overall-port-data.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
      // Pie
      pieChartOptions = {
        responsive: true
    }
    public pieChartLabels:string[]=[];
     
    public pieChartData:number[]=[];

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }
  
  constructor(private port:PortfolioService, private overallPortData: OverallPortDataService,
              private userService:UserService) { }

  ngOnInit() {
   
    // this.port.getPortfolioNames(this.userService.getUser()).subscribe(
    //   (data:any)=>{
    //     console.log(data);
    //     this.pieChartLabels=data;
    //   }
    // )
    // this.port.getPortfolioWorths(this.userService.getUser()).subscribe(
    //   (data:any)=>{
    //     console.log(data);
    //     this.pieChartData=data;
    //   }
    // )
    }
  

}
