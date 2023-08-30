import { ISimulatedNotificationController } from '@test/@types/simulate/notification/controller';
import { MockFactory } from '@test/mock';

describe('[CONTROLLER] | NOTIFICATION', () => {
  let module: ISimulatedNotificationController;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.NOTIFICATION.CONTROLLER_DEV();

    expect(module).toBeDefined();
    expect(module.controller).toBeDefined();
    expect(module.service).toBeDefined();
  });

  it('[UNIT] | Should: create => [NOTIFICATION]', async () => {
    expect(true).toBe(true);
  });
});
