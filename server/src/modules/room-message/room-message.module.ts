import { RoomMessageModel } from './room-message.model';
import { Module } from '@nestjs/common';
import { RoomMessageService } from './room-message.service';
import { RoomMessageController } from './room-message.controller';

@Module({
  imports: [RoomMessageModel],
  controllers: [RoomMessageController],
  providers: [RoomMessageService],
})
export class RoomMessageModule {}
