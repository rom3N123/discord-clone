import {
  UserFriendRequest,
  UserFriendRequestSchema,
} from './user-friend-requests.schema';
import { MongooseModule } from '@nestjs/mongoose';

export const UserFriendRequestModel = MongooseModule.forFeature([
  {
    name: UserFriendRequest.name,
    schema: UserFriendRequestSchema,
  },
]);
