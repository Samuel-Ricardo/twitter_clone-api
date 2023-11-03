import {
  CreateLikeUseCase,
  DeleteLikeUseCase,
  GetCommentLikesUseCase,
  GetPostLikesUseCase,
  GetUserLikesUseCase,
  LikeService,
  EmitCreateLikeEventUseCase,
} from '../../../../src/modules/@core/like';
import { DeepMockProxy } from 'jest-mock-extended';
import { EncryptLikeBeforeSendPolicy } from '../../../../src/modules/@core/like/policy/security/encrypt/before/like.policy';
import { EncryptLikeListBeforeSendPolicy } from '../../../../src/modules/@core/like/policy/security/encrypt/before/likes.policy';

export interface ISimulateLikeService {
  use_case: {
    create: DeepMockProxy<CreateLikeUseCase>;
    deleteLike: DeepMockProxy<DeleteLikeUseCase>;
    getPostLikes: DeepMockProxy<GetPostLikesUseCase>;
    getUserLikes: DeepMockProxy<GetUserLikesUseCase>;
    getCommentLikes: DeepMockProxy<GetCommentLikesUseCase>;
    emitCreateLike: DeepMockProxy<EmitCreateLikeEventUseCase>;
  };
  policy: {
    security: {
      encrypt: {
        before: {
          like: DeepMockProxy<EncryptLikeBeforeSendPolicy>;
          likes: DeepMockProxy<EncryptLikeListBeforeSendPolicy>;
        };
      };
    };
  };
  service: LikeService;
}
