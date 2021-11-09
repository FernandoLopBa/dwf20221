import { Injectable } from '@angular/core';
import {ExchangeRate} from '../_model/exchange-rate';
import {HttpClient} from '@angular/common/http';
import {ApisUri} from '../../../shared/apis-uri';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  private apiURI = ApisUri.exchangeRateURI;

  constructor(
    private http: HttpClient
  ) { }

  getExchangeRate(rate: string){
    this.apiURI = ApisUri.exchangeRateURI;
    this.apiURI = this.apiURI.replace("{rate}", rate);
    return this.http.get<ExchangeRate>(this.apiURI);
  }
}
