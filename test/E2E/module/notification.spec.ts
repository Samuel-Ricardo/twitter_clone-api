/*
 * @jest-environment ./test/environment
 */

import { app } from '@/app';
import { Notification } from '../../../src/modules/@core/notification/entity';
import { notification } from '../../../src/modules/router/notification';
import supertest from 'supertest';
import { VALID_POST_NOTIFICATION_DATA } from '@test/mock/data/notification';

describe('[MODULE] | NOTIFICATION', () => {
  const module: { notification?: Notification } = {};

  it('[E2E] | should: create => [NOTIFICATION]', async () => {
    const response = await supertest(app)
      .post(notification.prefix)
      .send(VALID_POST_NOTIFICATION_DATA);
    const body = response.body;

    expect(response.status).toBe(201);
    expect(body.notification).toBeDefined();
    expect(body.notification).toHaveProperty('id');
    expect(body.notification.body).toEqual(VALID_POST_NOTIFICATION_DATA.body);
    expect(body.notification.userId).toEqual(
      VALID_POST_NOTIFICATION_DATA.userId,
    );
    expect(body.notification.eventId).toEqual(
      VALID_POST_NOTIFICATION_DATA.eventId,
    );

    module.notification = body.notification;
  });

  it('[E2E] | Should: find by [user] => [NOTIFICATION]', async () => {
    const response = await supertest(app).get(
      `${notification.prefix}/user/${VALID_POST_NOTIFICATION_DATA.userId}`,
    );
    const body = response.body;

    expect(response.status).toBe(200);
    expect(body.notifications).toBeDefined();
    expect(body.notifications).toBeInstanceOf(Array);
    expect(body.notifications.length).toBeGreaterThanOrEqual(1);
    expect(body.notifications[0]).toHaveProperty('id');
    expect(body.notifications[0]).toStrictEqual(module.notification);
  });
});
