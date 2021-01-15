import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-card-lend',
  templateUrl: './item-card-lend.component.html',
  styleUrls: ['./item-card-lend.component.scss'],
})
export class ItemCardLendComponent implements OnInit {
  @Input() userLendId: number;
  @Input() itemToBorrowId: number;
  @Input() item: Item;

  constructor() {}

  ngOnInit(): void {}
}
