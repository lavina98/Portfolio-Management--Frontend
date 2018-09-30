import { Component, OnInit } from '@angular/core';
// import { ApitrialService } from '../apitrial.service';
// import { Chart } from 'chart.js';
 
@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html'
})
export class DonutchartComponent {  

  // constructor(private apitrial: ApitrialService){ }
    // ngOnInit() {
    //   this.apitrial.getPrices()
    //     .subscribe(
    //       (res) => {            
    //         console.log(res); 
    //       }
    //     );
    // } 
    
    public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData:number[] = [350, 450, 100];
    public doughnutChartType:string = 'doughnut';
  

}