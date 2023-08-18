import { IDeleteCommentDTO } from '../DTO';
import { CommentRepositoryAccess } from '../repository';

export class DeleteCommentUseCase extends CommentRepositoryAccess {
  async execute(comment: IDeleteCommentDTO) {
    return await this.repository.delete(comment);
  }
}
