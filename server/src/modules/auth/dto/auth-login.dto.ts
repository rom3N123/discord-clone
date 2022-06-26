import { IsEmail, IsNotEmpty } from 'class-validator';
import { UserCredentials } from '@discord-clone/types';

export class AuthLoginDto implements UserCredentials {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
