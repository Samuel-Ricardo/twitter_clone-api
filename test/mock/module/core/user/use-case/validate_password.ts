import { ValidateUserPasswordUseCase } from '@User/use-case/validate_password.use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockValidateUserPasswordUseCase = () =>
  mockDeep<ValidateUserPasswordUseCase>();
