import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ExchangeComplete } from 'src/app/models/exchange-complete';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-requests-page',
  templateUrl: './requests-page.component.html',
  styleUrls: ['./requests-page.component.scss'],
})
export class RequestsPageComponent implements OnInit {
  exchangesBorr: ExchangeComplete[] = [];
  exchangesLend: ExchangeComplete[] = [];
  user$ = this.store.pipe(select((state) => state.user));

  constructor(
    private store: Store<AppState>,
    private exchangeService: ExchangeService
  ) {}

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      if (user) {
        user.exchangesBorr.forEach((exchange) => {
          this.exchangeService
            .getExchange(exchange.id)
            .subscribe((exchangeComplete) => {
              this.exchangesBorr.push(exchangeComplete);
              console.log('exchangeComplete :>> ', exchangeComplete);
            });
        });
        user.exchangesLend.forEach((exchange) => {
          this.exchangeService
            .getExchange(exchange.id)
            .subscribe((exchangeComplete) => {
              this.exchangesLend.push(exchangeComplete);
              console.log('exchangeComplete :>> ', exchangeComplete);
            });
        });
      }
    });
  }
}
