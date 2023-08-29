import { EmitNotificationCreatedEventUseCase } from '../../../../../../../src/modules/@core/notification/use-case/events';
import { mockDeep } from 'jest-mock-extended';

export const mockEmitNotificationCreatedEventUseCase = () =>
  mockDeep<EmitNotificationCreatedEventUseCase>();
