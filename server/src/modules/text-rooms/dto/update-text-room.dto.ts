import { PartialType } from '@nestjs/mapped-types';
import { CreateTextRoomDto } from './create-text-room.dto';

export class UpdateTextRoomDto extends PartialType(CreateTextRoomDto) {}
