import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoomMessageService } from './room-message.service';
import { CreateRoomMessageDto } from './dto/create-room-message.dto';
import { UpdateRoomMessageDto } from './dto/update-room-message.dto';

@Controller('room-message')
export class RoomMessageController {
  constructor(private readonly roomMessageService: RoomMessageService) {}

  @Post()
  create(@Body() createRoomMessageDto: CreateRoomMessageDto) {
    return this.roomMessageService.create(createRoomMessageDto);
  }

  @Get()
  findAll() {
    return this.roomMessageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomMessageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRoomMessageDto: UpdateRoomMessageDto,
  ) {
    return this.roomMessageService.update(+id, updateRoomMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomMessageService.remove(+id);
  }
}
