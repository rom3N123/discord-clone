import { TextRoomModelType } from '@discord-clone/types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { RoomMessage } from '../room-message/room-message.schema';

export type TextRoomDocument = Document & TextRoomModelType;

@Schema()
export class TextRoom {
  @Prop({
    required: true,
  })
  name: string;

  // @Prop({
  //   required: true,
  //   type: Types.ObjectId,
  //   ref: 'Channel',
  // })
  // channel: Channel;

  @Prop({ default: [], type: [Types.ObjectId], ref: 'RoomMessage' })
  messages: RoomMessage[];
}

export const TextRoomSchema = SchemaFactory.createForClass(TextRoom);
