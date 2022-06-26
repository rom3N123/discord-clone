import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomMessageDto } from './create-room-message.dto';

export class UpdateRoomMessageDto extends PartialType(CreateRoomMessageDto) {}
