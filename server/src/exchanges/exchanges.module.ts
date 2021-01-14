import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exchanges } from './exchange.entity';
import { ExchangesController } from './exchanges.controller';
import { ExchangesService } from './exchanges.service';
import { Users } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { Items } from '../items/item.entity';
import { ItemsService } from '../items/items.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Exchanges]),
    TypeOrmModule.forFeature([Users]),
    TypeOrmModule.forFeature([Items]),
  ],
  providers: [ExchangesService, UsersService, ItemsService],
  controllers: [ExchangesController],
})
export class ExchangesModule {}
