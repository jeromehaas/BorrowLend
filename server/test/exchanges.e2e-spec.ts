import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
// import { AppModule } from './../src/app.module';
import { ExchangesModule } from './../src/exchanges/exchanges.module';
import { ExchangesService } from './../src/exchanges/exchanges.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangesController } from './../src/exchanges/exchanges.controller';
import { Exchanges } from './../src/exchanges/exchange.entity';
import { Users } from './../src/users/user.entity';
import { Items } from './../src/items/item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Exchanges]),
    TypeOrmModule.forFeature([Users]),
    TypeOrmModule.forFeature([Items]),
  ],
  providers: [ExchangesService, UsersService, ItemsService],
  controllers: [ExchangesController],
})

describe('Exchanges', () => {
  let app: INestApplication;
  let exchangesService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ExchangesModule],
    })
    .overrideProvider(ExchangesService)
    .useValue(exchangesService)
    .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({
        data: exchangesService.findAll()
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
