import { PostRepositoryAcess } from '../repository';
import { IFindPostByIdDTO } from '../DTO';

export class DetailPostsUseCase extends PostRepositoryAcess {
  async execute(data: IFindPostByIdDTO) {
    return await this.repository.findById(data);
  }
}
