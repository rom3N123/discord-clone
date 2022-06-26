import { Injectable } from '@nestjs/common';
import { CreateTextRoomDto } from './dto/create-text-room.dto';
import { UpdateTextRoomDto } from './dto/update-text-room.dto';

@Injectable()
export class TextRoomsService {
  create(createTextRoomDto: CreateTextRoomDto) {
    return 'This action adds a new textRoom';
  }

  findAll() {
    return `This action returns all textRooms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} textRoom`;
  }

  update(id: number, updateTextRoomDto: UpdateTextRoomDto) {
    return `This action updates a #${id} textRoom`;
  }

  remove(id: number) {
    return `This action removes a #${id} textRoom`;
  }
}
