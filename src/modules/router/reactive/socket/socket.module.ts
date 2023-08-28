import { Container } from 'inversify';
import { ReactiveSocketRouterRegistry } from './socket.registry';
import { NotificationSocket } from './notification/notification.socket';
import { ReactiveModule as REACTIVE } from '../../../reactive/reactive.module';
import { EventsModule as EVENTS } from '../../../event/event.module';
import { NotificationModule as NOTIFICATION } from '../../../@core/notification/notification.module';

const Module = new Container({ autoBindInjectable: true });

Module.bind(ReactiveSocketRouterRegistry.NOTIFIACTION)
  .to(NotificationSocket)
  .inSingletonScope();

Module.bind(ReactiveSocketRouterRegistry.ALL)
  .to(NotificationSocket)
  .inSingletonScope();

export const ReactiveSocketRouterModule = Container.merge(
  Module,
  REACTIVE,
  EVENTS,
  NOTIFICATION,
);
