import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardLendComponent } from './item-card-lend.component';

describe('ItemCardLendComponent', () => {
  let component: ItemCardLendComponent;
  let fixture: ComponentFixture<ItemCardLendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCardLendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardLendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
