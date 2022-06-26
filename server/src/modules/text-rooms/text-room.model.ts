import { MongooseModule } from '@nestjs/mongoose';
import { TextRoom, TextRoomSchema } from './text-room.schema';

export const TextRoomModel = MongooseModule.forFeature([
  {
    name: TextRoom.name,
    schema: TextRoomSchema,
  },
]);
