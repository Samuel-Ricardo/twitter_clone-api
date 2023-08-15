import { IGetFollowingsDTO } from '../DTO/get_followings.dto';
import { FollowRepositoryAccess } from '../repository';

export class GetFollowingsUseCase extends FollowRepositoryAccess {
  async execute(data: IGetFollowingsDTO) {
    return await this.repository.getFollowings(data);
  }
}
