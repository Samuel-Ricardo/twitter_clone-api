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
import {
  ICreateFollowDTO,
  IDeleteFollowDTO,
  IGetFollowersDTO,
} from '@Core/follow/DTO';

@injectable()
export class FollowService {
  constructor(
    @inject(MODULE.FOLLOW.USE_CASE.CREATE)
    private readonly create: CreateFollowUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.DELETE)
    private readonly deleteFollow: UnFollowUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.GET.FOLLOWERS)
    private readonly getFollowersUseCase: GetFollowersUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.GET.FOLLOWINGS)
    private readonly getFollowingsUseCase: GetFollowingsUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.COUNT.FOLLOWINGS)
    private readonly countFollowingsUseCase: CountFollowingsUseCase,
    @inject(MODULE.FOLLOW.USE_CASE.COUNT.FOLLOWERS)
    private readonly countFollowersUseCase: CountFollowersUseCase,
  ) {}

  async follow(data: ICreateFollowDTO) {
    return await this.create.execute(data);
  }

  async unfollow(data: IDeleteFollowDTO) {
    return await this.deleteFollow.execute(data);
  }

  async getFollowers(data: IGetFollowersDTO) {
    return await this.getFollowersUseCase.execute(data);
  }
}
