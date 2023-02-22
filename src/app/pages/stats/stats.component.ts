import { Component } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Data } from '../../models/graph.model'

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  constructor(private bitcoinService : BitcoinService) {}
  prices !: Data
  async ngOnInit() {
    this.prices = await this.bitcoinService.getMarketPrice()
  }
}
