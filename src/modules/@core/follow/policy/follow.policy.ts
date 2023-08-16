import { ICreateFollowDTO } from '../DTO';

export class FollowPolicy {
  static isAllowed(follow: ICreateFollowDTO) {
    return !FollowPolicy.isUserFollowingHimself(follow);
  }

  private static isUserFollowingHimself(follow: ICreateFollowDTO) {
    return follow.followerId === follow.followingId;
  }
}
