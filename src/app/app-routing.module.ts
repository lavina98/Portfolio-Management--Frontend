import { Routes, RouterModule } from "@angular/router";
import { NgModule, Component } from "@angular/core";
import { StockListComponent } from "./stock-list/stock-list.component";
import { HomeComponent } from "./home/home.component";
import { StockDetailComponent } from "./stock-list/stock-detail/stock-detail.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TransactionComponent } from "./transaction/transaction.component";
import { TransactionDetailComponent } from "./transaction/transaction-detail/transaction-detail.component";
const approutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'portfolio/:pid',component:PortfolioComponent},
    {path:'stocks' ,component:StockListComponent ,
            children:[{path:':id',component:StockDetailComponent}]
    },
    {path:'transaction' ,component:TransactionComponent,
            children:[{path:':tId',component:TransactionDetailComponent}]
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