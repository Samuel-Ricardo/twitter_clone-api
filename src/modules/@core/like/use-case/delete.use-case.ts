import { injectable } from 'inversify';
import { IDeleteLikeDTO } from '../DTO/delete.dto';
import { LikeRepositoryAccess } from '../repository/repository_access';

@injectable()
export class DeleteLikeUseCase extends LikeRepositoryAccess {
  async execute(data: IDeleteLikeDTO) {
    return await this.repository.delete(data);
  }
}
