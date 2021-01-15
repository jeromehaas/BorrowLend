import { Item } from './models/item';
import { User } from './models/user';

export interface AppState {
  user: User;
  items: Item[];
}
