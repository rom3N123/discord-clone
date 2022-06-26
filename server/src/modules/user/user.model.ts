import { User, UserSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';

export const UserModel = MongooseModule.forFeature([
  {
    name: User.name,
    schema: UserSchema,
  },
]);
