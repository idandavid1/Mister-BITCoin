import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app-root/app.component';
import { HomeComponent } from '../pages/home/home.component';
import { ContactIndexComponent } from '../pages/contact-index/contact-index.component';
import { ContactDetailsComponent } from '../pages/contact-details/contact-details.component';
import { ContactListComponent } from '../cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from '../cmps/contact-preview/contact-preview.component';
import { AppHeaderComponent } from '../cmps/app-header/app-header.component';
import { ContactFilterComponent } from '../cmps/contact-filter/contact-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactIndexComponent,
    ContactDetailsComponent,
    ContactListComponent,
    ContactPreviewComponent,
    AppHeaderComponent,
    ContactFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
