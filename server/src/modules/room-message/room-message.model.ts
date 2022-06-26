import { MongooseModule } from '@nestjs/mongoose';
import { RoomMessage, RoomMessageSchema } from './room-message.schema';

export const RoomMessageModel = MongooseModule.forFeature([
  {
    name: RoomMessage.name,
    schema: RoomMessageSchema,
  },
]);
