import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-borrow-page-users',
  templateUrl: './borrow-page-users.component.html',
  styleUrls: ['./borrow-page-users.component.scss'],
})
export class BorrowPageUsersComponent implements OnInit {
  usersLending: User[];
  itemId: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.itemId = +this.route.snapshot.paramMap.get('itemId');
    this.userService.getUsersLending(this.itemId).subscribe((users) => {
      this.usersLending = users;
    });
  }
}
