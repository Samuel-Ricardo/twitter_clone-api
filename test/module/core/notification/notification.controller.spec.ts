import { ISimulatedNotificationController } from '@test/@types/simulate/notification/controller';
import { MockFactory } from '@test/mock';
import {
  VALID_POST_NOTIFICATION,
  VALID_POST_NOTIFICATION_DATA,
} from '@test/mock/data/notification';

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
    module.service.createNotification.mockResolvedValue(
      VALID_POST_NOTIFICATION,
    );

    const result = await module.controller.create(VALID_POST_NOTIFICATION_DATA);

    expect(result).toStrictEqual({
      notification: VALID_POST_NOTIFICATION.toStruct(),
    });

    expect(module.service.createNotification).toHaveBeenCalledTimes(1);
    expect(module.service.createNotification).toHaveBeenCalledWith(
      VALID_POST_NOTIFICATION_DATA,
    );
  });
});
