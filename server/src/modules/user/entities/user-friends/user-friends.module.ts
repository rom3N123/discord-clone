import { UserFriendsController } from './user-friends.controller';
import { Module } from '@nestjs/common';
import { UserModel } from '../../user.model';
import { UserFriendsService } from './user-friends.service';
import { UserFriendsGateway } from './user-friends.gateway';

@Module({
    imports: [UserModel],
    controllers: [UserFriendsController],
    providers: [UserFriendsService, UserFriendsGateway],
})
export class UserFriendsModule {}
