import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './item.entity';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [TypeOrmModule.forFeature([Items])],
  providers: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
