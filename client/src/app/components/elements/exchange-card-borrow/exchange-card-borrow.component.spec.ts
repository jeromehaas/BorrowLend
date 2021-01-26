import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { ExchangeService } from 'src/app/services/exchange.service';
import { UserService } from 'src/app/services/user.service';
import { EXCHANGE_COMPLETE } from 'src/app/testMocks/exchangeService';
import { setUser } from 'src/app/actions/users.actions';

import { ExchangeCardBorrowComponent } from './exchange-card-borrow.component';

describe('ExchangeCardBorrowComponent', () => {
  let component: ExchangeCardBorrowComponent;
  let fixture: ComponentFixture<ExchangeCardBorrowComponent>;
  let mockExchangeService;
  let mockUserService;
  let mockStore;
  let mockSetUser;

  beforeEach(async () => {

    mockExchangeService = jasmine.createSpyObj([
      'deleteExchange', 'endExchange'
    ]);

    mockExchangeService.deleteExchange.and.returnValue([]);

    mockUserService = jasmine.createSpyObj(['getUserById']);
    mockStore = jasmine.createSpyObj(['dispatch']);

    mockSetUser = jasmine.createSpyObj(['setUser']);

    mockSetUser.setUser.and.returnValue(2);


    await TestBed.configureTestingModule({
      declarations: [ ExchangeCardBorrowComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: ExchangeService, useValue: mockExchangeService },
        { provide: UserService, useValue: mockUserService },
        { provide: Store, useValue: mockStore }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCardBorrowComponent);
    component = fixture.componentInstance;
    component.exchange = EXCHANGE_COMPLETE;
    fixture.detectChanges();
  });

  fit('should create exchange card borrow component', () => {
    expect(component).toBeTruthy();
  });

  fit('should delete an exchange when delete button is clicked', fakeAsync(() => {
    const button = fixture.debugElement.query(By.css('.deletebutton')).nativeElement;
    button.click();
    tick();
    expect(mockExchangeService.deleteExchange).toHaveBeenCalledWith(component.exchange.id);
  }));

  // fit('should end an exchange when end button is clicked', fakeAsync(() => {
  //   component.exchange.accepted = true;
  //   component.exchange.isActiveLend = null;
  //   component.exchange.isActiveBorr = null;
  //   const button = fixture.debugElement.query(By.css('.endbuttontest')).nativeElement;
  //   button.click();
  //   tick();
  //   expect(mockExchangeService.endExchange).toHaveBeenCalled();

  // }));

});
