import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<Users> {
    const user = new Users();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.location = createUserDto.location;
    user.email = createUserDto.email;
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<Users[]> {
    return this.usersRepository.find({
      relations: ['exchangesBorr', 'exchangesLend'],
    });
  }

  findOne(id: number): Promise<Users> {
    return this.usersRepository.findOne(id, {
      relations: ['exchangesBorr', 'exchangesLend'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
