import { ISimulatedNotificationService } from '@test/@types/simulate/notification/service';
import { NotificationService } from '../../../../../../src/modules/@core/notification/service/notification.service';
import { interfaces } from 'inversify';
import { mockDeep } from 'jest-mock-extended';
import { NotificationMockRegistry } from '../notification.registry';

export const mockNotificationService = () => mockDeep<NotificationService>();

export const simulateNotificationService = ({
  container,
}: interfaces.Context): ISimulatedNotificationService => {
  const create = container.get<any>(NotificationMockRegistry.USE_CASE.CREATE);
  const delete_notification = container.get<any>(
    NotificationMockRegistry.USE_CASE.DELETE,
  );
  const visualize = container.get<any>(
    NotificationMockRegistry.USE_CASE.VISUALIZE,
  );
  const user = container.get<any>(
    NotificationMockRegistry.USE_CASE.GET.BY.USER,
  );
  const visualized = container.get<any>(
    NotificationMockRegistry.USE_CASE.EMIT.VISUALIZED,
  );
  const created = container.get<any>(
    NotificationMockRegistry.USE_CASE.EMIT.CREATED,
  );

  const service = new NotificationService(
    create,
    visualize,
    user,
    delete_notification,
    created,
    visualized,
  );

  return {
    service,
    use_case: {
      create,
      visualize,
      get: { by: { user } },
      delete_notification,
      emit: {
        created,
        visualized,
      },
    },
  };
};
