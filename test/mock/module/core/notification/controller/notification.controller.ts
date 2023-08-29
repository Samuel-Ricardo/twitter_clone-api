import { NotificationController } from '../../../../../../src/modules/@core/notification/controller';
import { mockDeep } from 'jest-mock-extended';

export const mockNotificationController = () =>
  mockDeep<NotificationController>();
