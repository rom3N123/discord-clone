import { Test, TestingModule } from '@nestjs/testing';
import { UserFriendRequestsService } from './user-friend-requests.service';

describe('UserFriendRequestsService', () => {
  let service: UserFriendRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFriendRequestsService],
    }).compile();

    service = module.get<UserFriendRequestsService>(UserFriendRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
