import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { apiUrl } from './apiUrl';
import { Exchange } from '../models/exchange';
import { ExchangeComplete } from '../models/exchange-complete';
import { ExchangeService } from './exchange.service';
import { User } from '../models/user';

describe('ExchangeService', () => {
  let service: ExchangeService;
  let httpTestingController: HttpTestingController;
  let mockExchangeInfo: any;
  let mockExchange: Exchange;
  let mockExchangeComplete: any;
  let userUrl = `${apiUrl}/exchanges`;

  // let mockUser1: User = {
  //   id: 1,
  //   username: 'Alba',
  //   password: 'isright',
  //   location: 'Barcelona',
  //   email: 'alba.stark@knightswatch.got',
  //   exchangesBorr: [],
  //   exchangesLend: [
  //     {
  //       id: 1,
  //       accepted: null,
  //       isActiveBorr: null,
  //       isActiveLend: null,
  //       createdAt: new Date()
  //     }
  //   ],
  //   toLendList: [],
  //   toBorrowList: []
  // }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(ExchangeService);
    httpTestingController = TestBed.inject(HttpTestingController);

    mockExchangeInfo = {
      userBorrowingId: 1,
      userLendingId: 2,
      itemBorrowedId: 1,
      itemLentId: 2
    };

    mockExchange = {
      id: 1,
      accepted: null,
      isActiveBorr: null,
      isActiveLend: null,
      itemBorrowedId: 5,
      itemLentId: 4,
      userBorrowingId: 1,
      userLendingId: 2,
      createdAt: new Date()
    };

    mockExchangeComplete = {
      userBorrowing: {
        id: 1,
        username: 'Alba',
        password: 'isright',
        location: 'Barcelona',
        email: 'alba.stark@knightswatch.got',
        exchangesBorr: [],
        exchangesLend: [
          {
            id: 1,
            accepted: null,
            isActiveBorr: null,
            isActiveLend: null,
            createdAt: new Date()
          }
        ],
        toLendList: [],
        toBorrowList: []
      },
      userLending: {
        id: 2,
        username: 'Jérôme',
        password: 'numbersdivisibleby5',
        location: 'Barcelona',
        email: 'jerome.climaster@verycool.git',
        exchangesBorr: [
          {
            id: 1,
            accepted: null,
            isActiveBorr: null,
            isActiveLend: null,
            createdAt: new Date()
          }
        ],
        exchangesLend: [],
        toLendList: [],
        toBorrowList: []
      },
      itemBorrowed: {
        id: 1,
        title: 'PS4 - Cyberpunk 2077',
        img: 'https://howlongtobeat.com/games/Cyberpunk-2077-2.jpg',
        exchangesBorr: [],
        exchangesLend: []
      },
      itemLent: {
        id: 2,
        title: 'PS4 - The Witcher 3: Wild Hunt',
        img: 'https://howlongtobeat.com/games/10270_The_Witcher_3_Wild_Hunt.jpg',
        exchangesBorr: [],
        exchangesLend: [
          {
            id: 1,
            accepted: null,
            isActiveBorr: null,
            isActiveLend: null,
            createdAt: new Date()
          }
        ]
      },
      createdAt: new Date(),
      accepted: null,
      isActiveBorr: null,
      isActiveLend: null,
      id: 2
    };
    
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should create a new exchange and post it to the database', () => {
    service.createExchange(mockExchangeInfo).subscribe((response) => {
      expect(response.userBorrowing.id).toEqual(mockExchangeInfo.userBorrowingId);
      expect(response.userLending.id).toEqual(mockExchangeInfo.userLendingId);
    });
    expect(service).toBeTruthy();
    const req = httpTestingController.expectOne(userUrl);
    expect(req.request.method).toEqual('POST');
    req.flush(mockExchangeComplete);
  });

});
