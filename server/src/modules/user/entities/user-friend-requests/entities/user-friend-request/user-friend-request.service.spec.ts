import { Test, TestingModule } from '@nestjs/testing';
import dbConnection from '../../../../../../db.module';
import { UserFriendRequestModel } from '../../user-friend-requests.model';
import { UserFriendRequestController } from './user-friend-request.controller';
import { UserFriendRequestService } from './user-friend-request.service';

describe('UserFriendRequestService', () => {
  let service: UserFriendRequestService;

  const mockUserController = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [dbConnection, UserFriendRequestModel],
      providers: [UserFriendRequestService],
      controllers: [UserFriendRequestController],
    })
      .overrideProvider(UserFriendRequestController)
      .useValue(mockUserController)
      .compile();

    service = module.get<UserFriendRequestService>(UserFriendRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
