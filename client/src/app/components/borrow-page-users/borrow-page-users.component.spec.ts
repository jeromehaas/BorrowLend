import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowPageUsersComponent } from './borrow-page-users.component';

describe('BorrowPageUsersComponent', () => {
  let component: BorrowPageUsersComponent;
  let fixture: ComponentFixture<BorrowPageUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowPageUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowPageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
