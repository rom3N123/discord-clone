import { JwtSignPayloadType } from './../../../../../auth/types/index';
import { JwtAuthGuard } from './../../../../../auth/jwt-auth.guard';
import {
  Controller,
  Get,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserFriendRequestService } from './user-friend-request.service';
import User from 'src/decorators/UserDecorator/User.decorator';

@Controller('user/:userId/friend-requests/:requestId')
@UseGuards(JwtAuthGuard)
export class UserFriendRequestController {
  constructor(
    private readonly userFriendRequestService: UserFriendRequestService,
  ) {}

  @Get()
  findOne(@Param('requestId') id: string) {
    return this.userFriendRequestService.findOne(id);
  }

  @Patch()
  update(@Param('requestId') id: string, @User() { _id }: JwtSignPayloadType) {
    return this.userFriendRequestService.accept(id, _id);
  }

  @Delete()
  remove(@Param('requestId') id: string, @User() { _id }: JwtSignPayloadType) {
    return this.userFriendRequestService.cancel(id, _id);
  }
}
