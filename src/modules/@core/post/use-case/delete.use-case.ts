import { IDeletePostDTO } from '@Post/DTO';
import { PostRepositoryAcess } from '@Post/repository_acess';
import { injectable } from 'inversify';

@injectable()
export class DeletePostUseCase extends PostRepositoryAcess {
  async execute(data: IDeletePostDTO) {
    await this.repository.delete(data);
  }
}
