import { injectable } from 'inversify';
import { IGetLikesOfCommentDTO } from '../DTO/get_by_comment.dto';
import { LikeRepositoryAccess } from '../repository/repository_access';

@injectable()
export class GetCommentLikesUseCase extends LikeRepositoryAccess {
  async execute(data: IGetLikesOfCommentDTO) {
    return await this.repository.getLikesOfComment(data);
  }
}
