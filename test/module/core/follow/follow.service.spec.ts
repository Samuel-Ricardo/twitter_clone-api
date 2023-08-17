import { FollowService } from '../../../../src/modules/@core/follow/service';
import { ISimulateFollowService } from '@test/@types/simulate/follow/service';
import { MockFactory } from '@test/mock';

describe('[SERVICE] | FOLLOW ', () => {
  let module: ISimulateFollowService;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.FOLLOW.SERVICE_DEV();

    expect(module).toBeDefined();
    expect(module.service).toBeInstanceOf(FollowService);
    expect(module.use_case).toBeDefined();
  });

  it('', async () => {
    expect(true).toBeTruthy();
  });
});
