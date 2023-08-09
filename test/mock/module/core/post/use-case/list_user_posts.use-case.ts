import { ListUserPostsUseCase } from '@Post/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockListUserPostsUseCase = () => mockDeep<ListUserPostsUseCase>();
