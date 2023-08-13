import { ISimulatePrismaLikeRepository } from '@test/@types/simulate/like/repository';
import { MockFactory, VALID_USER } from '@test/mock';
import {
  CREATE_POST_LIKE_DATA,
  VALID_POST_LIKE,
  VALID_POST_LIKE_DATA,
} from '@test/mock/data/like';
import { VALID_POST } from '@test/mock/data/post';

describe('[REPOSITORY] | LIKE', () => {
  let module: ISimulatePrismaLikeRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.REPOSITORY.PRISMA.LIKE_DEV();

    expect(module).toBeDefined();
    expect(module.repository).toBeDefined();
    expect(module.prisma).toBeDefined();
  });

  it('[UNIT] | Should: create => [LIKE]', async () => {
    module.prisma.like.create.mockResolvedValue(VALID_POST_LIKE_DATA);

    const result = await module.repository.create(CREATE_POST_LIKE_DATA);

    expect(result).toEqual(VALID_POST_LIKE);
    expect(module.prisma.like.create).toHaveBeenCalledTimes(1);
    expect(module.prisma.like.create).toHaveBeenCalledWith({
      data: CREATE_POST_LIKE_DATA,
    });
  });

  it('[UNIT] | Should: delete => [LIKE]', async () => {
    module.prisma.like.delete.mockResolvedValue(VALID_POST_LIKE);

    const result = await module.repository.delete({ id: VALID_POST_LIKE.id });

    expect(result).toBeUndefined();
    expect(module.prisma.like.delete).toHaveBeenCalledTimes(1);
    expect(module.prisma.like.delete).toHaveBeenCalledWith({
      where: {
        id: VALID_POST_LIKE.id,
      },
    });
  });

  it('[UNIT] | Should: find by post => [LIKE]', async () => {
    module.prisma.like.findMany.mockResolvedValue([VALID_POST_LIKE]);

    const result = await module.repository.getLikesOfPost({
      likedId: VALID_POST.id,
    });

    expect(result).toEqual([VALID_POST_LIKE]);
    expect(module.prisma.like.findMany).toHaveBeenCalledTimes(1);
    expect(module.prisma.like.findMany).toHaveBeenCalledWith({
      where: {
        likedId: VALID_POST.id,
      },
    });
  });

  it('[UNIT] | Should: find by user => [LIKE]', async () => {
    module.prisma.like.findMany.mockResolvedValue([VALID_POST_LIKE]);

    const result = await module.repository.getLikesOfUser({
      userId: VALID_USER.id,
    });

    expect(result).toEqual([VALID_POST_LIKE]);
    expect(module.prisma.like.findMany).toHaveBeenCalledTimes(1);
    expect(module.prisma.like.findMany).toHaveBeenCalledWith({
      where: {
        userId: VALID_USER.id,
      },
    });
  });
});
