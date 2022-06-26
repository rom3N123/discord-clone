import { Module } from '@nestjs/common';
import { UserFriendRequestModel } from '../user/entities/user-friend-requests/user-friend-requests.model';
import { UserFriendRequestsService } from '../user/entities/user-friend-requests/user-friend-requests.service';
import { UserModel } from '../user/user.model';
import { UserService } from '../user/user.service';
import { MeController } from './@me.controller';
import { MeService } from './@me.service';

@Module({
  imports: [UserModel, UserFriendRequestModel],
  controllers: [MeController],
  providers: [MeService, UserService, UserFriendRequestsService],
})
export class MeModule {}
