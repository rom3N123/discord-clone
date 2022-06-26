import {
    UserFriendRequest,
    UserFriendRequestDocument,
} from './../../user-friend-requests.schema';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserFriendRequestsPopulateFields } from '../../user-friend-requests.types';
import { UserFriendsService } from '../../../user-friends/user-friends.service';

@Injectable()
export class UserFriendRequestService {
    constructor(
        @InjectModel(UserFriendRequest.name)
        private readonly userFriendRequestModel: Model<UserFriendRequestDocument>,
        private readonly userFriendsService: UserFriendsService
    ) {}

    findOne(id: string) {
        return this.userFriendRequestModel
            .findById(id)
            .populate<UserFriendRequestsPopulateFields>('requestTo requestBy');
    }

    async accept(requestId: string, userId: string) {
        const userFriendRequest = await this.userFriendRequestModel.findById(
            requestId
        );

        if (!userFriendRequest) {
            throw new HttpException(
                "Request wasn't found",
                HttpStatus.NOT_FOUND
            );
        }

        if (userId === userFriendRequest.requestTo.toString()) {
            await userFriendRequest.remove();

            const { requestBy } = userFriendRequest;

            const { updatedUser, newFriend } =
                await this.userFriendsService.create(userId, requestBy);

            return {
                statusCode: HttpStatus.OK,
                data: {
                    updatedUser,
                    newFriend,
                },
            };
        } else {
            throw new HttpException(
                "You can't accept your own request",
                HttpStatus.BAD_REQUEST
            );
        }
    }

    async delete(id: string, userId: string) {
        const userFriendRequest = await this.userFriendRequestModel.findById(
            id
        );

        if (!userFriendRequest) {
            throw new HttpException(
                "Request wasn't found",
                HttpStatus.NOT_FOUND
            );
        }

        if (
            userFriendRequest.requestBy === userId.toString() ||
            userFriendRequest.requestTo === userId.toString()
        ) {
            await userFriendRequest.remove();
        } else {
            throw new HttpException(
                "You don't have permission to cancel this request",
                HttpStatus.BAD_REQUEST
            );
        }

        return {
            status: 'Success',
            userFriendRequest,
        };
    }

    async cancel(id: string, userId: string) {
        await this.delete(id, userId);

        return {
            statusCode: HttpStatus.OK,
            message: 'Request canceled',
        };
    }
}
