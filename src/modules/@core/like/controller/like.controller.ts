import { inject, injectable } from 'inversify';
import { LikeService } from '../service/like.service';
import { LikeRegistry } from '../like.registry';
import { ICreateLikeDTO } from '../DTO/create.dto';
import { IDeleteLikeDTO } from '../DTO/delete.dto';
import { IGetLikesOfPostDTO } from '../DTO/get_by_post.dto';
import { IGetLikesOfUserDTO } from '../DTO/get_by_user.dto';

@injectable()
export class LikeController {
  constructor(
    @inject(LikeRegistry.SERVICE.DEFAULT)
    private readonly service: LikeService,
  ) {}

  async save(data: ICreateLikeDTO) {
    return { like: await this.service.like(data) };
  }

  async dislike(data: IDeleteLikeDTO) {
    return await this.service.dislike(data);
  }

  async getPostLikes(data: IGetLikesOfPostDTO) {
    return { likes: await this.service.postLikes(data) };
  }

  async getUserLikes(data: IGetLikesOfUserDTO) {
    return { likes: await this.service.userLikes(data) };
  }
}
