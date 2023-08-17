import { Follow } from '../../../../src/modules/@core/follow';
import { FollowService } from '../../../../src/modules/@core/follow/service';
import { ISimulateFollowService } from '@test/@types/simulate/follow/service';
import { MockFactory } from '@test/mock';
import {
  CREATE_FOLLOW_DATA,
  FOLLOW_DATA,
  USER_FOLLOWED,
  USER_FOLLOWER,
  VALID_FOLLOW,
} from '@test/mock/data/follow';

describe('[SERVICE] | FOLLOW ', () => {
  let module: ISimulateFollowService;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.FOLLOW.SERVICE_DEV();

    expect(module).toBeDefined();
    expect(module.service).toBeInstanceOf(FollowService);
    expect(module.use_case).toBeDefined();
  });

  it('[UNIT] | Should: be able to => [FOLLOW]', async () => {
    module.use_case.create.execute.mockResolvedValue(VALID_FOLLOW);

    const result = await module.service.follow(CREATE_FOLLOW_DATA);

    expect(result).toBeInstanceOf(Follow);
    expect(result).toStrictEqual(VALID_FOLLOW);

    expect(module.use_case.create.execute).toBeCalledTimes(1);
    expect(module.use_case.create.execute).toBeCalledWith(CREATE_FOLLOW_DATA);
  });

  it('[UNIT] | Should: be able to => [UNFOLLOW]', async () => {
    module.use_case.unfollow.execute.mockResolvedValue();

    expect(
      module.service.unfollow({ id: VALID_FOLLOW.id }),
    ).resolves.not.toThrow();

    expect(module.use_case.unfollow.execute).toBeCalledTimes(1);
    expect(module.use_case.unfollow.execute).toBeCalledWith({
      id: VALID_FOLLOW.id,
    });
  });

  it('[UNIT] | Should: count => [FOLLOWERS]', async () => {
    module.use_case.count_followers.execute.mockResolvedValue(1);

    const result = await module.service.countFollowers({
      followingId: USER_FOLLOWED.id,
    });

    expect(result).toBe(1);

    expect(module.use_case.count_followers.execute).toBeCalledTimes(1);
    expect(module.use_case.count_followers.execute).toBeCalledWith({
      followingId: USER_FOLLOWED.id,
    });
  });

  it('[UNIT] | Should: count => [FOLLOWING]', async () => {
    module.use_case.count_following.execute.mockResolvedValue(1);

    const result = await module.service.countFollowings({
      followerId: USER_FOLLOWER.id,
    });

    expect(result).toBe(1);

    expect(module.use_case.count_following.execute).toBeCalledTimes(1);
    expect(module.use_case.count_following.execute).toBeCalledWith({
      followerId: USER_FOLLOWER.id,
    });
  });

  it('[UNIT] | Should: get => [FOLLOWERS]', async () => {
    module.use_case.get_followers.execute.mockResolvedValue([VALID_FOLLOW]);

    const result = await module.service.getFollowers({
      followingId: USER_FOLLOWED.id,
    });

    expect(result).toStrictEqual([VALID_FOLLOW]);

    expect(module.use_case.get_followers.execute).toBeCalledTimes(1);
    expect(module.use_case.get_followers.execute).toBeCalledWith({
      followingId: USER_FOLLOWED.id,
    });
  });

  it('[UNIT] | Should: get => [FOLLOWING]', async () => {
    module.use_case.get_following.execute.mockResolvedValue([VALID_FOLLOW]);

    const result = await module.service.getFollowings({
      followerId: USER_FOLLOWER.id,
    });

    expect(result).toStrictEqual([VALID_FOLLOW]);

    expect(module.use_case.get_following.execute).toBeCalledTimes(1);
    expect(module.use_case.get_following.execute).toBeCalledWith({
      followerId: USER_FOLLOWER.id,
    });
  });
});
