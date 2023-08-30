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

  it('[UNIT] | Should: find by [user] => [NOTIFICATION]', async () => {
    module.service.listUserNotifications.mockResolvedValue([
      VALID_POST_NOTIFICATION,
    ]);

    const result = await module.controller.listUserNotifications({
      userId: VALID_POST_NOTIFICATION.userId,
    });

    expect(result).toStrictEqual({
      notifications: [VALID_POST_NOTIFICATION.toStruct()],
    });

    expect(module.service.listUserNotifications).toHaveBeenCalledTimes(1);
    expect(module.service.listUserNotifications).toHaveBeenCalledWith({
      userId: VALID_POST_NOTIFICATION.userId,
    });
  });

  it('[UNIT] | Should: delete => [NOTIFICATION]', async () => {
    expect(
      module.controller.delete({ id: VALID_POST_NOTIFICATION.id }),
    ).resolves.not.toThrow();

    expect(module.service.delete).toHaveBeenCalledTimes(1);
    expect(module.service.delete).toHaveBeenCalledWith({
      id: VALID_POST_NOTIFICATION.id,
    });
  });
});
