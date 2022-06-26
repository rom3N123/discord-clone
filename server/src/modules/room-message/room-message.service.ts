import { Injectable } from '@nestjs/common';
import { CreateRoomMessageDto } from './dto/create-room-message.dto';
import { UpdateRoomMessageDto } from './dto/update-room-message.dto';

@Injectable()
export class RoomMessageService {
  create(createRoomMessageDto: CreateRoomMessageDto) {
    return 'This action adds a new roomMessage';
  }

  findAll() {
    return `This action returns all roomMessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roomMessage`;
  }

  update(id: number, updateRoomMessageDto: UpdateRoomMessageDto) {
    return `This action updates a #${id} roomMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} roomMessage`;
  }
}
