import { Component, Input, OnInit } from '@angular/core';
import { ExchangeComplete } from 'src/app/models/exchange-complete';

@Component({
  selector: 'app-exchange-card-lend',
  templateUrl: './exchange-card-lend.component.html',
  styleUrls: ['./exchange-card-lend.component.scss'],
})
export class ExchangeCardLendComponent implements OnInit {
  @Input() exchange: ExchangeComplete;

  constructor() {}

  ngOnInit(): void {}
}
