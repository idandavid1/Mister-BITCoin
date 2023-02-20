import { Component } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Chart, registerables } from 'chart.js';
import { Value } from 'src/app/models/graph.model';
Chart.register(...registerables);


@Component({
  selector: 'market-price-chart',
  templateUrl: './market-price-chart.component.html',
  styleUrls: ['./market-price-chart.component.scss']
})
export class MarketPriceChartComponent {
  constructor(private bitcoinService: BitcoinService) { }

  async ngOnInit() {
    let prices = await this.bitcoinService.getMarketPrice()
    prices = prices.values.splice(prices.values.length - 30)
    var marketPrice = new Chart("market-price", {
      type: 'line',
      data: {
        labels: this.getDates(prices),
        datasets: [{
          label: 'Market Price last 30 days',
          data: this.getData(prices),
          tension: 0.1
        }]
      },
    });
  }

  getDates(values: Value[]) {
    return values.map(value => {
      const date = new Date(value.x * 1000)
      return (date.getMonth() + 1) + '-' + (date.getDate() + 1)
    })
  }
  getData(values: Value[]) {
    return values.map(value => value.y)
  }
}
