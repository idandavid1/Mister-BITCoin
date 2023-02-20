import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { ContactIndexComponent } from '../pages/contact-index/contact-index.component';
import { HomeComponent } from '../pages/home/home.component';
import { StatsComponent } from '../pages/stats/stats.component';

const routes: Routes = [
  {path:'' , component: HomeComponent },
  {path:'contact' , component: ContactIndexComponent },
  {path:'stats' , component: StatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: environment?.production })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
