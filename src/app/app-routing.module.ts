import { Routes, RouterModule } from "@angular/router";
import { NgModule, Component } from "@angular/core";
import { StockListComponent } from "./stock-list/stock-list.component";
import { HomeComponent } from "./home/home.component";
import { StockDetailComponent } from "./stock-list/stock-detail/stock-detail.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
const approutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'portfolio/:pid',component:PortfolioComponent},
    {path:'stocks' ,component:StockListComponent ,
            children:[{path:':id',component:StockDetailComponent}]
    }
];
@NgModule({

    imports:[
        RouterModule.forRoot(approutes)],
    exports:[
        RouterModule
    ]
})


export class AppRoutingModule
{
    
}