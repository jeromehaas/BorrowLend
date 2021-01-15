import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setUser } from '../../actions/users.actions';
import { AppState } from '../../app.state';
import { Item } from '../../models/item';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
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
  @Input() isBorrowPage: boolean;

  constructor(
    private store: Store<AppState>,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user.toBorrowList.forEach((item) => {
      if (item.id === this.item.id) {
        this.itemState = 'toborrow';
      }
    });
    this.user.toLendList.forEach((item) => {
      if (item.id === this.item.id) {
        this.itemState = 'tolend';
      }
    });
    if (!this.itemState) {
      this.itemState = 'none';
    }
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
        .subscribe((user) => {
          this.store.dispatch(setUser({ user }));
        });
    }
    this.userService
      .addToToBorrowList(this.user.id, this.item.id)
      .subscribe((user) => {
        this.store.dispatch(setUser({ user }));
      });
    this.itemState = 'toborrow';
  }

  handleToLend(): void {
    if (this.itemState === 'toborrow') {
      this.userService
        .removeFromToBorrowList(this.user.id, this.item.id)
        .subscribe((user) => {
          this.store.dispatch(setUser({ user }));
        });
    }
    this.userService
      .addToToLendList(this.user.id, this.item.id)
      .subscribe((user) => {
        this.store.dispatch(setUser({ user }));
      });
    this.itemState = 'tolend';
  }
}
