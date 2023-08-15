import { ICountFollowersDTO } from '../DTO';
import { FollowRepositoryAccess } from '../repository';

export class CountFollowersUseCase extends FollowRepositoryAccess {
  async execute(data: ICountFollowersDTO) {
    return await this.repository.countFollowers(data);
  }
}
