import { CreateUserDTO, UpdateUserDTO, User } from '@User';
import { randomID } from '../../../src/modules/util/mongo';

export const CREATE_USER_DATA: CreateUserDTO = {
  name: 'pedro',
  username: 'p3dr0',
  email: 'pedro@email.com',
  password: 'h3j2f6',
};

export const CREATE_USER_DATA2: CreateUserDTO = {
  ...CREATE_USER_DATA,
  username: 'us3r',
  email: 'us3r@email.com',
};

export const VALID_USER_DATA: UpdateUserDTO = {
  ...CREATE_USER_DATA,
  id: randomID(),
  bio: 'Hello World! :D',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const VALID_USER = User.create(VALID_USER_DATA);

export const generateValidUser = () =>
  User.create({
    id: randomID(),
    name: 'Pedro ' + randomID(),
    username: 'pedro ' + randomID(),
    bio: randomID(),
    email: `pedro${randomID()}@email.com`,
    password: randomID(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
