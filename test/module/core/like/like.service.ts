import { ISimulateLikeService } from '@test/@types/simulate/like';
import { MockFactory } from '@test/mock';

describe('[SERVICE] | LIKE', () => {
  let module: ISimulateLikeService;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.LIKE.SERVICE_DEV();

    expect(module).toBeDefined();
    expect(module.service).toBeDefined();
    expect(module.use_case).toBeDefined();
  });
});
