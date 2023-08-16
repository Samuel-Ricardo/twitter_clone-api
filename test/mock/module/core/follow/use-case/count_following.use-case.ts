import { CountFollowingsUseCase } from '@Core';
import { mockDeep } from 'jest-mock-extended';

export const mockCountFollowingUseCase = () =>
  mockDeep<CountFollowingsUseCase>();
