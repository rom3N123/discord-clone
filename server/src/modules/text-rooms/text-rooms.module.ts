import { Module } from '@nestjs/common';
import { TextRoomsService } from './text-rooms.service';
import { TextRoomsController } from './text-rooms.controller';
import { TextRoomModel } from './text-room.model';

@Module({
  imports: [TextRoomModel],
  controllers: [TextRoomsController],
  providers: [TextRoomsService],
})
export class TextRoomsModule {}
