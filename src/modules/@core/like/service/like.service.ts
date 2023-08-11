import { injectable } from 'inversify';
import { CreateLikeUseCase } from '../use-case/create.use-case';
import { DeleteLikeUseCase } from '../use-case/delete.use-case';
import { GetPostLikesUseCase } from '../use-case/get_post_likes.use-case';
import { GetUserLikesUseCase } from '../use-case/get_user_likes.use-case';
import { GetCommentLikesUseCase } from '../use-case/get_comment_likes.use-case';
import { ICreateLikeDTO } from '../DTO/create.dto';

@injectable()
export class LikeService {
  constructor(
    private readonly giveLike: CreateLikeUseCase,
    private readonly unlike: DeleteLikeUseCase,
    private readonly getPostLikes: GetPostLikesUseCase,
    private readonly getUserLikes: GetUserLikesUseCase,
    private readonly getCommentLikes: GetCommentLikesUseCase,
  ) {}

  async create(data: ICreateLikeDTO) {
    await this.giveLike.execute(data);
  }
}
