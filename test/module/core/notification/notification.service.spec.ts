import { ISimulatedNotificationService } from '@test/@types/simulate/notification/service';
import { MockFactory } from '@test/mock';
import {
  VALID_POST_NOTIFICATION,
  VALID_POST_NOTIFICATION_DATA,
} from '@test/mock/data/notification';

describe('[SERVICE] | NOTIFICATION', () => {
  let module: ISimulatedNotificationService;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.NOTIFICATION.SERVICE_DEV();

    expect(module).toBeDefined();
    expect(module.service).toBeDefined();
    expect(module.use_case).toBeDefined();
  });

  it('[UNIT] | Should: create => [NOTIFICATION]', async () => {
    module.use_case.create.execute.mockResolvedValue(VALID_POST_NOTIFICATION);

    const result = await module.service.createNotification(
      VALID_POST_NOTIFICATION_DATA,
    );

    expect(result).toStrictEqual(VALID_POST_NOTIFICATION);

    expect(module.use_case.create.execute).toBeCalledTimes(1);
    expect(module.use_case.create.execute).toBeCalledWith(
      VALID_POST_NOTIFICATION_DATA,
    );

    expect(module.use_case.emit.created.emit).toBeCalledTimes(1);
    expect(module.use_case.emit.created.emit).toBeCalledWith(
      VALID_POST_NOTIFICATION.toStruct(),
    );
  });

  it('[UNIT] | Should: find by [user] => [NOTIFICATION]', async () => {
    module.use_case.get.by.user.execute.mockResolvedValue([
      VALID_POST_NOTIFICATION,
    ]);

    const result = await module.service.listUserNotifications({
      userId: VALID_POST_NOTIFICATION.userId,
    });

    expect(result).toStrictEqual([VALID_POST_NOTIFICATION]);

    expect(module.use_case.get.by.user.execute).toBeCalledTimes(1);
    expect(module.use_case.get.by.user.execute).toBeCalledWith({
      userId: VALID_POST_NOTIFICATION.userId,
    });
  });

  it('[UNIT] | Should: delete => [NOTIFICATION]', async () => {
    module.use_case.delete_notification.execute.mockResolvedValue();

    expect(
      module.service.delete({ id: VALID_POST_NOTIFICATION.id }),
    ).resolves.not.toThrow();
  });
});
