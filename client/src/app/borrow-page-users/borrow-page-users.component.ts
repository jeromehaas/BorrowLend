import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-borrow-page-users',
  templateUrl: './borrow-page-users.component.html',
  styleUrls: ['./borrow-page-users.component.scss'],
})
export class BorrowPageUsersComponent implements OnInit {
  usersLending: User[];
  itemId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.itemId = +this.route.snapshot.paramMap.get('itemId');
  }
}
