import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TextRoomsService } from './text-rooms.service';
import { CreateTextRoomDto } from './dto/create-text-room.dto';
import { UpdateTextRoomDto } from './dto/update-text-room.dto';

@Controller('text-rooms')
export class TextRoomsController {
  constructor(private readonly textRoomsService: TextRoomsService) {}

  @Post()
  create(@Body() createTextRoomDto: CreateTextRoomDto) {
    return this.textRoomsService.create(createTextRoomDto);
  }

  @Get()
  findAll() {
    return this.textRoomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textRoomsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTextRoomDto: UpdateTextRoomDto) {
    return this.textRoomsService.update(+id, updateTextRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textRoomsService.remove(+id);
  }
}
