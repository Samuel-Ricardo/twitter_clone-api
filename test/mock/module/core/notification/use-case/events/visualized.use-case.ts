import { mockDeep } from 'jest-mock-extended';
import { EmitNotificationVisualizedEventUseCase } from '../../../../../../../src/modules/@core/notification/use-case/events';

export const mockEmitNotificationVisualizedEventUseCase = () =>
  mockDeep<EmitNotificationVisualizedEventUseCase>();
