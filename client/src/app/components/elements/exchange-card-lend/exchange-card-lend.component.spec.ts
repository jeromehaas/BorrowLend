import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCardLendComponent } from './exchange-card-lend.component';

describe('ExchangeCardLendComponent', () => {
  let component: ExchangeCardLendComponent;
  let fixture: ComponentFixture<ExchangeCardLendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeCardLendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCardLendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
