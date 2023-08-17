import { FollowController } from '../../../../src/modules/@core/follow/controller';
import { ISimulateFollowController } from '@test/@types/simulate/follow/controller';
import { MockFactory } from '@test/mock';

describe('[CONTROLLER] | FOLLOW ', () => {
  let module: ISimulateFollowController;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.FOLLOW.CONTROLLER_DEV();

    expect(module).toBeDefined();
    expect(module.controller).toBeInstanceOf(FollowController);
    expect(module.service).toBeDefined();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
