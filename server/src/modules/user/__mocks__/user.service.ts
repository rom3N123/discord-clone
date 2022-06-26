import { userStub } from '../test/stubs/user.stub';

export const UserService = jest.fn().mockReturnValue({
  getById: jest.fn().mockResolvedValue(userStub()),
  create: jest.fn().mockResolvedValue(userStub()),
  update: jest.fn().mockResolvedValue(userStub()),
});
