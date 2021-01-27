import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { UsersService } from '../../src/users/users.service';
import { UsersModule } from '../../src/users/users.module';
import { UsersController } from '../../src/users/users.controller';
import { INestApplication } from '@nestjs/common';
import { NestApplication } from '@nestjs/core';

describe('Users', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UsersModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should return true for sure', () => {
    expect(1).toBe(1);
  });

  afterAll(async () => {
    await app.close();
  });
});
