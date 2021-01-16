import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setUser } from 'src/app/actions/users.actions';
import { AppState } from 'src/app/app.state';
import { ExchangeComplete } from 'src/app/models/exchange-complete';
import { ExchangeService } from 'src/app/services/exchange.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-exchange-card-lend',
  templateUrl: './exchange-card-lend.component.html',
  styleUrls: ['./exchange-card-lend.component.scss'],
})
export class ExchangeCardLendComponent implements OnInit {
  @Input() exchange: ExchangeComplete;

  constructor(
    private exchangeService: ExchangeService,
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  deleteExchange(): void {
    this.exchangeService.deleteExchange(this.exchange.id).subscribe(() => {
      this.userService
        .getUserById(this.exchange.userLending.id)
        .subscribe((user) => {
          this.store.dispatch(setUser({ user }));
        });
    });
  }

  endExchange(): void {
    this.exchangeService
      .endExchange(this.exchange.id, this.exchange.userLending.id)
      .subscribe(() => {
        this.userService
          .getUserById(this.exchange.userLending.id)
          .subscribe((user) => {
            this.store.dispatch(setUser({ user }));
          });
      });
  }

  acceptExchange(): void {
    this.exchangeService.acceptExchange(this.exchange.id).subscribe(() => {
      this.userService
        .getUserById(this.exchange.userLending.id)
        .subscribe((user) => {
          this.store.dispatch(setUser({ user }));
        });
    });
  }

  rejectExchange(): void {
    this.exchangeService.rejectExchange(this.exchange.id).subscribe(() => {
      this.userService
        .getUserById(this.exchange.userLending.id)
        .subscribe((user) => {
          this.store.dispatch(setUser({ user }));
        });
    });
  }
}
