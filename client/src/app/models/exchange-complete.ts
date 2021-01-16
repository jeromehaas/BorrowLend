import { Item } from './item';
import { User } from './user';

export interface ExchangeComplete {
  id: number;
  accepted: boolean;
  isActiveBorr: boolean;
  isActiveLend: boolean;
  createdAt: Date;
  userBorrowing: User;
  userLending: User;
  itemBorrowed: Item;
  itemLent: Item;
}
