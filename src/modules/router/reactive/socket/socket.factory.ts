import { NotificationSocket } from './notification/notification.socket';
import { ReactiveSocketRouterModule } from './socket.module';

export const ReactiveSocketRouterRegistry = {
  ALL: () =>
    ReactiveSocketRouterModule.getAll(ReactiveSocketRouterRegistry.ALL),
  NOTIFICATION: () =>
    ReactiveSocketRouterModule.get<NotificationSocket>(
      ReactiveSocketRouterRegistry.NOTIFICATION,
    ),
};
