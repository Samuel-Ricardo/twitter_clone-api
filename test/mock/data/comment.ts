import { VALID_USER as USER } from './user';
import { VALID_POST as POST } from './post';
import { randomID } from '../../../src/modules/util/mongo';
import {
  ICommentDTO,
  ICreateCommentDTO,
  IUpdateCommentDTO,
} from '../../../src/modules/@core/comment/DTO';
import { Comment } from '../../../src/modules/@core/comment/entity';

export const VALID_USER = USER;
export const VALID_POST = POST;

export const CREATE_POST_COMMENT_DATA: ICreateCommentDTO = {
  body: 'Hello World Comment! :D',
  postId: VALID_POST.id,
  authorId: VALID_USER.id,
};

export const VALID_POST_COMMENT_DATA: ICommentDTO = {
  ...CREATE_POST_COMMENT_DATA,
  id: randomID(),
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const VALID_POST_COMMENT = Comment.create(VALID_POST_COMMENT_DATA);

export const UPDATE_POST_COMMENT_DATA: IUpdateCommentDTO = {
  id: VALID_POST_COMMENT.id,
  body: 'UPDATED Hello World Comment! :D',
};
