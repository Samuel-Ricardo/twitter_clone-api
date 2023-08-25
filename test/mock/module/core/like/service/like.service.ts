import { interfaces } from 'inversify';
import {
  CreateLikeUseCase,
  DeleteLikeUseCase,
  GetCommentLikesUseCase,
  GetPostLikesUseCase,
  GetUserLikesUseCase,
  LikeService,
} from '../../../../../../src/modules/@core/like';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { ISimulateLikeService } from '@test/@types/simulate/like';
import { MockLikeRegistry } from '../like.registry';
import { EmitCreateLikeEventUseCase } from '@Like/use-case/events/create.use-case';

export const mockLikeService = () => mockDeep<LikeService>();

export const simulateLikeService = ({
  container,
}: interfaces.Context): ISimulateLikeService => {
  const create = container.get<DeepMockProxy<CreateLikeUseCase>>(
    MockLikeRegistry.USE_CASE.CREATE,
  );
  const deleteLike = container.get<DeepMockProxy<DeleteLikeUseCase>>(
    MockLikeRegistry.USE_CASE.DELETE,
  );
  const getPostLikes = container.get<DeepMockProxy<GetPostLikesUseCase>>(
    MockLikeRegistry.USE_CASE.GET.BY.POST,
  );
  const getCommentLikes = container.get<DeepMockProxy<GetCommentLikesUseCase>>(
    MockLikeRegistry.USE_CASE.GET.BY.COMMENT,
  );
  const getUserLikes = container.get<DeepMockProxy<GetUserLikesUseCase>>(
    MockLikeRegistry.USE_CASE.GET.BY.USER,
  );

  const emitCreateLike = container.get<
    DeepMockProxy<EmitCreateLikeEventUseCase>
  >(MockLikeRegistry.USE_CASE.EVENTS.CREATE);

  const service = new LikeService(
    create,
    deleteLike,
    getPostLikes,
    getUserLikes,
    getCommentLikes,
    emitCreateLike,
  );

  return {
    use_case: {
      create,
      deleteLike,
      getPostLikes,
      getUserLikes,
      getCommentLikes,
      emitCreateLike,
    },
    service,
  };
};
