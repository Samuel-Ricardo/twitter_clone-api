/*
 * @jest-environment ./test/environment
 */

import { Socket as ServerSocker } from 'socket.io';
import { Socket as SocketClient } from 'socket.io-client';

import Client from 'socket.io-client';

import { app, server, socket } from '@/app';
import { Notification } from '../../../src/modules/@core/notification/entity';
import { notification } from '../../../src/modules/router/notification';
import supertest from 'supertest';
import { VALID_POST_NOTIFICATION_DATA } from '@test/mock/data/notification';
import { EVENT } from '../../../src/modules/event/event.config';

describe('[MODULE] | NOTIFICATION', () => {
  const module: {
    port?: number;
    notification?: Notification;
    server: {
      socket?: ServerSocker;
    };
    client: {
      socket?: SocketClient;
    };
  } = { port: 8576, server: {}, client: {} };

  const { CONNECTION } = EVENT;

  beforeAll((done) => {
    server.listen(module.port, () => {
      module.client.socket = Client(`http://localhost:${module.port}`);

      socket.io.on(CONNECTION, (socket) => {
        module.server.socket = socket;
      });

      module.client.socket.on(CONNECTION, done);
    });
  });

  afterAll((done) => {
    socket.io.close();
    module.client.socket?.close();
    done();
  });

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
      `${notification.prefix}/user/${module.notification?.userId}`,
    );
    const body = response.body;

    expect(response.status).toBe(200);
    expect(body.notifications).toBeDefined();
    expect(body.notifications).toBeInstanceOf(Array);
    expect(body.notifications.length).toBeGreaterThanOrEqual(1);
    expect(body.notifications[0]).toHaveProperty('id');
    expect(body.notifications[0]).toStrictEqual(module.notification);
  });

  it('[E2E] | Should: delete => [NOTIFICATION]', async () => {
    const response = await supertest(app).delete(
      `${notification.prefix}/${module.notification?.id}`,
    );

    expect(response.status).toBe(204);
  });
});
