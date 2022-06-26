import { JwtSignPayloadType } from './types/index';
import { AuthLoginDto } from './dto/auth-login.dto';
import { UserDocument } from 'src/modules/user/user.schema';
import { User } from './../user/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UserService } from '../user/user.service';
import { UserCreateDto } from '../user/dto/user-create.dto';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import FormError from 'src/exceptions/form-error';
import { MeService } from '../@me/@me.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly meService: MeService,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async register(data: UserCreateDto) {
    const { email } = data;

    const registeredUser = await this.userModel.findOne({ email });

    if (registeredUser) {
      throw new FormError([
        {
          name: 'email',
          message: 'Пользователь с таким адресом уже существует',
        },
      ]);
    }

    await this.userService.create(data);

    const me = await this.meService.get(registeredUser._id);

    const jwtPayload = { _id: me.user._id.toString() } as JwtSignPayloadType;

    return { ...me, accessToken: this.jwtService.sign(jwtPayload) };
  }

  async loginByCredentials(credentials: AuthLoginDto) {
    const { password, email } = credentials;

    const user = (await this.userModel
      .findOne({ email })
      .select('password')) as UserDocument;

    if (!user) {
      throw new FormError([
        {
          name: 'email',
          message: 'Пользователя с таким адресом не существует',
        },
      ]);
    }

    const arePasswordsTheSame: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!arePasswordsTheSame) {
      throw new FormError([{ name: 'password', message: 'Неверный пароль' }]);
    }

    const me = await this.meService.get(user._id);

    const jwtPayload = { _id: me.user._id.toString() } as JwtSignPayloadType;

    return { ...me, accessToken: this.jwtService.sign(jwtPayload) };
  }
}
