import { ICreatePostDTO } from '@Post/DTO';
import { PostRepositoryAcess } from '@Post/repository';
import { injectable } from 'inversify';

@injectable()
export class CreatePostUseCase extends PostRepositoryAcess {
  async execute(post: ICreatePostDTO) {
    return await this.repository.create(post);
  }
}
