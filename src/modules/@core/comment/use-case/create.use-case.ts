import { ICreateCommentDTO } from '../DTO';
import { CommentRepositoryAccess } from '../repository';

export class CreateCommentUseCase extends CommentRepositoryAccess {
  async execute(create: ICreateCommentDTO) {
    return await this.repository.create(create);
  }
}
