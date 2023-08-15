import { inject, injectable } from 'inversify';
import { FollowService } from '../service';
import { MODULE } from '../../../app.registry';
import { ICreateFollowDTO, IDeleteFollowDTO } from '../DTO';

@injectable()
export class FollowController {
  constructor(
    @inject(MODULE.FOLLOW.SERVICE)
    private readonly service: FollowService,
  ) {}

  async follow(data: ICreateFollowDTO) {
    return await this.service.follow(data);
  }

  async unfollow(data: IDeleteFollowDTO) {
    return await this.service.unfollow(data);
  }
}
