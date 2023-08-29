import { interfaces } from 'inversify';
import { NotificationController } from '../../../../../../src/modules/@core/notification/controller';
import { mockDeep } from 'jest-mock-extended';
import { NotificationMockRegistry } from '../notification.registry';
import { ISimulatedNotificationController } from '@test/@types/simulate/notification/controller';

export const mockNotificationController = () =>
  mockDeep<NotificationController>();

export const simulateNotificationController = ({
  container,
}: interfaces.Context): ISimulatedNotificationController => {
  const service = container.get<any>(NotificationMockRegistry.SERVICE);
  const controller = new NotificationController(service);

  return { controller, service };
};
