import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  onClickSubmit(value): void {
    console.log('value :>> ', value);
  }

  ngOnInit(): void {}
}
