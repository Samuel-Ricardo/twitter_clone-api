import { IDeleteLikeDTO } from '@Like';
import { FollowRepositoryAccess } from '../repository';
import { injectable } from 'inversify';

@injectable()
export class UnFollowUseCase extends FollowRepositoryAccess {
  async execute(data: IDeleteLikeDTO) {
    return await this.repository.delete(data);
  }
}
