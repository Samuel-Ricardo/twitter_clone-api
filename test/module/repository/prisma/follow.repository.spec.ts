import { ISimulateFollowRepository } from '@test/@types/simulate/follow/repository';
import { MockFactory } from '@test/mock';
import {
  CREATE_FOLLOW_DATA,
  USER_FOLLOWED,
  USER_FOLLOWER,
  VALID_FOLLOW,
} from '@test/mock/data/follow';

describe('[REPOSITORY] | FOLLOW', () => {
  let module: ISimulateFollowRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.REPOSITORY.PRISMA.FOLLOW_DEV();

    expect(module).toBeDefined();
    expect(module.repository).toBeDefined();
    expect(module.prisma).toBeDefined();
  });

  it('[UNIT] | Should: create => [FOLLOW]', async () => {
    module.prisma.follow.create.mockResolvedValue(VALID_FOLLOW);

    const result = await module.repository.create(CREATE_FOLLOW_DATA);

    expect(result).toStrictEqual(VALID_FOLLOW);
    expect(module.prisma.follow.create).toBeCalledTimes(1);
    expect(module.prisma.follow.create).toBeCalledWith({
      data: CREATE_FOLLOW_DATA,
    });
  });

  it('[UNIT] | Should: count => [FOLLOWERS]', async () => {
    module.prisma.follow.count.mockResolvedValue(1);

    const result = await module.repository.countFollowers({
      followingId: USER_FOLLOWED.id,
    });

    expect(result).toBe(1);
    expect(module.prisma.follow.count).toBeCalledTimes(1);
    expect(module.prisma.follow.count).toBeCalledWith({
      where: {
        followingId: USER_FOLLOWED.id,
      },
    });
  });

  it('[UNIT] | Should: count => [FOLLOWING]', async () => {
    module.prisma.follow.count.mockResolvedValue(1);

    const result = await module.repository.countFollowings({
      followerId: USER_FOLLOWER.id,
    });

    expect(result).toBe(1);
    expect(module.prisma.follow.count).toBeCalledTimes(1);
    expect(module.prisma.follow.count).toBeCalledWith({
      where: { followerId: USER_FOLLOWER.id },
    });
  });

  it('[UNIT] | Should: delete => [FOLLOW]', async () => {
    module.prisma.follow.delete.mockResolvedValue(VALID_FOLLOW);

    expect(
      module.repository.delete({ id: VALID_FOLLOW.id }),
    ).resolves.not.toThrow();

    expect(module.prisma.follow.delete).toBeCalledTimes(1);
    expect(module.prisma.follow.delete).toBeCalledWith({
      where: { id: VALID_FOLLOW.id },
    });
  });

  it('[UNIT] | Should: get => [FOLLOWERS]', async () => {
    module.prisma.follow.findMany.mockResolvedValue([VALID_FOLLOW]);

    const result = await module.repository.getFollowers({
      followingId: USER_FOLLOWED.id,
    });

    expect(result).toStrictEqual([VALID_FOLLOW]);
    expect(module.prisma.follow.findMany).toBeCalledTimes(1);
    expect(module.prisma.follow.findMany).toBeCalledWith({
      where: {
        followingId: USER_FOLLOWED.id,
      },
    });
  });

  it('[UNIT] | Should: get => [FOLLOWING]', async () => {
    module.prisma.follow.findMany.mockResolvedValue([VALID_FOLLOW]);

    const result = await module.repository.getFollowings({
      followerId: USER_FOLLOWER.id,
    });

    expect(result).toStrictEqual([VALID_FOLLOW]);
    expect(module.prisma.follow.findMany).toBeCalledTimes(1);
    expect(module.prisma.follow.findMany).toBeCalledWith({
      where: { followerId: USER_FOLLOWER.id },
    });
  });
});
