import { Container } from 'inversify';
import { ReactiveSocketRouterRegistry } from './socket.registry';
import { NotificationSocket } from './notification/notification.socket';

const Module = new Container({ autoBindInjectable: true });

Module.bind(ReactiveSocketRouterRegistry.NOTIFIACTION)
  .to(NotificationSocket)
  .inSingletonScope();

export const ReactiveSocketRouterModule = Module;
