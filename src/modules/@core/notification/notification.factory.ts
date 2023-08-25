import { NotificationModule } from './notification.module';
import { NotificationRegistry } from './notification.registry';
import {
  CreateNotificationUseCase,
  GetUserNotificationsUseCase,
  DeleteNotificationUseCase,
  VisualizeNotificationUseCase,
} from './use-case';

export const NotificationFactory = {
  USE_CASE: {
    CREATE: () =>
      NotificationModule.get<CreateNotificationUseCase>(
        NotificationRegistry.USE_CASE.CREATE,
      ),
    DELETE: () =>
      NotificationModule.get<DeleteNotificationUseCase>(
        NotificationRegistry.USE_CASE.DELETE,
      ),
    VISUALIZE: () =>
      NotificationModule.get<VisualizeNotificationUseCase>(
        NotificationRegistry.USE_CASE.VISUALIZE,
      ),
    GET: {
      BY: {
        USER: () =>
          NotificationModule.get<GetUserNotificationsUseCase>(
            NotificationRegistry.USE_CASE.GET.BY.USER,
          ),
      },
    },
  },
};
