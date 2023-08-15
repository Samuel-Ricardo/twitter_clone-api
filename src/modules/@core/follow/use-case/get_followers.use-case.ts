import { IGetFollowersDTO } from '../DTO/get_followers.dto';
import { FollowRepositoryAccess } from '../repository';

export class GetFollowersUseCase extends FollowRepositoryAccess {
  async execute(data: IGetFollowersDTO) {
    return await this.repository.getFollowers(data);
  }
}
