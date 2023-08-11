import { injectable } from 'inversify';
import { ICreateLikeDTO } from '../DTO/create.dto';
import { LikeRepositoryAccess } from '../repository/repository_access';

@injectable()
export class CreateLikeUseCase extends LikeRepositoryAccess {
  async execute(data: ICreateLikeDTO) {
    return await this.repository.create(data);
  }
}
