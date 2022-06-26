import { UserModel } from 'src/modules/user/user.model';
import { UserFriendRequestService } from './entities/user-friend-request/user-friend-request.service';
import { UserFriendRequestModel } from './user-friend-requests.model';
import { Module } from '@nestjs/common';
import { UserFriendRequestsService } from './user-friend-requests.service';
import { UserFriendRequestsController } from './user-friend-requests.controller';
import { UserFriendRequestGateway } from './user-friend-requests.gateway';
import { UserFriendsService } from '../user-friends/user-friends.service';
@Module({
  imports: [UserFriendRequestModel, UserModel],
  controllers: [UserFriendRequestsController],
  providers: [
    UserFriendRequestsService,
    UserFriendRequestGateway,
    UserFriendRequestService,
    UserFriendsService,
  ],
})
export class UserFriendRequestsModule {}
