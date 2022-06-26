import { MeService } from './../@me/@me.service';
import { JwtSignPayloadType } from './types/index';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly meService: MeService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'hello',
    });
  }

  async validate({ _id }: JwtSignPayloadType) {
    const client = this.meService.get(_id);

    if (!client) {
      throw new UnauthorizedException();
    }

    return { _id: _id.toString() };
  }
}
