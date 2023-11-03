import { inject, injectable } from 'inversify';
import { LikeService } from '../service/like.service';
import { LikeRegistry } from '../like.registry';
import { ICreateLikeDTO } from '../DTO/create.dto';
import { IDeleteLikeDTO } from '../DTO/delete.dto';
import { IGetLikesOfPostDTO } from '../DTO/get_by_post.dto';
import { IGetLikesOfUserDTO } from '../DTO/get_by_user.dto';
import { IGetLikesOfCommentDTO } from '../DTO/get_by_comment.dto';

@injectable()
export class LikeController {
  constructor(
    @inject(LikeRegistry.SERVICE.DEFAULT)
    private readonly service: LikeService,
  ) {}

  async save(data: ICreateLikeDTO) {
    const result = await this.service.like(data);
    return { like: result };
  }

  async dislike(data: IDeleteLikeDTO) {
    return await this.service.dislike(data);
  }

  async getPostLikes(data: IGetLikesOfPostDTO) {
    const result = await this.service.postLikes(data);
    //    return { likes: result.map((like) => like.toStruct()) };
    return { likes: result };
  }

  async getUserLikes(data: IGetLikesOfUserDTO) {
    const result = await this.service.userLikes(data);
    // return { likes: result.map((like) => like.toStruct()) };
    return { likes: result };
  }

  async getCommentLikes(data: IGetLikesOfCommentDTO) {
    // return {
    //   likes: (await this.service.commentLikes(data)).map((like) =>
    //     like.toStruct(),
    //   ),
    // };
    return { likes: await this.service.commentLikes(data) };
  }
}
