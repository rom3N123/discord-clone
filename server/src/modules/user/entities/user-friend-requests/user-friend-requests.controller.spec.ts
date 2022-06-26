import { Test, TestingModule } from '@nestjs/testing';
import { UserFriendRequestsController } from './user-friend-requests.controller';
import { UserFriendRequestsService } from './user-friend-requests.service';

describe('UserFriendRequestsController', () => {
  let controller: UserFriendRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFriendRequestsController],
      providers: [UserFriendRequestsService],
    }).compile();

    controller = module.get<UserFriendRequestsController>(UserFriendRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
