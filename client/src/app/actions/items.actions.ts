import { createAction, props } from '@ngrx/store';
import { Item } from '../models/item';

export const setItems = createAction(
  '[Items] Set Items',
  props<{ items: Item[] }>()
);
