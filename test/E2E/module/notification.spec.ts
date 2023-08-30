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
import { INotificationEvents } from '../../../src/modules/@core/notification/events';
import { IAppEvents } from '../../../src/modules/event/app';
import {
  ICreateNotificationDTO,
  INotificationDTO,
  ISetNotificationVisualizedDTO,
} from '../../../src/modules/@core/notification/DTO';
import { CreateNotificationSchema } from '../../../src/modules/@core/notification/validator';
import { SetVisualizedSchema } from '../../../src/modules/@core/notification/validator/set_visualized.validator';
import { MODULES } from '@modules';

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
    events: {
      app?: IAppEvents;
      notification?: INotificationEvents;
    };
  } = { port: 8576, server: {}, client: {}, events: {} };

  const { CONNECTION, CONNECT, NOTIFICATION } = EVENT;

  beforeAll((done) => {
    module.events.app = MODULES.EVENTS.NODE.APP();
    module.events.notification = MODULES.EVENTS.NODE.NOTIFICATION();

    server.listen(module.port, () => {
      module.client.socket = Client(`http://localhost:${module.port}`);

      socket.io.on(CONNECTION, (socket) => {
        module.server.socket = socket;
      });

      module.client.socket.on(CONNECT, done);
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

  it('[E2E] | Should: create => [NOTIFICATION]', (done) => {
    module.server.socket?.on(
      NOTIFICATION.NEW,
      (data: ICreateNotificationDTO) => {
        expect(data).toBeDefined();
        expect(CreateNotificationSchema.parse(data)).toBeDefined();
      },
    );

    module.events.notification?.listenNotificationCreated({
      job: (notification) => {
        expect(notification).toBeDefined();
        expect(notification).toHaveProperty('id');
        expect(notification.body).toEqual(VALID_POST_NOTIFICATION_DATA.body);
        expect(notification.userId).toEqual(
          VALID_POST_NOTIFICATION_DATA.userId,
        );
        expect(notification.eventId).toEqual(
          VALID_POST_NOTIFICATION_DATA.eventId,
        );
      },
    });

    module.client.socket?.on(
      NOTIFICATION.CREATED,
      (notification: INotificationDTO) => {
        expect(notification).toBeDefined();
        expect(notification).toHaveProperty('id');
        expect(notification.body).toEqual(VALID_POST_NOTIFICATION_DATA.body);
        expect(notification.userId).toEqual(
          VALID_POST_NOTIFICATION_DATA.userId,
        );
        expect(notification.eventId).toEqual(
          VALID_POST_NOTIFICATION_DATA.eventId,
        );

        done();
      },
    );

    module.client.socket?.emit(NOTIFICATION.NEW, VALID_POST_NOTIFICATION_DATA);
  });

  it('[E2E] | Should: visualize => [NOTIFICATION]', (done) => {
    const visualizedAt = new Date();

    module.server.socket?.on(
      NOTIFICATION.VISUALIZE,
      (data: ISetNotificationVisualizedDTO) => {
        expect(data).toBeDefined();
        expect(SetVisualizedSchema.parse(data)).toBeDefined();
      },
    );

    module.events.notification?.listenNotificationVisualized({
      job: (notification) => {
        expect(notification).toBeDefined();
        expect(notification).toHaveProperty('id');
        expect(notification.visualizedAt).toBeDefined();
      },
    });

    module.client.socket?.on(
      NOTIFICATION.VISUALIZED,
      (notification: ISetNotificationVisualizedDTO) => {
        expect(notification).toBeDefined();
        expect(notification).toHaveProperty('id');
        expect(notification.visualizedAt).toBeDefined();

        done();
      },
    );

    module.client.socket?.emit(NOTIFICATION.VISUALIZE, {
      id: module.notification?.id,
      visualizedAt,
    });
  });
});
