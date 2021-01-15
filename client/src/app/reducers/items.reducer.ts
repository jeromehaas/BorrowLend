import { setItems } from '../actions/items.actions';
import { createReducer, on } from '@ngrx/store';
import { Item } from '../models/item';

const initialItems: Item[] = [];

export const itemsReducer = createReducer<Item[]>(
  initialItems,
  on(setItems, (state, action) => action.items)
);
