import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, Logger } from '@nestjs/common';
import * as request from 'supertest';
import { ItemsModule } from '../src/items/items.module';
import { ItemsService } from '../src/items/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from '../src/items/item.entity';
import { Exchanges } from '../src/exchanges/exchange.entity';
import { Users } from '../src/users/user.entity';

describe('Exchanges', () => {
  let app: INestApplication;
  let itemsService = { findAll: () => ['test'] };

  beforeAll(async () => {

    const DBModule = TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'cesco',
      password: 'database',
      database: 'BorrowLend',
      entities: [Users, Exchanges, Items],
      synchronize: true,
    });

    const moduleRef = await Test.createTestingModule({
      imports: [DBModule, ItemsModule]
    })
    // .overrideProvider(ItemsService)
    // .useValue(itemsService)
    .compile();

    app = await moduleRef.createNestApplication();

    await app.init();

  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({
        data:itemsService.findAll()
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
