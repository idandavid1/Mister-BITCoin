import { Component } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private bitcoinService: BitcoinService) {
  }

  rate: string = ''

  async ngOnInit() {
    this.rate = await this.bitcoinService.getRate()
  }
}
