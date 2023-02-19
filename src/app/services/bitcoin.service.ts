import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, tap } from 'rxjs/operators'
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor(private http: HttpClient) { }

  public getRate() {
    const url = 'https://blockchain.info/tobtc?currency=USD&value=1'
    return this.getResult('RATE', url)
  }

  public getMarketPrice() {
    const url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
    return this.getResult('MARKET_PRICE', url)
  }

  public getConfirmedTransactions() {

  }

  getAvgBlockSize() {
    const url = 'https://api.blockchain.info/charts/avg-block-size?timespan=1months&format=json&cors=true'
    return this.getResult('AVG_BLOCK_SIZE', url)
  }

  getResult(type: string, url: string) {
    const result = loadFromStorage(type)
    if (result) return Promise.resolve(result)
    console.log('result')
    return lastValueFrom(this.http.get<{ answer: string }>(url)
      .pipe(
        tap(res => saveToStorage(type, res)),
      ))
  }
}

function saveToStorage(key: string, value: any) {
  const data: any = JSON.stringify(value) || null
  localStorage.setItem(key, data)
}

function loadFromStorage(key: string) {
  let data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}


