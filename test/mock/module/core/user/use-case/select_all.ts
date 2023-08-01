import { SelectAllUsersUseCase } from '@User';
import { mockDeep } from 'jest-mock-extended';

export const mockSelectAllUsersUseCase = () =>
  mockDeep<SelectAllUsersUseCase>();
