import { CountFollowersUseCase } from '@Core';
import { mockDeep } from 'jest-mock-extended';

export const mockCountFollowersUseCase = () =>
  mockDeep<CountFollowersUseCase>();
