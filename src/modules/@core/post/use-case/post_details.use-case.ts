import { PostRepositoryAcess } from '../repository_acess';
import { IFindPostByIdDTO } from '../DTO';

export class ListUserPostsUseCase extends PostRepositoryAcess {
  async execute(data: IFindPostByIdDTO) {
    return await this.repository.findById(data);
  }
}
