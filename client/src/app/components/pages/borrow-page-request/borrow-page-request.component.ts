import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-borrow-page-request',
  templateUrl: './borrow-page-request.component.html',
  styleUrls: ['./borrow-page-request.component.scss'],
})
export class BorrowPageRequestComponent implements OnInit {
  userLendId: number;
  itemToBorrowId: number;
  itemToLendId: number;
  userBorrId: number;
  user$ = this.store.pipe(select('user'));

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.userLendId = +this.route.snapshot.paramMap.get('userLendId');
    this.itemToBorrowId = +this.route.snapshot.paramMap.get('itemId');
    this.itemToLendId = +this.route.snapshot.paramMap.get('itemLendId');
    this.user$.subscribe((user) => {
      this.userBorrId = user.id;
      console.log('this.userLendId :>> ', this.userLendId);
      console.log('this.itemToBorrowId :>> ', this.itemToBorrowId);
      console.log('this.itemToLendId :>> ', this.itemToLendId);
      console.log('this.userBorrId :>> ', this.userBorrId);
    });
  }
}
