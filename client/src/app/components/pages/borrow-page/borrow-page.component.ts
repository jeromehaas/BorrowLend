import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Item } from 'src/app/models/item';
import { User } from 'src/app/models/user';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-borrow-page',
  templateUrl: './borrow-page.component.html',
  styleUrls: ['./borrow-page.component.scss'],
})
export class BorrowPageComponent implements OnInit {
  user: User;
  user$ = this.store.pipe(select('user'));
  itemsToShow: Item[] = [];

  constructor(
    private store: Store<AppState>,
    private exchangeService: ExchangeService
  ) {}

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      if (user) {
        this.itemsToShow = [];
        this.user = user;
        if (this.user.exchangesBorr.length) {
          let isInExchange = false;
          this.user.toBorrowList.forEach((item) => {
            this.user.exchangesBorr.forEach((exchange, idx) => {
              this.exchangeService
                .getExchange(exchange.id)
                .subscribe((exchangeComplete) => {
                  if (idx === 0) {
                    isInExchange = false;
                  }
                  if (item.id === exchangeComplete.itemBorrowed.id) {
                    isInExchange = true;
                  }
                  if (
                    idx === this.user.exchangesBorr.length - 1 &&
                    !isInExchange
                  ) {
                    this.itemsToShow.push(item);
                  }
                });
            });
          });
        } else {
          this.user.toBorrowList.forEach((item) => {
            this.itemsToShow.push(item);
          });
        }
      }
    });
  }
}
