import { NotificationSocket } from './notification/notification.socket';
import { ReactiveSocketRouterModule } from './socket.module';

export const ReactiveSocketRouterRegistry = {
  NOTIFICATION: () =>
    ReactiveSocketRouterModule.get<NotificationSocket>(
      ReactiveSocketRouterRegistry.NOTIFICATION,
    ),
};
