import {
  CountFollowersUseCase,
  CountFollowingsUseCase,
  CreateFollowUseCase,
  GetFollowersUseCase,
  GetFollowingsUseCase,
  UnFollowUseCase,
} from '../use-case';
import { MODULE } from '../../../app.registry';
import { inject, injectable } from 'inversify';
import {
  ICountFollowersDTO,
  ICountFollowingsDTO,
  ICreateFollowDTO,
  IDeleteFollowDTO,
  IGetFollowersDTO,
  IGetFollowingsDTO,
} from '../DTO';
import { EncryptFollowBeforeSendPolicy } from '../policy/security/encrypt/before/follow.policy';
import { EncryptFollowListBeforeSendPolicy } from '../policy/security/encrypt/before/followers.policy';

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
    @inject(MODULE.FOLLOW.POLICY.SECURITY.ENCRYPT.BEFORE.FOLLOW)
    private readonly encryptBeforeSendPolicy: EncryptFollowBeforeSendPolicy,
    @inject(MODULE.FOLLOW.POLICY.SECURITY.ENCRYPT.BEFORE.FOLLOWERS)
    private readonly encryptListBeforeSendPolicy: EncryptFollowListBeforeSendPolicy,
  ) {}

  async follow(data: ICreateFollowDTO) {
    return this.encryptBeforeSendPolicy.execute(
      await this.create.execute(data),
    );
  }

  async unfollow(data: IDeleteFollowDTO) {
    return await this.deleteFollow.execute(data);
  }

  async getFollowers(data: IGetFollowersDTO) {
    return this.encryptListBeforeSendPolicy.execute(
      await this.getFollowersUseCase.execute(data),
    );
  }

  async getFollowings(data: IGetFollowingsDTO) {
    return this.encryptListBeforeSendPolicy.execute(
      await this.getFollowingsUseCase.execute(data),
    );
  }

  async countFollowings(data: ICountFollowingsDTO) {
    return await this.countFollowingsUseCase.execute(data);
  }

  async countFollowers(data: ICountFollowersDTO) {
    return await this.countFollowersUseCase.execute(data);
  }
}
