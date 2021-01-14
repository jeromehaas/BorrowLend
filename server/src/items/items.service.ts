import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
  ) {}

  create(createItemDto: CreateItemDto): Promise<Item> {
    const item = new Item();
    item.title = createItemDto.title;
    item.img = createItemDto.img;
    return this.itemsRepository.save(item);
  }

  async findAll(): Promise<Item[]> {
    return this.itemsRepository.find({
      relations: ['exchangesBorr', 'exchangesLend'],
    });
  }

  findOne(id: number): Promise<Item> {
    return this.itemsRepository.findOne(id, {
      relations: ['exchangesBorr', 'exchangesLend'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.itemsRepository.delete(id);
  }
}
