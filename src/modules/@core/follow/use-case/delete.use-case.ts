import { IDeleteLikeDTO } from '@Like';
import { FollowRepositoryAccess } from '../repository';

export class UnFollowUseCase extends FollowRepositoryAccess {
  async execute(data: IDeleteLikeDTO) {
    return await this.repository.delete(data);
  }
}
