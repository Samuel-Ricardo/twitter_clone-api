import { ISimulatePostController } from '@test/@types';
import { MockFactory, VALID_USER } from '@test/mock';
import {
  CREATE_POST_DATA,
  UPDATE_POST_DATA,
  VALID_POST,
  VALID_POST_DATA,
  VALID_UPDATED_POST,
} from '@test/mock/data/post';

describe('[CONTROLLER] | POST', () => {
  let module: ISimulatePostController;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.POST.CONTROLLER.DEFAULT.SIMULATE();

    expect(module).toBeDefined();
  });

  it('[UNIT] | Should: list [all] => [POST]', async () => {
    module.service.listAll.mockResolvedValue([VALID_POST]);

    const result = await module.controller.listAll();

    expect(result).toEqual({ posts: [VALID_POST] });

    expect(module.service.listAll).toHaveBeenCalledTimes(1);
    expect(module.service.listAll).toHaveBeenCalledWith();
  });

  it('[UNIT] | Should: create => [POST]', async () => {
    module.service.create.mockResolvedValue(VALID_POST);

    const result = await module.controller.create(CREATE_POST_DATA);

    expect(result).toEqual({ post: VALID_POST });

    expect(module.service.create).toHaveBeenCalledTimes(1);
    expect(module.service.create).toHaveBeenCalledWith(CREATE_POST_DATA);
  });

  it('[UNIT] | Should: update => [POST]', async () => {
    module.service.update.mockResolvedValue(VALID_UPDATED_POST);

    const result = await module.controller.update(UPDATE_POST_DATA);

    expect(result).toEqual({ post: VALID_UPDATED_POST });

    expect(module.service.update).toHaveBeenCalledTimes(1);
    expect(module.service.update).toHaveBeenCalledWith(UPDATE_POST_DATA);
  });

  it('[UNIT] | Should: delete => [POST]', async () => {
    module.service.delete.mockResolvedValue();

    expect(
      module.controller.delete({ id: VALID_POST.id }),
    ).resolves.not.toThrow();

    expect(module.service.delete).toHaveBeenCalledTimes(1);
    expect(module.service.delete).toHaveBeenCalledWith({ id: VALID_POST.id });
  });

  it('[UNIT] | Should: detail => [POST]', async () => {
    module.service.detail.mockResolvedValue(VALID_POST);

    const result = await module.controller.details({ id: VALID_POST.id });

    expect(result).toEqual({ post: VALID_POST });

    expect(module.service.detail).toHaveBeenCalledTimes(1);
    expect(module.service.detail).toHaveBeenCalledWith({ id: VALID_POST.id });
  });

  it('[UNIT] | Should: list [user] posts => [POST]', async () => {
    module.service.listPostsFromUser.mockResolvedValue([VALID_POST]);

    const result = await module.controller.listUserPosts({
      id: VALID_POST.authorId,
    });

    expect(result).toEqual({ posts: [VALID_POST] });

    expect(module.service.listPostsFromUser).toHaveBeenCalledTimes(1);
    expect(module.service.listPostsFromUser).toHaveBeenCalledWith({
      id: VALID_POST.authorId,
    });

    expect(result.posts[0].authorId).toEqual(VALID_USER.id);
  });
});
