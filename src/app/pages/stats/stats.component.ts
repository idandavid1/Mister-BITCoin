import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  constructor(
    private router: Router,
    private userService: UserService) {
    const user = this.userService.getUser()
    if(!user) this.router.navigateByUrl('/signup')
   }

}
