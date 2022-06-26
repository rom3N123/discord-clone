import { JwtAuthGuard } from './../../../auth/jwt-auth.guard';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserFriendRequestsService } from './user-friend-requests.service';
import { CreateUserFriendRequestDto } from './dto/create-user-friend-request.dto';
import User from 'src/decorators/UserDecorator/User.decorator';
import { JwtSignPayloadType } from 'src/modules/auth/types';

@Controller('user/:userId/friend-requests')
@UseGuards(JwtAuthGuard)
export class UserFriendRequestsController {
  constructor(
    private readonly userFriendRequestsService: UserFriendRequestsService,
  ) {}

  @Post()
  create(
    @Body() { requestTo }: Pick<CreateUserFriendRequestDto, 'requestTo'>,
    @User() { _id }: JwtSignPayloadType,
  ) {
    return this.userFriendRequestsService.create({ requestTo, requestBy: _id });
  }

  @Get()
  findAll(@User() { _id }: JwtSignPayloadType) {
    return this.userFriendRequestsService.findAll(_id);
  }
}
