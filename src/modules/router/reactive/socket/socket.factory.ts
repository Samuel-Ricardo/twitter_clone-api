import { NotificationSocket } from './notification/notification.socket';
import { ReactiveSocketRouterModule } from './socket.module';
import { ReactiveSocketRouterRegistry } from './socket.registry';

export const ReactiveSocketRouterFactory = {
  ALL: () =>
    ReactiveSocketRouterModule.getAll(ReactiveSocketRouterRegistry.ALL),
  NOTIFICATION: () =>
    ReactiveSocketRouterModule.get<NotificationSocket>(
      ReactiveSocketRouterRegistry.NOTIFICATION,
    ),
};
