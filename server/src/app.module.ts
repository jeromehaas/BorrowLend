import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { Exchange } from './exchanges/exchange.entity';
import { ExchangesModule } from './exchanges/exchanges.module';
import { Item } from './items/item.entity';
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
      entities: [User, Exchange, Item],
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
