import { injectable } from 'inversify';
import { IGetLikesOfUserDTO } from '../DTO/get_by_user.dto';
import { LikeRepositoryAccess } from '../repository/repository_access';

@injectable()
export class GetUserLikesUseCase extends LikeRepositoryAccess {
  async execute(data: IGetLikesOfUserDTO) {
    return await this.repository.getLikesOfUser(data);
  }
}
