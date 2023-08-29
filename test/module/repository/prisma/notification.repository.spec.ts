import { ISimulatedPrismaNotificationRepository } from '@test/@types/simulate/notification/repository';
import { MockFactory } from '@test/mock';
import {
  VALID_POST_NOTIFICATION,
  VALID_POST_NOTIFICATION_DATA,
  VALID_POST,
  VALID_USER,
  CREATE_POST_NOTIFICATION_DATA,
  SET_VISUALIZED_POST_NOTIFICATION,
  SET_VISUALIZED_POST_NOTIFICATION_DATA,
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

    expect(result).toStrictEqual(VALID_POST_NOTIFICATION);
    expect(module.prisma.notification.create).toHaveBeenCalledTimes(1);
    expect(module.prisma.notification.create).toHaveBeenCalledWith({
      data: VALID_POST_NOTIFICATION_DATA,
    });
  });

  it('[UNIT] | Should: update => [NOTIFICATION]', async () => {
    module.prisma.notification.update.mockResolvedValue(
      VALID_POST_NOTIFICATION_DATA as PrismaNotification,
    );

    const result = await module.repository.setVisualized(
      SET_VISUALIZED_POST_NOTIFICATION_DATA,
    );

    expect(result).toStrictEqual(SET_VISUALIZED_POST_NOTIFICATION);
    expect(result.id).toEqual(VALID_POST_NOTIFICATION.id);
    expect(result.visualizedAt).not.toEqual(
      VALID_POST_NOTIFICATION.visualizedAt,
    );

    expect(module.prisma.notification.update).toHaveBeenCalledTimes(1);
    expect(module.prisma.notification.update).toHaveBeenCalledWith({
      where: {
        id: VALID_POST_NOTIFICATION.id,
      },
      data: {
        visualizedAt: SET_VISUALIZED_POST_NOTIFICATION_DATA.visualizedAt,
      },
    });
  });

  it('[UNIT] | Should: delete => [NOTIFICATION]', async () => {
    module.prisma.notification.delete.mockResolvedValue(
      VALID_POST_NOTIFICATION_DATA as PrismaNotification,
    );

    expect(
      module.repository.delete({ id: VALID_POST_NOTIFICATION.id }),
    ).resolves.not.toThrow();

    expect(module.prisma.notification.delete).toHaveBeenCalledTimes(1);
    expect(module.prisma.notification.delete).toHaveBeenCalledWith({
      where: {
        id: VALID_POST_NOTIFICATION.id,
      },
    });
  });

  it('[UNIT] | Should: find by [user] => [NOTIFICATION]', async () => {
    module.prisma.notification.findMany.mockResolvedValue([
      VALID_POST_NOTIFICATION as PrismaNotification,
    ]);

    const result = await module.repository.getByUser({ userId: VALID_USER.id });

    expect(result).toStrictEqual([VALID_POST_NOTIFICATION]);
    expect(module.prisma.notification.findMany).toHaveBeenCalledTimes(1);
    expect(module.prisma.notification.findMany).toHaveBeenCalledWith({
      where: {
        userId: VALID_USER.id,
      },
    });
  });
});
