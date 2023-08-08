import { CreateUserDTO, UpdateUserDTO, User } from '@User';
import { randomID } from '../../../src/modules/util/mongo';

export const CREATE_USER_DATA: CreateUserDTO = {
  name: 'pedro',
  username: 'p3dr0',
  email: 'pedro@email.com',
  password: 'h3j2f6',
};

export const VALID_USER_DATA: UpdateUserDTO = {
  ...CREATE_USER_DATA,
  id: randomID(),
  bio: 'Hello World! :D',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const VALID_USER = User.create(VALID_USER_DATA);
