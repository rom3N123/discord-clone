import { Max, Min } from 'class-validator';
import { UserUpdateDto as UserUpdateDtoType } from '@discord-clone/types';
export class UserUpdateDto implements UserUpdateDtoType {
  @Min(3)
  @Max(30)
  name?: string;

  @Max(200)
  bio?: string;
}
