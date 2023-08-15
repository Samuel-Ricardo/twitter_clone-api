import {
  CountFollowersUseCase,
  CountFollowingsUseCase,
  CreateFollowUseCase,
  GetFollowersUseCase,
  GetFollowingsUseCase,
  UnFollowUseCase,
} from '@Core/follow/use-case';
import { MODULE } from '../../../../app.registry';
import { inject, injectable } from 'inversify';
import { ICreateFollowDTO, IDeleteFollowDTO } from '@Core/follow/DTO';

@injectable()
export class FollowService {
  constructor(
    @inject(MODULE.FOLLOW.USE_CASE.CREATE)
    private readonly create: CreateFollowUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.DELETE)
    private readonly deleteFollow: UnFollowUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.GET.FOLLOWERS)
    private readonly getFollowers: GetFollowersUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.GET.FOLLOWINGS)
    private readonly getFollowings: GetFollowingsUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.COUNT.FOLLOWINGS)
    private readonly countFollowings: CountFollowingsUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.COUNT.FOLLOWERS)
    private readonly countFollowers: CountFollowersUseCase,
  ) {}

  async follow(data: ICreateFollowDTO) {
    return await this.create.execute(data);
  }

  async unfollow(data: IDeleteFollowDTO) {
    return await this.deleteFollow.execute(data);
  }
}
