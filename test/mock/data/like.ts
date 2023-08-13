import { VALID_USER as USER } from './user';
import { VALID_POST as POST } from './post';
import { randomID } from '../../../src/modules/util/mongo';
import { ICreateLikeDTO, ILikeDTO } from '@Core/like/DTO';
import { Like } from '@Core/like/entity';

export const VALID_USER = USER;
export const VALID_POST = POST;

export const CREATE_POST_LIKE_DATA: ICreateLikeDTO = {
  userId: VALID_USER.id,
  likedId: POST.id,
};

export const VALID_POST_LIKE_DATA: ILikeDTO = {
  ...CREATE_POST_LIKE_DATA,
  id: randomID(),
  createdAt: new Date(),
};

export const VALID_LIKE = Like.Create(VALID_POST_LIKE_DATA);
