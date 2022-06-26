import { JwtSignPayloadType } from './../auth/types/index';
import { MeService } from './@me.service';
import { Controller, Get } from '@nestjs/common';
import User from 'src/decorators/UserDecorator/User.decorator';

@Controller('@me')
export class MeController {
  constructor(private readonly meService: MeService) {}

  @Get()
  getMe(@User() { _id }: JwtSignPayloadType) {
    return this.meService.get(_id);
  }
}
