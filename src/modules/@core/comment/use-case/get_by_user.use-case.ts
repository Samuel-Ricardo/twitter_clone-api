import { IGetUserCommentsDTO } from '../DTO';
import { CommentRepositoryAccess } from '../repository';

export class GetUserCommnetsUseCase extends CommentRepositoryAccess {
  async execute(data: IGetUserCommentsDTO) {
    return await this.repository.getUserComments(data);
  }
}
