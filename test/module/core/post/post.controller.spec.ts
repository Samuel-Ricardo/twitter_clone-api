import { ISimulatePostController } from '@test/@types';
import { MockFactory } from '@test/mock';
import { VALID_POST } from '@test/mock/data/post';

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
});
