import { ExecutionContext, Injectable } from '@nestjs/common';
import { CanActivate } from '@nestjs/common';
import { verify } from 'jsonwebtoken';

@Injectable()
export class WsGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | any | Promise<boolean | any> {
    try {
      const token = context.getArgs()[0]!.handshake.headers.token;

      if (!token) {
        return false;
      }

      const user = verify(token, 'hello');

      context.switchToHttp().getRequest().user = user;

      return true;
    } catch (ex) {
      return false;
    }
  }
}
