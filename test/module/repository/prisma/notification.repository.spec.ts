import { ISimulatedPrismaNotificationRepository } from '@test/@types/simulate/notification/repository';
import { MockFactory } from '@test/mock';
import {
  VALID_POST_NOTIFICATION,
  VALID_POST_NOTIFICATION_DATA,
} from '@test/mock/data/notification';
import { Notification as PrismaNotification } from '@prisma/client';

describe('[REPOSITORY] | PRISMA => [NOTIFICATION]', () => {
  let module: ISimulatedPrismaNotificationRepository;

  beforeEach(async () => {
    jest.clearAllMocks();

    module = MockFactory.REPOSITORY.PRISMA.NOTIFICATION_DEV();

    expect(module).toBeDefined();
    expect(module.repository).toBeDefined();
    expect(module.prisma).toBeDefined();
  });

  it('[UNIT] | Should: create => [NOTIFICATION] ', async () => {
    module.prisma.notification.create.mockResolvedValue(
      VALID_POST_NOTIFICATION_DATA as PrismaNotification,
    );

    const result = await module.repository.create(VALID_POST_NOTIFICATION_DATA);

    expect(result).toEqual(VALID_POST_NOTIFICATION);
    expect(module.prisma.notification.create).toHaveBeenCalledTimes(1);
    expect(module.prisma.notification.create).toHaveBeenCalledWith({
      data: VALID_POST_NOTIFICATION_DATA,
    });
  });
});
