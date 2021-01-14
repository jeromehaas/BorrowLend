import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { Items } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Items)
    private readonly itemsRepository: Repository<Items>,
  ) {}

  create(createItemDto: CreateItemDto): Promise<Items> {
    const item = new Items();
    item.title = createItemDto.title;
    item.img = createItemDto.img;
    return this.itemsRepository.save(item);
  }

  async findAll(): Promise<Items[]> {
    return this.itemsRepository.find({
      relations: ['exchangesBorr', 'exchangesLend'],
    });
  }

  findOne(id: number): Promise<Items> {
    return this.itemsRepository.findOne(id, {
      relations: ['exchangesBorr', 'exchangesLend'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.itemsRepository.delete(id);
  }
}
