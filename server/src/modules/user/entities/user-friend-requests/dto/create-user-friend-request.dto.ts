import { IsMongoId, IsNotEmpty } from 'class-validator';

export class CreateUserFriendRequestDto {
  @IsNotEmpty()
  @IsMongoId()
  requestTo: string;

  @IsNotEmpty()
  @IsMongoId()
  requestBy: string;
}
