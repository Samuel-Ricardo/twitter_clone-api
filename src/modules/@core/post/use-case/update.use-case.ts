import { IUpdatePostDTO } from '@Post/DTO';
import { injectable } from 'inversify';
import { PostRepositoryAcess } from '../repository';

@injectable()
export class UpdatePostUseCase extends PostRepositoryAcess {
  async execute(post: IUpdatePostDTO) {
    return await this.repository.update(post);
  }
}
