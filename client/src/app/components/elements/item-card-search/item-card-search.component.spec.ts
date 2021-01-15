import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardSearchComponent } from './item-card-search.component';

describe('ItemCardComponent', () => {
  let component: ItemCardSearchComponent;
  let fixture: ComponentFixture<ItemCardSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemCardSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
