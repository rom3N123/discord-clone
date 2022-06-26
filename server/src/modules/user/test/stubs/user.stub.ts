import { Types } from 'mongoose';
import { WithId } from '@discord-clone/types';
import { User } from '../../user.schema';

const mockUserMongooseId = new Types.ObjectId();

export const userStub = (
  _id: string = mockUserMongooseId.toString(),
): WithId<User> => ({
  _id: _id,
  bio: 'Bio',
  email: 'mail@mail.ru',
  name: 'Roman',
  password: '000',
  friends: [],
});
