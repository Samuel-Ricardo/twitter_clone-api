import { injectable } from 'inversify';
import { IGetLikesOfPostDTO } from '../DTO/get_by_post.dto';
import { LikeRepositoryAccess } from '../repository/repository_access';

@injectable()
export class GetPostLikesUseCase extends LikeRepositoryAccess {
  async execute(data: IGetLikesOfPostDTO) {
    return await this.repository.getLikesOfPost(data);
  }
}
