import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from './apiUrl';
import { Exchange } from '../models/exchange';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  private userUrl = `${apiUrl}/exchanges`;

  constructor(private http: HttpClient) {}

  createExchange(exchange: any): Observable<Exchange> {
    return this.http.post<any>(`${this.userUrl}`, exchange);
  }
}
