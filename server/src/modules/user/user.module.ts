import { UsersOnlineModule } from './entities/users-online/users-online.module';
import { UserFriendRequestsModule } from './entities/user-friend-requests/user-friend-requests.module';
import { UserFriendRequestModule } from './entities/user-friend-requests/entities/user-friend-request/user-friend-request.module';
import { UserFriendsModule } from './entities/user-friends/user-friends.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserModel } from './user.model';

@Module({
  imports: [
    UserModel,
    UserFriendRequestsModule,
    UserFriendsModule,
    UserFriendRequestModule,
    UsersOnlineModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
