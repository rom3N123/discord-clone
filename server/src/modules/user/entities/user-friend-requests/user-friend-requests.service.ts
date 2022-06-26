import { User, UserDocument } from 'src/modules/user/user.schema';
import FormError from '../../../../exceptions/form-error';
import {
  UserFriendRequest,
  UserFriendRequestDocument,
} from './user-friend-requests.schema';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserFriendRequestDto } from './dto/create-user-friend-request.dto';
import { Model, Types } from 'mongoose';
import { UserFriendRequestsPopulateFields } from './user-friend-requests.types';

@Injectable()
export class UserFriendRequestsService {
  constructor(
    @InjectModel(UserFriendRequest.name)
    private readonly userFriendRequestModel: Model<UserFriendRequestDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create({
    requestBy,
    requestTo,
  }: CreateUserFriendRequestDto): Promise<UserFriendRequestDocument> {
    const existingRequest = await this.userFriendRequestModel
      .findOne({
        $or: [
          { requestTo, requestBy },
          { requestTo: requestBy, requestBy: requestTo },
        ],
      })
      .populate<{ requestTo: UserDocument; requestBy: UserDocument }>(
        'requestTo requestBy',
      );

    if (requestBy === requestTo) {
      throw new HttpException(
        "You can't create a request to yourself",
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!Types.ObjectId.isValid(requestTo)) {
      throw new FormError([
        { name: 'requestTo', message: 'Incorrect user id' },
      ]);
    }

    if (existingRequest) {
      throw new HttpException(
        'Request has been already sent',
        HttpStatus.BAD_REQUEST,
      );
    }

    const requestToUser = await this.userModel.findById(requestTo);

    if (!requestToUser) {
      throw new HttpException("User weren't found", HttpStatus.NOT_FOUND);
    } else if (requestToUser.friends.includes(requestBy)) {
      throw new HttpException(
        'User is already your friend',
        HttpStatus.BAD_REQUEST,
      );
    }

    const createdRequest = await this.userFriendRequestModel.create({
      requestBy,
      requestTo,
    });

    const populatedRequest =
      await createdRequest.populate<UserFriendRequestsPopulateFields>(
        'requestTo requestBy',
      );

    return populatedRequest;
  }

  async findAll(userId: string) {
    const allRequests = await this.userFriendRequestModel
      .find({
        $or: [{ requestTo: userId }, { requestBy: userId }],
      })
      .populate<UserFriendRequestsPopulateFields>('requestTo requestBy');

    return allRequests;
  }
}
