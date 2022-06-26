import { MeClient } from '@discord-clone/types';
import { MeService } from './../@me/@me.service';
import { JwtSignPayloadType } from './types/index';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { UserCreateDto } from '../user/dto/user-create.dto';
import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import User from 'src/decorators/UserDecorator/User.decorator';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly meService: MeService
    ) {}

    @Post('register')
    async register(@Body() data: UserCreateDto) {
        const user = await this.authService.register(data);

        return user;
    }

    @UseGuards(JwtAuthGuard)
    @Get('login')
    async loginByToken(@User() { _id }: JwtSignPayloadType) {
        return this.meService.get(_id);
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@User() user: MeClient) {
        return user;
    }
}
