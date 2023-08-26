import { inject, injectable } from 'inversify';
import { CreateLikeUseCase } from '../use-case/create.use-case';
import { DeleteLikeUseCase } from '../use-case/delete.use-case';
import { GetPostLikesUseCase } from '../use-case/get_post_likes.use-case';
import { GetUserLikesUseCase } from '../use-case/get_user_likes.use-case';
import { GetCommentLikesUseCase } from '../use-case/get_comment_likes.use-case';
import { EmitCreateLikeEventUseCase } from '../use-case/events/create.use-case';
import { ICreateLikeDTO } from '../DTO/create.dto';
import { IDeleteLikeDTO } from '../DTO/delete.dto';
import { IGetLikesOfPostDTO } from '../DTO/get_by_post.dto';
import { IGetLikesOfUserDTO } from '../DTO/get_by_user.dto';
import { IGetLikesOfCommentDTO } from '../DTO/get_by_comment.dto';
import { MODULE } from '@modules/app.registry';

@injectable()
export class LikeService {
  constructor(
    @inject(MODULE.LIKE.USE_CASE.CREATE)
    private readonly giveLike: CreateLikeUseCase,
    @inject(MODULE.LIKE.USE_CASE.DELETE)
    private readonly giveDislike: DeleteLikeUseCase,
    @inject(MODULE.LIKE.USE_CASE.GET.BY.POST)
    private readonly getPostLikes: GetPostLikesUseCase,
    @inject(MODULE.LIKE.USE_CASE.GET.BY.USER)
    private readonly getUserLikes: GetUserLikesUseCase,
    @inject(MODULE.LIKE.USE_CASE.GET.BY.COMMENT)
    private readonly getCommentLikes: GetCommentLikesUseCase,
    @inject(MODULE.LIKE.USE_CASE.EVENTS.CREATE)
    private readonly emitCreateLike: EmitCreateLikeEventUseCase,
  ) {}

  async like(data: ICreateLikeDTO) {
    const result = await this.giveLike.execute(data);
    this.emitCreateLike.execute(result.toStruct());
    return result;
  }

  async dislike(data: IDeleteLikeDTO) {
    await this.giveDislike.execute(data);
  }

  async postLikes(data: IGetLikesOfPostDTO) {
    return await this.getPostLikes.execute(data);
  }

  async userLikes(data: IGetLikesOfUserDTO) {
    return await this.getUserLikes.execute(data);
  }

  async commentLikes(data: IGetLikesOfCommentDTO) {
    return await this.getCommentLikes.execute(data);
  }
}
