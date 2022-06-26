import { UserFriendRequestsService } from './../user/entities/user-friend-requests/user-friend-requests.service';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class MeService {
  constructor(
    private readonly userService: UserService,
    private readonly userFriendRequests: UserFriendRequestsService,
  ) {}

  async get(userId: string) {
    const { friends, ...user } = await this.userService.getByIdForClient(
      userId,
    );
    const friendRequests = await this.userFriendRequests.findAll(userId);
    const channels = [];

    return { user, friendRequests, friends, channels };
  }
}
