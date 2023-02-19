import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  @Input() page!: string
  @Output() switchPage = new EventEmitter<string>

  onSwitchPage(page: string) {
    this.switchPage.emit(page)
  }
}
