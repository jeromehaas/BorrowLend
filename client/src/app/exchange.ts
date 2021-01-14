import { Item } from './item';

export interface Exchange {
  id: number;
  accepted: boolean;
  isActiveBorr: boolean;
  isActiveLend: boolean;
  itemBorrowed: Item;
  itemLent: Item;
}
