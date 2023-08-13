import { ISimulatePrismaLikeRepository } from '@test/@types/simulate/like/repository';
import { MockFactory } from '@test/mock';
import {
  CREATE_POST_LIKE_DATA,
  VALID_POST_LIKE,
  VALID_POST_LIKE_DATA,
} from '@test/mock/data/like';

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
});
