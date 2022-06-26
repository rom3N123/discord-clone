import { UserFriendRequestFields, WithId } from '@discord-clone/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserFriendRequestDocument = Document &
    WithId<{
        requestTo: string;
        requestBy: string;
    }>;

@Schema()
export class UserFriendRequest implements UserFriendRequestFields {
    @Prop({
        ref: 'User',
        type: Types.ObjectId,
        required: true,
        immutable: true,
    })
    requestTo: string;

    @Prop({
        ref: 'User',
        type: Types.ObjectId,
        required: true,
        immutable: true,
    })
    requestBy: string;
}

export const UserFriendRequestSchema =
    SchemaFactory.createForClass(UserFriendRequest);
