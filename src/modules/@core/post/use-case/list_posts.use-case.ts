import { PostRepositoryAcess } from '@Post/repository';
import { injectable } from 'inversify';

@injectable()
export class ListPostsUseCase extends PostRepositoryAcess {
  async execute() {
    return await this.repository.findAll();
  }
}
