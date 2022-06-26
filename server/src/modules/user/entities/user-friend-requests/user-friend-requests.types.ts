import { UserDocument } from '../../user.schema';

export type UserFriendRequestsPopulateFields = {
  requestTo: UserDocument;
  requestBy: UserDocument;
};
