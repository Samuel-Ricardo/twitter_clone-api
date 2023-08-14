import {
  CreateLikeUseCase,
  DeleteLikeUseCase,
  GetCommentLikesUseCase,
  GetPostLikesUseCase,
  GetUserLikesUseCase,
  LikeService,
} from '../../../../src/modules/@core/like';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulateLikeService {
  use_case: {
    create: DeepMockProxy<CreateLikeUseCase>;
    delete: DeepMockProxy<DeleteLikeUseCase>;
    getPostLikes: DeepMockProxy<GetPostLikesUseCase>;
    getUserLikes: DeepMockProxy<GetUserLikesUseCase>;
    getCommentLikes: DeepMockProxy<GetCommentLikesUseCase>;
  };
  service: LikeService;
}
