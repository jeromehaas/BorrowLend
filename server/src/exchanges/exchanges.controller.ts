import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { Exchange } from './exchange.entity';
import { ExchangesService } from './exchanges.service';

@Controller('exchanges')
export class ExchangesController {
  constructor(private readonly exchangesService: ExchangesService) {}

  @Post()
  create(@Body() createExchangeDto: CreateExchangeDto): Promise<Exchange> {
    return this.exchangesService.create(createExchangeDto);
  }

  @Get()
  findAll(): Promise<Exchange[]> {
    return this.exchangesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Exchange> {
    id = Number(id);
    return this.exchangesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    id = Number(id);
    return this.exchangesService.remove(id);
  }
}
