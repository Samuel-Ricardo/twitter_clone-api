import { SelectUserByCredentialsUseCase } from '@User/use-case/select_by_credentials.use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockSelectUserByCredentialsUseCase = () =>
  mockDeep<SelectUserByCredentialsUseCase>();
