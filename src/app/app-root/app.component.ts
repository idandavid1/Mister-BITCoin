import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page = 'home'

  switchPage(page: string) {
    console.log('page:', page)
    this.page = page
  }
}
