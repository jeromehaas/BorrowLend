import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Item } from 'src/app/models/item';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  user: User;
  user$ = this.store.pipe(select('user'));
  items: Item[];
  items$ = this.store.pipe(select('items'));
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      this.user = user;
      if (user) {
        setTimeout(() => {
          // this.router.navigate(['']);
        }, 5000);
      }
    });
    this.items$.subscribe((items) => {
      this.items = items;
    });
  }
}
