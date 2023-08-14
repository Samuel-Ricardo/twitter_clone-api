import { ISimulateLikeController } from '@test/@types/simulate/like/controller';
import { MockFactory } from '@test/mock';
import { CREATE_POST_LIKE_DATA, VALID_POST_LIKE } from '@test/mock/data/like';

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
    module.service.like.mockResolvedValue(VALID_POST_LIKE);

    const result = await module.controller.save(CREATE_POST_LIKE_DATA);

    expect(result).toEqual({ like: VALID_POST_LIKE.toStruct() });
    expect(module.service.like).toHaveBeenCalledTimes(1);
    expect(module.service.like).toHaveBeenCalledWith(CREATE_POST_LIKE_DATA);
  });
});
