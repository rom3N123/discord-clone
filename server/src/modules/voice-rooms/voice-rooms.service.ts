import { Injectable } from '@nestjs/common';
import { CreateVoiceRoomDto } from './dto/create-voice-room.dto';
import { UpdateVoiceRoomDto } from './dto/update-voice-room.dto';

@Injectable()
export class VoiceRoomsService {
  create(createVoiceRoomDto: CreateVoiceRoomDto) {
    return 'This action adds a new voiceRoom';
  }

  findAll() {
    return `This action returns all voiceRooms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voiceRoom`;
  }

  update(id: number, updateVoiceRoomDto: UpdateVoiceRoomDto) {
    return `This action updates a #${id} voiceRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} voiceRoom`;
  }
}
