import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor(private http: HttpClient) { }

  public getRate() {
    const url = 'https://blockchain.info/tobtc?currency=USD&value=1'
    return lastValueFrom(this.http.get<{ answer: string }>(url)
      .pipe(
        map(res => res.answer),
      ))
  }

  public getMarketPrice() {
    const url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
    return lastValueFrom(this.http.get<{ answer: string }>(url)
      .pipe(
        map(res => res.answer),

      ))
  }

  public getConfirmedTransactions() {

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


