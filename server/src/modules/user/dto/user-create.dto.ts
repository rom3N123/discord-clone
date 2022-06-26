import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { UserCreateDto as UserCreateDtoType } from '@discord-clone/types';

export class UserCreateDto implements Omit<UserCreateDtoType, 'friends'> {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(10)
  name: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
