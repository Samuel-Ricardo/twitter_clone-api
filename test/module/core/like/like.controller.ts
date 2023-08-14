import { ISimulateLikeController } from '@test/@types/simulate/like/controller';
import { MockFactory } from '@test/mock';

describe('[CONTROLLER] | LIKE', () => {
  let module: ISimulateLikeController;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.LIKE.CONTROLLER_DEV();

    expect(module).toBeDefined();
    expect(module.controller).toBeDefined();
    expect(module.service).toBeDefined();
  });
});
