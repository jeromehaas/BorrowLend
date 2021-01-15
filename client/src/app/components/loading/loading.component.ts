import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  user: User;
  user$ = this.store.pipe(select('user'));
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      this.user = user;
      if (user) {
        setTimeout(() => {
          console.log('this.user :>> ', this.user);
          this.router.navigate(['']);
        }, 5000);
      }
    });
  }
}
