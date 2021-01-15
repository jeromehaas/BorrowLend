import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setItems } from './actions/items.actions';
import { setUser } from './actions/users.actions';
import { AppState } from './app.state';
import { ItemsService } from './services/items.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(
    private store: Store<AppState>,
    private itemsService: ItemsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Temporary, for developing purposes
    this.userService.getUser('Alba').subscribe((user) => {
      this.store.dispatch(setUser({ user }));
    });
    this.itemsService.getItems().subscribe((items) => {
      this.store.dispatch(setItems({ items }));
    });
  }
}
