import { Test, TestingModule } from '@nestjs/testing';
import { UserFriendRequestController } from './user-friend-request.controller';
import { UserFriendRequestService } from './user-friend-request.service';

describe('UserFriendRequestController', () => {
  let controller: UserFriendRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFriendRequestController],
      providers: [UserFriendRequestService],
    }).compile();

    controller = module.get<UserFriendRequestController>(UserFriendRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
