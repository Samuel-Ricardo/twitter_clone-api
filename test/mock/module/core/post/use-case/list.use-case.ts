import { ListPostsUseCase } from '@Post/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockListAllPostsUseCase = () => mockDeep<ListPostsUseCase>();
