import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { Exchanges } from './exchanges/exchange.entity';
import { ExchangesModule } from './exchanges/exchanges.module';
import { Items } from './items/item.entity';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'cesco',
      password: 'database',
      database: 'BorrowLend',
      entities: [Users, Exchanges, Items],
      synchronize: true,
    }),
    UsersModule,
    ExchangesModule,
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
