import { CreateNotificationUseCase } from '../../../../../../src/modules/@core/notification/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockCreateNotificationUseCase = () =>
  mockDeep<CreateNotificationUseCase>();
