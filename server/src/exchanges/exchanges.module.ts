import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exchange } from './exchange.entity';
import { ExchangesController } from './exchanges.controller';
import { ExchangesService } from './exchanges.service';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Exchange]),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [ExchangesService, UsersService],
  controllers: [ExchangesController],
})
export class ExchangesModule {}
