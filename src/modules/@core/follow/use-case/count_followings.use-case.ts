import { ICountFollowingsDTO } from '../DTO';
import { FollowRepositoryAccess } from '../repository';

export class CountFollowingsUseCase extends FollowRepositoryAccess {
  async execute(data: ICountFollowingsDTO) {
    return await this.repository.countFollowings(data);
  }
}
