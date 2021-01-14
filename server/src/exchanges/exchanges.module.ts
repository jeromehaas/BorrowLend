import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exchange } from './exchange.entity';
import { ExchangesController } from './exchanges.controller';
import { ExchangesService } from './exchanges.service';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { Item } from '../items/item.entity';
import { ItemsService } from '../items/items.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Exchange]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Item]),
  ],
  providers: [ExchangesService, UsersService, ItemsService],
  controllers: [ExchangesController],
})
export class ExchangesModule {}
