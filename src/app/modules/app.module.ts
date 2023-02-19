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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactIndexComponent,
    ContactDetailsComponent,
    ContactListComponent,
    ContactPreviewComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
