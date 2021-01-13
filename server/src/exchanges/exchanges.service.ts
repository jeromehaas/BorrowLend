import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExchangeDto } from './dto/create-exchange.dto';
import { Exchange } from './exchange.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class ExchangesService {
  constructor(
    @InjectRepository(Exchange)
    private readonly exchangesRepository: Repository<Exchange>,
    private usersService: UsersService,
  ) {}

  async create(createExchangeDto: CreateExchangeDto): Promise<Exchange> {
    const exchange = new Exchange();
    const userBorrowingId = Number(createExchangeDto.userBorrowingId);
    const userLendingId = Number(createExchangeDto.userLendingId);
    exchange.userBorrowing = await this.usersService.findOne(userBorrowingId);
    exchange.userLending = await this.usersService.findOne(userLendingId);
    return this.exchangesRepository.save(exchange);
  }

  async findAll(): Promise<Exchange[]> {
    return this.exchangesRepository.find({
      relations: ['userBorrowing', 'userLending'],
    });
  }

  findOne(id: number): Promise<Exchange> {
    return this.exchangesRepository.findOne(id, {
      relations: ['userBorrowing', 'userLending'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.exchangesRepository.delete(id);
  }
}
