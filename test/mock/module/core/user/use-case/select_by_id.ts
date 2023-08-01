import { SelectUserByIdUseCase } from '@User';
import { mockDeep } from 'jest-mock-extended';

export const mockSelectUserByIdUseCase = () =>
  mockDeep<SelectUserByIdUseCase>();
