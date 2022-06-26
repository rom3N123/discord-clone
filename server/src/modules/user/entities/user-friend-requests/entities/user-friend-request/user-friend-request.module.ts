import { UserModel } from 'src/modules/user/user.model';
import { Module } from '@nestjs/common';
import { UserFriendRequestService } from './user-friend-request.service';
import { UserFriendRequestController } from './user-friend-request.controller';
import { UserFriendRequestModel } from '../../user-friend-requests.model';
import { UserFriendsService } from '../../../user-friends/user-friends.service';

@Module({
  imports: [UserFriendRequestModel, UserModel],
  controllers: [UserFriendRequestController],
  providers: [UserFriendRequestService, UserFriendsService],
})
export class UserFriendRequestModule {}
