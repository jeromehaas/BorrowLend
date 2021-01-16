import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCardBorrowComponent } from './exchange-card-borrow.component';

describe('ExchangeCardBorrowComponent', () => {
  let component: ExchangeCardBorrowComponent;
  let fixture: ComponentFixture<ExchangeCardBorrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeCardBorrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCardBorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
