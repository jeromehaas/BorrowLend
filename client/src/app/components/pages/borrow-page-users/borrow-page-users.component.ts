import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExchangeService } from 'src/app/services/exchange.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-borrow-page-users',
  templateUrl: './borrow-page-users.component.html',
  styleUrls: ['./borrow-page-users.component.scss'],
})
export class BorrowPageUsersComponent implements OnInit {
  usersLending: User[] = [];
  itemId: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private exchangeService: ExchangeService
  ) {}

  ngOnInit(): void {
    this.itemId = +this.route.snapshot.paramMap.get('itemId');
    this.userService.getUsersLending(this.itemId).subscribe((users) => {
      // Check if the user is not already lending the game
      let isAlreadyLending;
      users.forEach((user) => {
        if (user.exchangesLend.length) {
          user.exchangesLend.forEach((exchange, idx) => {
            this.exchangeService
              .getExchange(exchange.id)
              .subscribe((exchangeComplete) => {
                if (idx === 0) {
                  isAlreadyLending = false;
                }
                if (this.itemId === exchangeComplete.itemBorrowed.id) {
                  isAlreadyLending = true;
                }
                if (
                  idx === user.exchangesLend.length - 1 &&
                  !isAlreadyLending
                ) {
                  this.usersLending.push(user);
                }
              });
          });
        } else {
          this.usersLending.push(user);
        }
      });
    });
  }
}
