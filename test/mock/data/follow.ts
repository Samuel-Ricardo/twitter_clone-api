import {
  Follow,
  ICreateFollowDTO,
  IFollowDTO,
} from '../../../src/modules/@core/follow';
import { generateValidUser } from './user';
import { randomID } from '../../../src/modules/util/mongo';

export const USER_FOLLOWED = generateValidUser();
export const USER_FOLLOWER = generateValidUser();

export const CREATE_FOLLOW_DATA: ICreateFollowDTO = {
  followingId: USER_FOLLOWED.id,
  followerId: USER_FOLLOWER.id,
};

export const FOLLOW_DATA: IFollowDTO = {
  ...CREATE_FOLLOW_DATA,
  id: randomID(),
  createdAt: new Date(),
};

export const VALID_FOLLOW = Follow.create(FOLLOW_DATA);
