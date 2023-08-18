import { IGetPostCommentsDTO } from '../DTO';
import { CommentRepositoryAccess } from '../repository';

export class GetPostCommentUseCase extends CommentRepositoryAccess {
  async execute(data: IGetPostCommentsDTO) {
    return await this.repository.getPostComments(data);
  }
}
