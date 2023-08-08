import { PostRepositoryAcess } from '@Post/repository_acess';
import { injectable } from 'inversify';

@injectable()
export class ListPostsUseCase extends PostRepositoryAcess {
  async execute() {
    return await this.repository.findAll();
  }
}
