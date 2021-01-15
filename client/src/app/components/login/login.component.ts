import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { setUser } from '../../actions/users.actions';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user$ = this.store.pipe(select((state) => state.user));

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private userService: UserService
  ) {}

  onClickSubmit(value): void {
    this.userService.getUser(value.userName).subscribe((user) => {
      this.store.dispatch(setUser({ user }));
    });
    this.router.navigate(['/loading']);
  }

  ngOnInit(): void {}
}
