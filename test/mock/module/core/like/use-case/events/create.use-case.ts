import { EmitCreateLikeEventUseCase } from '@Like/use-case/events/create.use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockEmitCreateLikeEventUseCase = () =>
  mockDeep<EmitCreateLikeEventUseCase>();
