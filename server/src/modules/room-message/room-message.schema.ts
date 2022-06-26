import { RoomMessageModelType } from '@discord-clone/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { TextRoom } from '../text-rooms/text-room.schema';
import { User } from '../user/user.schema';

export type RoomMessageDocument = Document & RoomMessageModelType;

@Schema()
export class RoomMessage {
  @Prop({ required: true })
  text: string;

  @Prop({ immutable: true, default: Date.now() })
  createdAt: number;

  @Prop({ default: false })
  isEdited: boolean;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  author: User;

  @Prop({ type: Types.ObjectId, required: true, ref: 'TextRoom' })
  room: TextRoom;
}

export const RoomMessageSchema = SchemaFactory.createForClass(RoomMessage);
