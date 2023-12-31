/*
 * @jest-environment ./test/environment
 */

import { INotificationRepository } from '../../../../../src/modules/@core/notification/repository';
import { MODULES } from '@modules';
import { PrismaNotificationRepository } from '../../../../../src/modules/repository/prisma/notification';
import {
  VALID_POST_NOTIFICATION_DATA,
  SET_VISUALIZED_POST_NOTIFICATION_DATA,
  VALID_USER,
} from '@test/mock/data/notification';

import { Notification } from '../../../../../src/modules/@core/notification/entity';

describe('[REPOSITORY] | PRISMA => [NOTIFICATION]', () => {
  let repository: INotificationRepository;
  let notification: Notification;

  beforeEach(() => {
    repository = MODULES.REPOSITORY.PRISMA.NOTIFICATION();

    expect(repository).toBeDefined();
    expect(repository).toBeInstanceOf(PrismaNotificationRepository);
  });

  it('[INTEGRATION] | Should: Create => [NOTIFICATION]', async () => {
    const result = await repository.create(VALID_POST_NOTIFICATION_DATA);

    expect(result).toHaveProperty('_id');
    expect(result).toBeInstanceOf(Notification);
    expect(result.userId).toBe(VALID_POST_NOTIFICATION_DATA.userId);
    expect(result.eventId).toBe(VALID_POST_NOTIFICATION_DATA.eventId);

    notification = result;
  });

  it('[INTEGRATION] | Shoudl: find by [USER] => [NOTIFICATION]', async () => {
    const result = await repository.getByUser({
      userId: VALID_USER.id,
    });

    expect(result.length).toBeGreaterThanOrEqual(1);
    expect(result[0]).toBeInstanceOf(Notification);
    expect(result[0]).toHaveProperty('_id');
    expect(result[0].id).toBe(notification.id);
  });

  it('[INTEGRATION] | Should: set [visualizedAt] => [NOTIFICATION]', async () => {
    const result = await repository.setVisualized({
      id: notification.id,
      visualizedAt: SET_VISUALIZED_POST_NOTIFICATION_DATA.visualizedAt,
    });

    expect(result).toBeInstanceOf(Notification);
    expect(result.id).toEqual(notification.id);
    expect(result.visualizedAt).toEqual(
      SET_VISUALIZED_POST_NOTIFICATION_DATA.visualizedAt,
    );
  });

  it('[INTEGRATION] | Should: delete => [NOTIFICATION]', async () => {
    expect(
      repository.delete({ id: notification.id }),
    ).resolves.not.toThrowError();
  });
});
