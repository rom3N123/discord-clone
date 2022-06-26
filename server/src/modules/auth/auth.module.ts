import { UserFriendRequestModel } from './../user/entities/user-friend-requests/user-friend-requests.model';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { UserModel } from 'src/modules/user/user.model';
import { PassportModule } from '@nestjs/passport';
import { MeService } from '../@me/@me.service';
import { UserFriendRequestsService } from '../user/entities/user-friend-requests/user-friend-requests.service';

@Module({
  imports: [
    UserModel,
    PassportModule,
    JwtModule.register({
      secret: 'hello',
      signOptions: {
        expiresIn: '24h',
      },
    }),
    UserFriendRequestModel,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    LocalStrategy,
    JwtStrategy,
    MeService,
    UserFriendRequestsService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
