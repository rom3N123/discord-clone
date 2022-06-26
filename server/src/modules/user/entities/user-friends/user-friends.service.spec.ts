import { Test, TestingModule } from '@nestjs/testing';
import { UserFriendsService } from './user-friends.service';

describe('UserFriendsService', () => {
  let service: UserFriendsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFriendsService],
    }).compile();

    service = module.get<UserFriendsService>(UserFriendsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
