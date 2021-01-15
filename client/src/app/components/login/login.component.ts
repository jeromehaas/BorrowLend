import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { setUser } from '../../actions/users.actions';
import { setItems } from '../../actions/items.actions';
import { UserService } from 'src/app/services/user.service';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user$ = this.store.pipe(select((state) => state.user));
  items$ = this.store.pipe(select((state) => state.items));

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private userService: UserService,
    private itemsService: ItemsService
  ) {}

  onClickSubmit(value): void {
    this.userService.getUser(value.userName).subscribe((user) => {
      this.store.dispatch(setUser({ user }));
    });
    this.itemsService.getItems().subscribe((items) => {
      this.store.dispatch(setItems({ items }));
    });
    this.router.navigate(['/loading']);
  }

  ngOnInit(): void {}
}
