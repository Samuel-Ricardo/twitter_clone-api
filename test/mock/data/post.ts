import { ICreatePostDTO, IPostDTO, IUpdatePostDTO, Post } from '@Post';
import { VALID_USER } from './user';
import { randomID } from '../../../src/modules/util/mongo';

export const CREATE_POST_DATA: ICreatePostDTO = {
  body: 'Hello World!',
  authorId: VALID_USER.id,
  image: '123456',
};

export const VALID_POST_DATA: IPostDTO = {
  ...CREATE_POST_DATA,
  id: randomID(),
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const VALID_POST = Post.create(VALID_POST_DATA);

export const UPDATE_POST_DATA: IUpdatePostDTO = {
  id: VALID_POST.id,
  body: 'Pedro Modificações',
};

export const VALID_UPDATED_POST = Post.create({
  ...VALID_POST_DATA,
  ...UPDATE_POST_DATA,
});
