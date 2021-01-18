import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  @Input() itemId: number;
  matchingItemsNo: number;
  user$ = this.store.pipe(select('user'));

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      if (user) {
        const matchingItems = this.user.toBorrowList.filter((a) =>
          user.toLendList.some((b) => a.id === b.id)
        );
        this.matchingItemsNo = matchingItems.length;
      }
    });
  }
}
