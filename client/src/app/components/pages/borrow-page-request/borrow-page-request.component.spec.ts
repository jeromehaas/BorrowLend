import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowPageRequestComponent } from './borrow-page-request.component';

describe('BorrowPageRequestComponent', () => {
  let component: BorrowPageRequestComponent;
  let fixture: ComponentFixture<BorrowPageRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowPageRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowPageRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
