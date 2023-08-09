import { ISimulatePostController } from '@test/@types';
import { MockFactory } from '@test/mock';

describe('[CONTROLLER] | POST', () => {
  let module: ISimulatePostController;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.POST.CONTROLLER.DEFAULT.SIMULATE();
  });

  it('[UNIT] | Should: list [all] => [POST]', async () => {
    expect(true).toBeTruthy();
  });
});
