import { IGetLikesOfCommentDTO } from '../DTO/get_by_comment.dto';
import { LikeRepositoryAccess } from '../repository/repository_access';

export class GetCommentLikesUseCase extends LikeRepositoryAccess {
  async execute(data: IGetLikesOfCommentDTO) {
    return await this.repository.getLikesOfComment(data);
  }
}
