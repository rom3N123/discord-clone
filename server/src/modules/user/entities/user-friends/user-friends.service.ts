import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../user.schema';
import { Model } from 'mongoose';
import { UserClient } from '@discord-clone/types';

type FriendsPopulate = {
    friends: UserClient[];
};

@Injectable()
export class UserFriendsService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>
    ) {}

    async get(userId: string) {
        const user = await this.userModel
            .findById(userId)
            .populate<{ friends: UserDocument[] }>('friends');

        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        return user.friends;
    }

    async create(userId: string, friendId: string) {
        const updatedUser = await this.userModel
            .findOneAndUpdate(
                { _id: userId },
                {
                    $push: {
                        friends: friendId,
                    },
                },
                {
                    new: true,
                }
            )
            .populate<FriendsPopulate>('friends');

        const newFriend = await this.userModel
            .findOneAndUpdate(
                { _id: friendId },
                {
                    $push: {
                        friends: userId,
                    },
                },
                {
                    new: true,
                }
            )
            .populate<FriendsPopulate>('friends');

        return {
            updatedUser,
            newFriend,
        };
    }

    getAll(userId: string) {
        return this.userModel
            .findById(userId)
            .populate<{ friends: UserClient[] }>('friends');
    }

    async remove(userId: string, friendId: string) {
        const updatedUser = await this.userModel.findOneAndUpdate(
            { _id: userId },
            {
                $pull: {
                    friends: friendId,
                },
            },
            { new: true }
        );

        const updatedFriend = await this.userModel
            .findOneAndUpdate(
                {
                    _id: friendId,
                },
                {
                    $pull: {
                        friends: userId,
                    },
                },
                {
                    new: true,
                }
            )
            .populate<FriendsPopulate>('friends');

        return {
            updatedUser,
            updatedFriend,
        };
    }
}
