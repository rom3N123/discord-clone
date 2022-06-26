import { JwtAuthGuard } from './../../../auth/jwt-auth.guard';
import { Controller, UseGuards, Delete, Param, Get } from '@nestjs/common';
import { UserFriendsService } from './user-friends.service';

@Controller('user/:userId/friends')
@UseGuards(JwtAuthGuard)
export class UserFriendsController {
    constructor(private readonly userFriendsService: UserFriendsService) {}

    @Get()
    get(@Param('userId') userId: string) {
        return this.userFriendsService.get(userId);
    }

    @Delete(':friendId')
    async deleteFriends(
        @Param('friendId') friendId: string,
        @Param('userId') userId: string
    ) {
        return this.userFriendsService.remove(userId, friendId);
    }
}
