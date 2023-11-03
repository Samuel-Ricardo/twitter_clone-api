import { ISimulateLikeController } from '@test/@types/simulate/like/controller';
import { ENCRYPTED_DATA, MockFactory, VALID_USER } from '@test/mock';
import { CREATE_POST_LIKE_DATA, VALID_POST_LIKE } from '@test/mock/data/like';
import { VALID_POST } from '@test/mock/data/post';

describe('[CONTROLLER] | LIKE', () => {
  let module: ISimulateLikeController;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.LIKE.CONTROLLER_DEV();

    expect(module).toBeDefined();
    expect(module.controller).toBeDefined();
    expect(module.service).toBeDefined();
  });

  it('[UNIT] | Should: create => Like', async () => {
    module.service.like.mockResolvedValue(ENCRYPTED_DATA);

    const result = await module.controller.save(CREATE_POST_LIKE_DATA);

    //expect(result).toEqual({ like: VALID_POST_LIKE.toStruct() });
    expect(result).toEqual({ like: ENCRYPTED_DATA });

    expect(module.service.like).toHaveBeenCalledTimes(1);
    expect(module.service.like).toHaveBeenCalledWith(CREATE_POST_LIKE_DATA);
  });

  it('[UNIT] | Should: delete => Like', async () => {
    module.service.dislike.mockResolvedValue();

    expect(
      module.controller.dislike({ id: VALID_POST_LIKE.id }),
    ).resolves.not.toThrow();

    expect(module.service.dislike).toHaveBeenCalledTimes(1);
    expect(module.service.dislike).toHaveBeenCalledWith({
      id: VALID_POST_LIKE.id,
    });
  });

  it('[UNIT] | Should: get post likes => Like', async () => {
    module.service.postLikes.mockResolvedValue([VALID_POST_LIKE]);

    const result = await module.controller.getPostLikes({
      likedId: VALID_POST.id,
    });

    expect(result).toBeDefined();
    expect(result.likes).toBeDefined();
    expect(result.likes.length).toBe(1);
    expect(result.likes[0]).toStrictEqual(VALID_POST_LIKE.toStruct());
    expect(module.service.postLikes).toHaveBeenCalledTimes(1);
    expect(module.service.postLikes).toHaveBeenCalledWith({
      likedId: VALID_POST.id,
    });
  });

  it('[UNIT] | Should: get user likes => Like', async () => {
    module.service.userLikes.mockResolvedValue([VALID_POST_LIKE]);

    const result = await module.controller.getUserLikes({
      userId: VALID_USER.id,
    });

    expect(result).toStrictEqual({ likes: [VALID_POST_LIKE.toStruct()] });
    expect(module.service.userLikes).toHaveBeenCalledTimes(1);
    expect(module.service.userLikes).toHaveBeenCalledWith({
      userId: VALID_USER.id,
    });
  });
});
