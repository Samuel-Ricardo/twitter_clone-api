import { ICreatePostDTO } from '@Post/DTO';
import { PostRepositoryAcess } from '@Post/repository_acess';
import { injectable } from 'inversify';

@injectable()
export class CreatePostUseCase extends PostRepositoryAcess {
  async execute(post: ICreatePostDTO) {
    return await this.repository.create(post);
  }
}
