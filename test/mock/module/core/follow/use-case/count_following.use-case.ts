import { CountFollowingsUseCase } from '../../../../../../src/modules/@core/follow/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockCountFollowingUseCase = () =>
  mockDeep<CountFollowingsUseCase>();
