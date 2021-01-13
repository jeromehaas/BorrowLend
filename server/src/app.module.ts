import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Exchange } from './exchanges/exchange.entity';
import { ExchangesModule } from './exchanges/exchanges.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'cesco',
      password: 'database',
      database: 'BorrowLend',
      entities: [User, Exchange],
      synchronize: true,
    }),
    UsersModule,
    ExchangesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
