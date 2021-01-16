import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { Exchanges } from './exchange.entity';
import { ExchangesService } from './exchanges.service';

@Controller('exchanges')
export class ExchangesController {
  constructor(private readonly exchangesService: ExchangesService) {}

  @Post()
  async create(
    @Body() createExchangeDto: CreateExchangeDto,
  ): Promise<Exchanges> {
    const exchange = await this.exchangesService.create(createExchangeDto);
    if (exchange === null) {
      throw new BadRequestException('Exchange already saved');
    }
    return exchange;
  }

  @Get()
  findAll(): Promise<Exchanges[]> {
    return this.exchangesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Exchanges> {
    id = Number(id);
    return this.exchangesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    id = Number(id);
    return this.exchangesService.remove(id);
  }

  @Put('accept/:id')
  accept(@Param('id') id: number): Promise<Exchanges> {
    id = Number(id);
    return this.exchangesService.accept(id);
  }

  @Put('reject/:id')
  reject(@Param('id') id: number): Promise<Exchanges> {
    id = Number(id);
    return this.exchangesService.reject(id);
  }

  @Put('end/:id/:userId')
  end(
    @Param('id') id: number,
    @Param('userId') userId: number,
  ): Promise<Exchanges> {
    id = Number(id);
    userId = Number(userId);
    return this.exchangesService.end(id, userId);
  }
}
