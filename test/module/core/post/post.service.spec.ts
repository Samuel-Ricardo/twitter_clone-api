import { ISimulatePostService } from '@test/@types';
import { ENCRYPTED_DATA, MockFactory, VALID_USER } from '@test/mock';
import {
  CREATE_POST_DATA,
  UPDATE_POST_DATA,
  VALID_POST,
  VALID_UPDATED_POST,
} from '@test/mock/data/post';

describe('[SERVICE] | POST', () => {
  let module: ISimulatePostService;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.POST.SERVICE.DEFAULT.SIMULATE();
  });

  it('[UNIT] | Should: list [all] => [POST]', async () => {
    module.list.execute.mockResolvedValue([VALID_POST]);
    module.policy.security.encrypt.before.posts.execute.mockReturnValue(
      ENCRYPTED_DATA,
    );

    const result = await module.service.listAll();

    expect(result).toEqual(ENCRYPTED_DATA);

    expect(module.list.execute).toBeCalledTimes(1);
    expect(module.list.execute).toHaveBeenCalledWith();

    expect(module.policy.security.encrypt.before.posts.execute).toBeCalledTimes(
      1,
    );
    expect(
      module.policy.security.encrypt.before.posts.execute,
    ).toHaveBeenCalledWith([VALID_POST]);
  });

  it('[UNIT] | Should: create => [POST]', async () => {
    module.create.execute.mockResolvedValue(VALID_POST);
    module.policy.security.encrypt.before.post.execute.mockReturnValue(
      ENCRYPTED_DATA,
    );

    const result = await module.service.create(CREATE_POST_DATA);

    expect(result).toEqual(ENCRYPTED_DATA);

    expect(module.create.execute).toBeCalledTimes(1);
    expect(module.create.execute).toHaveBeenCalledWith(CREATE_POST_DATA);

    expect(module.policy.security.encrypt.before.post.execute).toBeCalledTimes(
      1,
    );
    expect(
      module.policy.security.encrypt.before.post.execute,
    ).toHaveBeenCalledWith(VALID_POST);
  });

  it('[UNIT] | Should: update => [POST]', async () => {
    module.update.execute.mockResolvedValue(VALID_UPDATED_POST);
    module.policy.security.encrypt.before.post.execute.mockReturnValue(
      ENCRYPTED_DATA,
    );

    const result = await module.service.update(UPDATE_POST_DATA);

    expect(result).toEqual(ENCRYPTED_DATA);

    expect(module.update.execute).toBeCalledTimes(1);
    expect(module.update.execute).toHaveBeenCalledWith(UPDATE_POST_DATA);

    //    expect(result.id).toEqual(VALID_POST.id);
    //    expect(result.body).not.toEqual(VALID_POST.body);
    expect(module.policy.security.encrypt.before.post.execute).toBeCalledTimes(
      1,
    );
    expect(
      module.policy.security.encrypt.before.post.execute,
    ).not.toHaveBeenCalledWith(VALID_POST);
    expect(
      module.policy.security.encrypt.before.post.execute,
    ).toHaveBeenCalledWith(VALID_UPDATED_POST);
  });

  it('[UNIT] | Should: delete => [POST]', async () => {
    module.deletePost.execute.mockResolvedValue(undefined);

    expect(module.service.delete({ id: VALID_POST.id })).resolves.not.toThrow();

    expect(module.deletePost.execute).toBeCalledTimes(1);
    expect(module.deletePost.execute).toHaveBeenCalledWith({
      id: VALID_POST.id,
    });
  });

  it('[UNIT] | Should: detail => [POST]', async () => {
    module.detail.execute.mockResolvedValue(VALID_POST);
    module.policy.security.encrypt.before.post.execute.mockReturnValue(
      ENCRYPTED_DATA,
    );

    const result = await module.service.detail({ id: VALID_POST.id });

    expect(result).toEqual(ENCRYPTED_DATA);

    expect(module.detail.execute).toBeCalledTimes(1);
    expect(module.detail.execute).toHaveBeenCalledWith({ id: VALID_POST.id });

    expect(module.policy.security.encrypt.before.post.execute).toBeCalledTimes(
      1,
    );
    expect(
      module.policy.security.encrypt.before.post.execute,
    ).toHaveBeenCalledWith(VALID_POST);
  });

  it('[UNIT] | Should: list [user] posts => [POST]', async () => {
    module.listUserPosts.execute.mockResolvedValue([VALID_POST]);
    module.policy.security.encrypt.before.posts.execute.mockReturnValue(
      ENCRYPTED_DATA,
    );

    const result = await module.service.listPostsFromUser({
      id: VALID_POST.authorId,
    });

    expect(result).toEqual(ENCRYPTED_DATA);

    expect(module.listUserPosts.execute).toBeCalledTimes(1);
    expect(module.listUserPosts.execute).toHaveBeenCalledWith({
      id: VALID_POST.authorId,
    });

    //expect(result[0].authorId).toEqual(VALID_USER.id);

    expect(module.policy.security.encrypt.before.posts.execute).toBeCalledTimes(
      1,
    );
    expect(
      module.policy.security.encrypt.before.posts.execute,
    ).toHaveBeenCalledWith([VALID_POST]);
  });
});
