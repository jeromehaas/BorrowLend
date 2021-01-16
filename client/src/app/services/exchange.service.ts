import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from './apiUrl';
import { Exchange } from '../models/exchange';
import { ExchangeComplete } from '../models/exchange-complete';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  private userUrl = `${apiUrl}/exchanges`;

  constructor(private http: HttpClient) {}

  createExchange(exchange: any): Observable<Exchange> {
    return this.http.post<Exchange>(`${this.userUrl}`, exchange);
  }

  getExchange(id: number): Observable<ExchangeComplete> {
    return this.http.get<ExchangeComplete>(`${this.userUrl}/${id}`);
  }
}
