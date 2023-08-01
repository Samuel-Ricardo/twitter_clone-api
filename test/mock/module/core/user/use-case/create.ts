import { CreateUserUseCase } from '@User';
import { mockDeep } from 'jest-mock-extended';

export const mockCreateUserUseCase = () => mockDeep(CreateUserUseCase);
