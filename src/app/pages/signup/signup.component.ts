import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user!: User

  constructor(
    private userService: UserService,
    private router: Router,) {}

  ngOnInit(): void {
    this.user = this.userService.getEmptyUser()
  }

  onLogin() {
      this.userService.login(this.user)
      this.router.navigateByUrl('/')
  }
}
