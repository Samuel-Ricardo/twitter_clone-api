import { FollowController } from '../../../../src/modules/@core/follow/controller';
import { ISimulateFollowController } from '@test/@types/simulate/follow/controller';
import { MockFactory } from '@test/mock';
import {
  CREATE_FOLLOW_DATA,
  USER_FOLLOWED,
  USER_FOLLOWER,
  VALID_FOLLOW,
} from '@test/mock/data/follow';
import { resolve } from 'path';

describe('[CONTROLLER] | FOLLOW ', () => {
  let module: ISimulateFollowController;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.FOLLOW.CONTROLLER_DEV();

    expect(module).toBeDefined();
    expect(module.controller).toBeInstanceOf(FollowController);
    expect(module.service).toBeDefined();
  });

  it('[UNIT] | Should: be able to => [FOLLOW]', async () => {
    module.service.follow.mockResolvedValue(VALID_FOLLOW);

    const result = await module.controller.follow(CREATE_FOLLOW_DATA);

    expect(result).toStrictEqual({ follow: VALID_FOLLOW.toStruct() });

    expect(module.service.follow).toHaveBeenCalledTimes(1);
    expect(module.service.follow).toHaveBeenCalledWith(CREATE_FOLLOW_DATA);
  });

  it('[UNIT] | Should: be able to => [UNFOLLOW]', async () => {
    module.service.unfollow.mockResolvedValue();

    expect(
      module.controller.unfollow({ id: VALID_FOLLOW.id }),
    ).resolves.not.toThrow();

    expect(module.service.unfollow).toHaveBeenCalledTimes(1);
    expect(module.service.unfollow).toHaveBeenCalledWith({
      id: VALID_FOLLOW.id,
    });
  });

  it('[UNIT] | Should: be able to [GET] => [FOLLOWERS]', async () => {
    module.service.getFollowers.mockResolvedValue([VALID_FOLLOW]);

    const result = await module.controller.getFollowers({
      followingId: USER_FOLLOWED.id,
    });

    expect(result).toStrictEqual({
      followers: [VALID_FOLLOW.toStruct()],
    });

    expect(module.service.getFollowers).toHaveBeenCalledTimes(1);
    expect(module.service.getFollowers).toHaveBeenCalledWith({
      followingId: USER_FOLLOWED.id,
    });
  });

  it('[UNIT] | Should: be able to [GET] => [FOLLOWING]', async () => {
    module.service.getFollowings.mockResolvedValue([VALID_FOLLOW]);

    const result = await module.controller.getFollowing({
      followerId: USER_FOLLOWER.id,
    });

    expect(result).toStrictEqual({
      following: [VALID_FOLLOW.toStruct()],
    });

    expect(module.service.getFollowings).toHaveBeenCalledTimes(1);
    expect(module.service.getFollowings).toHaveBeenCalledWith({
      followerId: USER_FOLLOWER.id,
    });
  });

  it('[UNIT] | Should: be able to [COUNT] => [FOLLOWERS]', async () => {
    module.service.countFollowers.mockResolvedValue(1);

    const result = await module.controller.countFollowers({
      followingId: USER_FOLLOWED.id,
    });

    expect(result).toStrictEqual({ follwers: 1 });

    expect(module.service.countFollowers).toHaveBeenCalledTimes(1);
    expect(module.service.countFollowers).toHaveBeenCalledWith({
      followingId: USER_FOLLOWED.id,
    });
  });
});
