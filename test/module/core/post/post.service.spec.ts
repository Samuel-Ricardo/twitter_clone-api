import { ISimulatePostService } from '@test/@types';
import { MockFactory } from '@test/mock';
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

    const result = await module.service.listAll();

    expect(result).toEqual([VALID_POST]);
    expect(module.list.execute).toBeCalledTimes(1);
    expect(module.list.execute).toHaveBeenCalledWith();
  });

  it('[UNIT] | Should: create => [POST]', async () => {
    module.create.execute.mockResolvedValue(VALID_POST);

    const result = await module.service.create(CREATE_POST_DATA);

    expect(result).toEqual(VALID_POST);
    expect(module.create.execute).toBeCalledTimes(1);
    expect(module.create.execute).toHaveBeenCalledWith(CREATE_POST_DATA);
  });

  it('[UNIT] | Should: update => [POST]', async () => {
    module.update.execute.mockResolvedValue(VALID_UPDATED_POST);

    const result = await module.service.update(UPDATE_POST_DATA);

    expect(result).toEqual(VALID_UPDATED_POST);
    expect(module.update.execute).toBeCalledTimes(1);
    expect(module.update.execute).toHaveBeenCalledWith(UPDATE_POST_DATA);

    expect(result.id).toEqual(VALID_POST.id);
    expect(result.body).not.toEqual(VALID_POST.body);
  });

  it('[UNIT] | Should: delete => [POST]', async () => {
    module.deletePost.execute.mockResolvedValue(undefined);

    expect(module.service.delete({ id: VALID_POST.id })).resolves.not.toThrow();

    expect(module.deletePost.execute).toBeCalledTimes(1);
    expect(module.deletePost.execute).toHaveBeenCalledWith({
      id: VALID_POST.id,
    });
  });
});
