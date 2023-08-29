import { DeepMockProxy } from 'jest-mock-extended';
import { NotificationService } from '../../../../src/modules/@core/notification/service';
import {
  CreateNotificationUseCase,
  EmitNotificationCreatedEventUseCase,
  EmitNotificationVisualizedEventUseCase,
  GetUserNotificationsUseCase,
  VisualizeNotificationUseCase,
  DeleteNotificationUseCase,
} from '../../../../src/modules/@core/notification/use-case';

export interface ISimulatedNotificationService {
  service: NotificationService;
  use_case: {
    create: DeepMockProxy<CreateNotificationUseCase>;
    delete: DeepMockProxy<DeleteNotificationUseCase>;
    visualize: DeepMockProxy<VisualizeNotificationUseCase>;
    get: {
      by: {
        user: DeepMockProxy<GetUserNotificationsUseCase>;
      };
    };
    emit: {
      created: DeepMockProxy<EmitNotificationCreatedEventUseCase>;
      visualized: DeepMockProxy<EmitNotificationVisualizedEventUseCase>;
    };
  };
}
