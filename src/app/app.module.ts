import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { StatsComponent } from './pages/stats/stats.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { AvgMonthsChartComponent } from './cmps/avg-months-chart/avg-months-chart.component';
import { MarketPriceChartComponent } from './cmps/market-price-chart/market-price-chart.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactIndexComponent,
    ContactDetailsComponent,
    ContactListComponent,
    ContactEditComponent,
    ContactPreviewComponent,
    AppHeaderComponent,
    ContactFilterComponent,
    StatsComponent,
    AvgMonthsChartComponent,
    MarketPriceChartComponent,
    SignupComponent,
    TransferFundComponent,
    MoveListComponent,
    MovePreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
