import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-card-borrow',
  templateUrl: './item-card-borrow.component.html',
  styleUrls: ['./item-card-borrow.component.scss'],
})
export class ItemCardBorrowComponent implements OnInit {
  @Input() item: Item;

  constructor() {}

  ngOnInit(): void {}
}
