import { Module } from '@nestjs/common';
import { VoiceRoomsService } from './voice-rooms.service';
import { VoiceRoomsController } from './voice-rooms.controller';

@Module({
  controllers: [VoiceRoomsController],
  providers: [VoiceRoomsService]
})
export class VoiceRoomsModule {}
