import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowPageLendComponent } from './borrow-page-lend.component';

describe('BorrowPageLendComponent', () => {
  let component: BorrowPageLendComponent;
  let fixture: ComponentFixture<BorrowPageLendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowPageLendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowPageLendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
