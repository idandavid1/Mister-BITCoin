import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnDestroy  {
  user!: User
  subscription!: Subscription

  constructor(
    private userService: UserService,
    private router: Router){
      this.user = this.userService.getUser()
  }

  ngOnInit() {
    this.subscription = this.router.events.subscribe(() => {
      this.user = this.userService.getUser()
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
