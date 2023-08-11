import { injectable } from 'inversify';
import { CreateLikeUseCase } from '../use-case/create.use-case';
import { DeleteLikeUseCase } from '../use-case/delete.use-case';
import { GetPostLikesUseCase } from '../use-case/get_post_likes.use-case';
import { GetUserLikesUseCase } from '../use-case/get_user_likes.use-case';
import { GetCommentLikesUseCase } from '../use-case/get_comment_likes.use-case';
import { ICreateLikeDTO } from '../DTO/create.dto';
import { IDeleteLikeDTO } from '../DTO/delete.dto';
import { IGetLikesOfPostDTO } from '../DTO/get_by_post.dto';
import { IGetLikesOfUserDTO } from '../DTO/get_by_user.dto';

@injectable()
export class LikeService {
  constructor(
    private readonly giveLike: CreateLikeUseCase,
    private readonly giveDislike: DeleteLikeUseCase,
    private readonly getPostLikes: GetPostLikesUseCase,
    private readonly getUserLikes: GetUserLikesUseCase,
    private readonly getCommentLikes: GetCommentLikesUseCase,
  ) {}

  async like(data: ICreateLikeDTO) {
    await this.giveLike.execute(data);
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
}
