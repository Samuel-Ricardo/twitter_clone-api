import { Container } from 'inversify';
import { ReactiveSocketRouterRegistry } from './socket.registry';
import { NotificationSocket } from './notification/notification.socket';
import { ReactiveModule as REACTIVE } from '../../../reactive/reactive.module';
import { NotificationModule as NOTIFICATION } from '../../../@core/notification/notification.module';

const Module = new Container({ autoBindInjectable: true });

export const ReactiveSocketRouterModule = Container.merge(
  Module,
  REACTIVE,
  NOTIFICATION,
);

ReactiveSocketRouterModule.bind(ReactiveSocketRouterRegistry.NOTIFICATION).to(
  NotificationSocket,
);

ReactiveSocketRouterModule.bind(ReactiveSocketRouterRegistry.ALL).to(
  NotificationSocket,
);
