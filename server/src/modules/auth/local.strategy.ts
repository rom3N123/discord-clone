import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string) {
    const clientWithToken = await this.authService.loginByCredentials({
      email,
      password,
    });

    if (!clientWithToken) {
      throw new UnauthorizedException();
    }

    return clientWithToken;
  }
}
