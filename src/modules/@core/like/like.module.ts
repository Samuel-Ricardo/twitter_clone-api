import { Container } from 'inversify';
import { LikeRegistry } from './like.registry';
import { CreateLikeUseCase } from './use-case/create.use-case';
import { DeleteLikeUseCase } from './use-case/delete.use-case';
import { GetPostLikesUseCase } from './use-case/get_post_likes.use-case';
import { GetUserLikesUseCase } from './use-case/get_user_likes.use-case';
import { GetCommentLikesUseCase } from './use-case/get_comment_likes.use-case';
import { LikeService } from './service/like.service';

export const LikeModule = new Container({ autoBindInjectable: true });

LikeModule.bind(LikeRegistry.USE_CASE.CREATE).to(CreateLikeUseCase);
LikeModule.bind(LikeRegistry.USE_CASE.DELETE).to(DeleteLikeUseCase);
LikeModule.bind(LikeRegistry.USE_CASE.GET.BY.POST).to(GetPostLikesUseCase);
LikeModule.bind(LikeRegistry.USE_CASE.GET.BY.USER).to(GetUserLikesUseCase);
LikeModule.bind(LikeRegistry.USE_CASE.GET.BY.COMMENT).to(
  GetCommentLikesUseCase,
);

LikeModule.bind(LikeRegistry.SERVICE.DEFAULT).to(LikeService);
