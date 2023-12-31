import { IFindPostByAuthorIdDTO } from '@Post/DTO';
import { PostRepositoryAcess } from '@Post/repository';
import { injectable } from 'inversify';

@injectable()
export class ListUserPostsUseCase extends PostRepositoryAcess {
  async execute(data: IFindPostByAuthorIdDTO) {
    return await this.repository.findByAuhorId(data);
  }
}
