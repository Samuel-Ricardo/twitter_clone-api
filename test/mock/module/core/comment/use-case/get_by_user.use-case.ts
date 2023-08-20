import { mockDeep } from 'jest-mock-extended';
import { GetUserCommnetsUseCase } from '../../../../../../src/modules/@core/comment/use-case';

export const mockGetUserCommentsUseCase = () =>
  mockDeep<GetUserCommnetsUseCase>();
