import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardBorrowComponent } from './item-card-borrow.component';

describe('ItemCardBorrowComponent', () => {
  let component: ItemCardBorrowComponent;
  let fixture: ComponentFixture<ItemCardBorrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCardBorrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardBorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
