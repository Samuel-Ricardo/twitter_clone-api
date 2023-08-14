import { ISimulateLikeService } from '@test/@types/simulate/like';
import { MockFactory, VALID_USER } from '@test/mock';
import { VALID_POST_LIKE, VALID_POST_LIKE_DATA } from '@test/mock/data/like';
import { VALID_POST, VALID_POST_DATA } from '@test/mock/data/post';

describe('[SERVICE] | LIKE', () => {
  let module: ISimulateLikeService;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.LIKE.SERVICE_DEV();

    expect(module).toBeDefined();
    expect(module.service).toBeDefined();
    expect(module.use_case).toBeDefined();
  });

  it('[UNIT] | Should: create => Like', async () => {
    module.use_case.create.execute.mockResolvedValue(VALID_POST_LIKE);

    const result = await module.service.like(VALID_POST_LIKE_DATA);

    expect(result).toEqual(VALID_POST_LIKE);
    expect(module.use_case.create.execute).toHaveBeenCalledTimes(1);
    expect(module.use_case.create.execute).toHaveBeenCalledWith(
      VALID_POST_LIKE_DATA,
    );
  });

  it('[UNIT] | Should: delete => Like', async () => {
    module.use_case.deleteLike.execute.mockResolvedValue();

    const result = await module.service.dislike({ id: VALID_POST.id });

    expect(result).toEqual(undefined);
    expect(module.use_case.deleteLike.execute).toHaveBeenCalledTimes(1);
    expect(module.use_case.deleteLike.execute).toHaveBeenCalledWith({
      id: VALID_POST.id,
    });
  });

  it('[UNIT] | Should: get post likes => Like', async () => {
    module.use_case.getPostLikes.execute.mockResolvedValue([VALID_POST_LIKE]);

    const result = await module.service.postLikes({ likedId: VALID_POST.id });

    expect(result).toEqual([VALID_POST_LIKE]);
    expect(module.use_case.getPostLikes.execute).toHaveBeenCalledTimes(1);
    expect(module.use_case.getPostLikes.execute).toHaveBeenCalledWith({
      likedId: VALID_POST.id,
    });
  });

  it('[UNIT] | Should: get user likes => Like', async () => {
    module.use_case.getUserLikes.execute.mockResolvedValue([VALID_POST_LIKE]);

    const result = await module.service.userLikes({ userId: VALID_USER.id });

    expect(result).toEqual([VALID_POST_LIKE]);
    expect(module.use_case.getUserLikes.execute).toHaveBeenCalledTimes(1);
    expect(module.use_case.getUserLikes.execute).toHaveBeenCalledWith({
      userId: VALID_USER.id,
    });
  });
});