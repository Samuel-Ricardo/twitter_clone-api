import { SelectUserByEmailUseCase } from '@User/use-case/select_by_email.use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockSelectUserByEmailUseCase = () =>
  mockDeep<SelectUserByEmailUseCase>();
