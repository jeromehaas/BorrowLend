import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Exchange } from 'src/app/models/exchange';

@Component({
  selector: 'app-requests-page',
  templateUrl: './requests-page.component.html',
  styleUrls: ['./requests-page.component.scss'],
})
export class RequestsPageComponent implements OnInit {
  exchangesBorr: Exchange[];
  exchangesLend: Exchange[];
  user$ = this.store.pipe(select((state) => state.user));

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      if (user) {
        this.exchangesLend = user.exchangesLend;
        this.exchangesBorr = user.exchangesBorr;
        console.log('this.exchangesBorr :>> ', this.exchangesBorr);
        console.log('this.exchangesLend :>> ', this.exchangesLend);
      }
    });
  }
}
