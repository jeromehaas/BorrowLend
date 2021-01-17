import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Exchange } from 'src/app/models/exchange';
import { ExchangeService } from 'src/app/services/exchange.service';
import { setUser } from '../../../actions/users.actions';
import { AppState } from '../../../app.state';
import { Item } from '../../../models/item';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-item-card-search',
  templateUrl: './item-card-search.component.html',
  styleUrls: ['./item-card-search.component.scss'],
})
export class ItemCardSearchComponent implements OnInit {
  @Input() item: Item;
  @Input() user: User;
  itemState: string;
  options = [
    {
      key: 'none',
      value: '-',
    },
    {
      key: 'toborrow',
      value: 'To Borrow',
    },
    {
      key: 'tolend',
      value: 'To Lend',
    },
  ];

  constructor(
    private store: Store<AppState>,
    private userService: UserService,
    private exchangeService: ExchangeService
  ) {}

  ngOnInit(): void {
    this.checkState(this.user.toBorrowList, 'toborrow');
    this.checkState(this.user.toLendList, 'tolend');

    if (!this.itemState) {
      this.itemState = 'none';
    }

    this.checkIfInAnExchange(this.user.exchangesBorr);
    this.checkIfInAnExchange(this.user.exchangesLend);
  }

  checkState(list: Item[], state: string): void {
    list.forEach((item) => {
      if (item.id === this.item.id) {
        this.itemState = state;
      }
    });
  }

  checkIfInAnExchange(exchanges: Exchange[]): void {
    exchanges.forEach((exchange) => {
      this.exchangeService
        .getExchange(exchange.id)
        .subscribe((exchangeComplete) => {
          if (this.item.id === exchangeComplete.itemBorrowed.id) {
            this.itemState = 'exchange';
          }
        });
    });
  }

  onChange(value): void {
    switch (value) {
      case 'none':
        this.handleNone();
        break;
      case 'toborrow':
        this.handleToBorrow();
        break;
      case 'tolend':
        this.handleToLend();
        break;
    }
  }

  handleNone(): void {
    if (this.itemState === 'toborrow') {
      this.userService
        .removeFromToBorrowList(this.user.id, this.item.id)
        .subscribe((user) => {
          this.store.dispatch(setUser({ user }));
        });
    }
    if (this.itemState === 'tolend') {
      this.userService
        .removeFromToLendList(this.user.id, this.item.id)
        .subscribe((user) => {
          this.store.dispatch(setUser({ user }));
        });
    }
    this.itemState = 'none';
  }

  handleToBorrow(): void {
    if (this.itemState === 'tolend') {
      this.userService
        .removeFromToLendList(this.user.id, this.item.id)
        .subscribe((user1) => {
          this.store.dispatch(setUser({ user: user1 }));
          this.userService
            .addToToBorrowList(this.user.id, this.item.id)
            .subscribe((user2) => {
              this.store.dispatch(setUser({ user: user2 }));
            });
        });
    } else {
      this.userService
        .addToToBorrowList(this.user.id, this.item.id)
        .subscribe((user) => {
          this.store.dispatch(setUser({ user }));
        });
    }

    this.itemState = 'toborrow';
  }

  handleToLend(): void {
    if (this.itemState === 'toborrow') {
      this.userService
        .removeFromToBorrowList(this.user.id, this.item.id)
        .subscribe((user1) => {
          this.store.dispatch(setUser({ user: user1 }));
          this.userService
            .addToToLendList(this.user.id, this.item.id)
            .subscribe((user2) => {
              this.store.dispatch(setUser({ user: user2 }));
            });
        });
    } else {
      this.userService
        .addToToLendList(this.user.id, this.item.id)
        .subscribe((user) => {
          this.store.dispatch(setUser({ user }));
        });
    }

    this.itemState = 'tolend';
  }
}
