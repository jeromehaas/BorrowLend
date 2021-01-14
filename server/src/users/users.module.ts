import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Items } from '../items/item.entity';
import { ItemsService } from '../items/items.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    TypeOrmModule.forFeature([Items]),
  ],
  providers: [UsersService, ItemsService],
  controllers: [UsersController],
})
export class UsersModule {}
