import { usersOnline } from 'src/sockets/UsersOnline';
import { UserCreateDto } from './dto/user-create.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { UserUpdateDto } from './dto/user-update.dto';
import * as bcrypt from 'bcrypt';
import { UserClient } from '@discord-clone/types';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>
    ) {}

    async getAll() {
        return this.userModel.find({});
    }

    async getById(id: string): Promise<UserDocument> {
        return this.userModel.findById(id).populate('friends');
    }

    async getByIdForClient(id: string): Promise<UserClient> {
        const user = (await this.userModel
            .findById(id)
            .populate('friends')
            .lean()) as UserClient;

        return user;
    }

    async create(data: UserCreateDto): Promise<UserDocument> {
        const { password, ...otherData } = data;

        const hashedPassword: string = await bcrypt.hash(password, 7);

        return this.userModel.create({
            password: hashedPassword,
            ...otherData,
        });
    }

    async update(id: string, data: UserUpdateDto): Promise<UserDocument> {
        const updatedUser = await this.userModel.findOneAndUpdate(
            { _id: id },
            data,
            {
                new: true,
            }
        );

        return updatedUser;
    }
}
