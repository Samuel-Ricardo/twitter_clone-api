import { Container } from 'inversify';
import { NotificationMockRegistry } from './notification.registry';
import {
  mockCreateNotificationUseCase,
  mockDeleteNotificationUseCase,
  mockGetNotificationByUserUseCase,
  mockVisualizeNotificationUseCase,
  mockEmitNotificationCreatedEventUseCase,
  mockEmitNotificationVisualizedEventUseCase,
} from './use-case';

export const NotificationMockModule = new Container({
  autoBindInjectable: true,
});

NotificationMockModule.bind(
  NotificationMockRegistry.USE_CASE.CREATE,
).toDynamicValue(mockCreateNotificationUseCase);

NotificationMockModule.bind(
  NotificationMockRegistry.USE_CASE.DELETE,
).toDynamicValue(mockDeleteNotificationUseCase);

NotificationMockModule.bind(
  NotificationMockRegistry.USE_CASE.GET.BY.USER,
).toDynamicValue(mockGetNotificationByUserUseCase);

NotificationMockModule.bind(
  NotificationMockRegistry.USE_CASE.VISUALIZE,
).toDynamicValue(mockVisualizeNotificationUseCase);

NotificationMockModule.bind(
  NotificationMockRegistry.USE_CASE.EMIT.CREATED,
).toDynamicValue(mockEmitNotificationCreatedEventUseCase);

NotificationMockModule.bind(
  NotificationMockRegistry.USE_CASE.EMIT.VISUALIZED,
).toDynamicValue(mockEmitNotificationVisualizedEventUseCase);
