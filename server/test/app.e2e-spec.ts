import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

const allUsers =
  '[{"id":1,"username":"Matthieu","password":"1234","location":"Barcelona","email":"matthieu@gmail.com","exchangesBorr":[],"exchangesLend":[],"toLendList":[{"id":2,"title":"PS4 - The Witcher 3: Wild Hunt","img":"https://howlongtobeat.com/games/10270_The_Witcher_3_Wild_Hunt.jpg"},{"id":4,"title":"PS4 - The Witcher 3: Wild Hunt","img":"https://howlongtobeat.com/games/10270_The_Witcher_3_Wild_Hunt.jpg"},{"id":1,"title":"PS4 - Grand Theft Auto V","img":"https://howlongtobeat.com/games/2006041-gta5_2_large.png"}],"toBorrowList":[]},{"id":2,"username":"Jerome","password":"1234","location":"Barcelona","email":"matthieu@gmail.com","exchangesBorr":[],"exchangesLend":[],"toLendList":[],"toBorrowList":[{"id":5,"title":"PS4 - Grand Theft Auto V","img":"https://howlongtobeat.com/games/2006041-gta5_2_large.png"},{"id":4,"title":"PS4 - The Witcher 3: Wild Hunt","img":"https://howlongtobeat.com/games/10270_The_Witcher_3_Wild_Hunt.jpg"},{"id":2,"title":"PS4 - The Witcher 3: Wild Hunt","img":"https://howlongtobeat.com/games/10270_The_Witcher_3_Wild_Hunt.jpg"},{"id":1,"title":"PS4 - Grand Theft Auto V","img":"https://howlongtobeat.com/games/2006041-gta5_2_large.png"}]}]';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect(allUsers);
  });

  afterAll(async () => {
    await app.close();
  });
});
