import { Routes, RouterModule } from "@angular/router";
import { NgModule, Component } from "@angular/core";
import { StockListComponent } from "./stock-list/stock-list.component";
import { HomeComponent } from "./home/home.component";
import { StockDetailComponent } from "./stock-list/stock-detail/stock-detail.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TransactionComponent } from "./transaction/transaction.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LandingComponent } from "./landing/landing.component";
const approutes:Routes=[
      {path:'',component:LandingComponent},
    // {path:'register',component:RegisterComponent},
    {path:'portfolio',component:HomeComponent},
    {path:'portfolio/:pid',component:PortfolioComponent},
    {path:'stocks' ,component:StockListComponent ,
            children:[{path:':id',component:StockDetailComponent}]
    },
    {path:'transaction' ,component:TransactionComponent },
    { path: 'landing' , component:LandingComponent}
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