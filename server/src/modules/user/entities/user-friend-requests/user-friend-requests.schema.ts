import { WithId } from '@discord-clone/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../../user/user.schema';

export type UserFriendRequestDocument = Document &
  WithId<{
    requestTo: string;
    requestBy: string;
  }>;

@Schema()
export class UserFriendRequest {
  @Prop({
    ref: 'User',
    type: Types.ObjectId,
    required: true,
    immutable: true,
  })
  requestTo: User;

  @Prop({
    ref: 'User',
    type: Types.ObjectId,
    required: true,
    immutable: true,
  })
  requestBy: User;
}

export const UserFriendRequestSchema =
  SchemaFactory.createForClass(UserFriendRequest);
