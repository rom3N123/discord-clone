import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VoiceRoomsService } from './voice-rooms.service';
import { CreateVoiceRoomDto } from './dto/create-voice-room.dto';
import { UpdateVoiceRoomDto } from './dto/update-voice-room.dto';

@Controller('voice-rooms')
export class VoiceRoomsController {
  constructor(private readonly voiceRoomsService: VoiceRoomsService) {}

  @Post()
  create(@Body() createVoiceRoomDto: CreateVoiceRoomDto) {
    return this.voiceRoomsService.create(createVoiceRoomDto);
  }

  @Get()
  findAll() {
    return this.voiceRoomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voiceRoomsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVoiceRoomDto: UpdateVoiceRoomDto,
  ) {
    return this.voiceRoomsService.update(+id, updateVoiceRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voiceRoomsService.remove(+id);
  }
}
