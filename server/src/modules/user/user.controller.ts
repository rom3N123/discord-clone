import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { UserService } from './user.service';
import { UserDocument } from './user.schema';
import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { UserUpdateDto } from './dto/user-update.dto';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') userId: string): Promise<UserDocument> {
    return this.userService.getById(userId);
  }

  @Patch(':id')
  update(
    @Param('id') userId: string,
    @Body() data: UserUpdateDto,
  ): Promise<UserDocument> {
    return this.userService.update(userId, data);
  }
}
