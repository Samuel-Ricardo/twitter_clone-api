import { DeepMockProxy } from 'jest-mock-extended';
import { NotificationMockModule } from './notification.module';
import {
  CreateNotificationUseCase,
  DeleteNotificationUseCase,
  VisualizeNotificationUseCase,
  GetUserNotificationsUseCase,
  EmitNotificationVisualizedEventUseCase,
  EmitNotificationCreatedEventUseCase,
} from '../../../../../src/modules/@core/notification/use-case';
import { NotificationMockRegistry } from './notification.registry';
import { ISimulatedNotificationService } from '@test/@types/simulate/notification/service';
import { NotificationService } from '@Core/notification/service';

export const NotificationMockFactory = {
  SERVICE: () =>
    NotificationMockModule.get<DeepMockProxy<NotificationService>>(
      NotificationMockRegistry.SERVICE,
    ),
  SERVICE_DEV: () =>
    NotificationMockModule.get<ISimulatedNotificationService>(
      NotificationMockRegistry.SERVICE_DEV,
    ),
  USE_CASE: {
    EMIT: {
      CREATED: () =>
        NotificationMockModule.get<
          DeepMockProxy<EmitNotificationCreatedEventUseCase>
        >(NotificationMockRegistry.USE_CASE.EMIT.CREATED),
      VISUALIZED: () =>
        NotificationMockModule.get<
          DeepMockProxy<EmitNotificationVisualizedEventUseCase>
        >(NotificationMockRegistry.USE_CASE.EMIT.VISUALIZED),
    },
    CREATE: () =>
      NotificationMockModule.get<DeepMockProxy<CreateNotificationUseCase>>(
        NotificationMockRegistry.USE_CASE.CREATE,
      ),
    DELETE: () =>
      NotificationMockModule.get<DeepMockProxy<DeleteNotificationUseCase>>(
        NotificationMockRegistry.USE_CASE.DELETE,
      ),
    VISUALIZE: () =>
      NotificationMockModule.get<DeepMockProxy<VisualizeNotificationUseCase>>(
        NotificationMockRegistry.USE_CASE.VISUALIZE,
      ),
    GET: {
      BY: {
        USER: () =>
          NotificationMockModule.get<
            DeepMockProxy<GetUserNotificationsUseCase>
          >(NotificationMockRegistry.USE_CASE.GET.BY.USER),
      },
    },
  },
};
