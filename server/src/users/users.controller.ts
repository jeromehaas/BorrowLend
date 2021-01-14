import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Users> {
    id = Number(id);
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    id = Number(id);
    return this.usersService.remove(id);
  }
}
