import { IGetCommentByIdDTO } from '../DTO/get_by_id.dto';
import { CommentRepositoryAccess } from '../repository';

export class GetCommentByIdUseCase extends CommentRepositoryAccess {
  async execute(data: IGetCommentByIdDTO) {
    return await this.repository.getById(data);
  }
}
