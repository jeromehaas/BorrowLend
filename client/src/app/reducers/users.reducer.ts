import { setUser } from '../actions/users.actions';
import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user';

const initialUser: User = null;

export const usersReducer = createReducer<User>(
  initialUser,
  on(setUser, (state, action) => action.user)
);
