import { Component } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private bitcoinService: BitcoinService,
    private router: Router,
    private userService: UserService) {
    const user = this.userService.getUser()
    if(!user) this.router.navigateByUrl('/signup')
  }

  rate: string = ''

  async ngOnInit() {
    this.rate = await this.bitcoinService.getRate()
  }
}
