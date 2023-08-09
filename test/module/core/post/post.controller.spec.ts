import { ISimulatePostController } from '@test/@types';
import { MockFactory } from '@test/mock';
import {
  CREATE_POST_DATA,
  VALID_POST,
  VALID_POST_DATA,
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
});
