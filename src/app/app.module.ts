import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockItemComponent } from './stock-list/stock-item/stock-item.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { StockDetailComponent } from './stock-list/stock-detail/stock-detail.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { StockService } from './stock.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UserstockitemComponent } from './portfolio/userstockitem/userstockitem.component';
import { PortfolioItemComponent } from './home/portfolio-item/portfolio-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HeaderComponent } from './header/header.component';
import { ChartsModule } from 'ng2-charts';
import { CharttestComponent } from './charttest/charttest.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionItemComponent } from './transaction/transaction-item/transaction-item.component';
import { TransactionService } from './transaction.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { RegisterComponent } from './register/register.component';
import { PortfolioService } from './portfolio.service';
import { UserStockService } from './user-stock.service';
import { PiechartComponent } from './piechart/piechart.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { LandingComponent } from './landing/landing.component';
import { OverallPortDataService } from './overall-port-data.service';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StockListComponent,
    StockItemComponent,
    HomeComponent,
    StockDetailComponent,
    PortfolioComponent,
    UserstockitemComponent,
    PortfolioItemComponent,
    DropdownDirective,
    HeaderComponent,
    CharttestComponent,
    TransactionComponent,
    TransactionItemComponent,
    LoginComponent,
    RegisterComponent,
    PiechartComponent,
    DonutchartComponent,
    LandingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    HttpClientModule
    
  ],
  providers: [StockService,
    TransactionService,
    UserService,
  PortfolioService,
  UserStockService,
  OverallPortDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
