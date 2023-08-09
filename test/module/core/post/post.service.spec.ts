import { ISimulatePostService } from '@test/@types';
import { MockFactory } from '@test/mock';
import { VALID_POST } from '@test/mock/data/post';

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
});
