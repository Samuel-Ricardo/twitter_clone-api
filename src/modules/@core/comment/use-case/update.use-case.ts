import { IUpdateCommentDTO } from '../DTO';
import { CommentRepositoryAccess } from '../repository';

export class UpdateCommentUseCase extends CommentRepositoryAccess {
  async execute(update: IUpdateCommentDTO) {
    return await this.repository.update(update);
  }
}
