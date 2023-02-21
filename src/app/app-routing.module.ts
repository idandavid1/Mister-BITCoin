import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { HomeComponent } from './pages/home/home.component';
import { StatsComponent } from './pages/stats/stats.component';
import { ContactResolver } from './services/contact.resolver';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  {
    path: 'contact/edit/:contactId', component: ContactEditComponent,
    resolve: { contact: ContactResolver }
  },
  { path: 'contact/edit', component: ContactEditComponent },
  {
    path: 'contact/:contactId',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolver }
  },
  { path: 'contact', component: ContactIndexComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment?.production })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
