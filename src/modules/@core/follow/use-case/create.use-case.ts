import { injectable } from 'inversify';
import { FollowRepositoryAccess } from '../repository';
import { ICreateFollowDTO } from '../DTO/create.dto';

@injectable()
export class CreateFollowUseCase extends FollowRepositoryAccess {
  async execute(data: ICreateFollowDTO) {
    return await this.repository.create(data);
  }
}
