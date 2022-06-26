import { Test, TestingModule } from '@nestjs/testing';
import { UsersOnlineGateway } from './users-online.gateway';

describe('UsersOnlineGateway', () => {
  let gateway: UsersOnlineGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersOnlineGateway],
    }).compile();

    gateway = module.get<UsersOnlineGateway>(UsersOnlineGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
