import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Item } from 'src/app/models/item';
import { User } from 'src/app/models/user';
import { ItemsService } from 'src/app/services/items.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-borrow-page-request',
  templateUrl: './borrow-page-request.component.html',
  styleUrls: ['./borrow-page-request.component.scss'],
})
export class BorrowPageRequestComponent implements OnInit {
  userLend: User;
  itemToBorrow: Item;
  itemToLend: Item;
  userBorr: User;
  user$ = this.store.pipe(select('user'));

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private userService: UserService,
    private itemsService: ItemsService
  ) {}

  ngOnInit(): void {
    this.userService
      .getUserById(+this.route.snapshot.paramMap.get('userLendId'))
      .subscribe((userLend) => {
        this.userLend = userLend;
      });
    this.itemsService
      .getItemById(+this.route.snapshot.paramMap.get('itemId'))
      .subscribe((item) => {
        this.itemToBorrow = item;
      });
    this.itemsService
      .getItemById(+this.route.snapshot.paramMap.get('itemLendId'))
      .subscribe((item) => {
        this.itemToLend = item;
      });
    this.user$.subscribe((user) => {
      this.userBorr = user;
    });
  }
}
