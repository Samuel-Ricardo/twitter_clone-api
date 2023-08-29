import { NotificationService } from '@Core/notification/service';
import { mockDeep } from 'jest-mock-extended';

export const mockNotificationService = () => mockDeep<NotificationService>();
