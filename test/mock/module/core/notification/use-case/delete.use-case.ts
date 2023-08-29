import { DeleteNotificationUseCase } from '../../../../../../src/modules/@core/notification/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockDeleteNotificationUseCase = () =>
  mockDeep<DeleteNotificationUseCase>();
