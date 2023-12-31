import { inject, injectable } from 'inversify';
import { FollowService } from '../service';
import { MODULE } from '../../../app.registry';
import {
  ICountFollowersDTO,
  ICountFollowingsDTO,
  ICreateFollowDTO,
  IDeleteFollowDTO,
  IGetFollowersDTO,
  IGetFollowingsDTO,
} from '../DTO';

@injectable()
export class FollowController {
  constructor(
    @inject(MODULE.FOLLOW.SERVICE)
    private readonly service: FollowService,
  ) {}

  async follow(data: ICreateFollowDTO) {
    //    return { follow: (await this.service.follow(data)).toStruct() };
    return { follow: await this.service.follow(data) };
  }

  async unfollow(data: IDeleteFollowDTO) {
    return await this.service.unfollow(data);
  }

  async getFollowers(data: IGetFollowersDTO) {
    // return {
    //   followers: (await this.service.getFollowers(data)).map((follower) =>
    //     follower.toStruct(),
    //   ),
    // };
    return { followers: await this.service.getFollowers(data) };
  }

  async getFollowing(data: IGetFollowingsDTO) {
    const following = await this.service.getFollowings(data);
    //    return { following: following.map((following) => following.toStruct()) }/
    return { following };
  }

  async countFollowers(data: ICountFollowersDTO) {
    return { followers: await this.service.countFollowers(data) };
  }

  async countFollowing(data: ICountFollowingsDTO) {
    return { following: await this.service.countFollowings(data) };
  }
}
