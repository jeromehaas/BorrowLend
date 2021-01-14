import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Items } from './item.entity';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Items> {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  findAll(): Promise<Items[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Items> {
    id = Number(id);
    return this.itemsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    id = Number(id);
    return this.itemsService.remove(id);
  }
}
