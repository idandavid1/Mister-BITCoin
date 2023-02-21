import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  user!: User

  constructor(private userService: UserService){
    this.user = this.userService.getUser()
  }

}
