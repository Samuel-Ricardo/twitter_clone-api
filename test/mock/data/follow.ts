import { Follow, ICreateFollowDTO, IFollowDTO } from '@Core';
import { generateValidUser } from './user';
import { randomID } from '@modules/util/mongo';

const USER_FOLLOWED = generateValidUser();
const USER_FOLLOWER = generateValidUser();

const CREATE_FOLLOW_DATA: ICreateFollowDTO = {
  followingId: USER_FOLLOWED.id,
  followerId: USER_FOLLOWER.id,
};

const FOLLOW_DATA: IFollowDTO = {
  ...CREATE_FOLLOW_DATA,
  id: randomID(),
  createdAt: new Date(),
};

const VALID_FOLLOW = Follow.create(FOLLOW_DATA);
