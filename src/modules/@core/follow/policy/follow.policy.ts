import { InvalidDataError } from '../../../error/data';
import { ICreateFollowDTO } from '../DTO';

export class FollowPolicy {
  static isAllowed(follow: ICreateFollowDTO) {
    return !FollowPolicy.isUserFollowingHimself(follow);
  }

  private static isUserFollowingHimself(follow: ICreateFollowDTO) {
    if (follow.followerId !== follow.followingId) return true;

    throw new InvalidDataError("User can't follow himself");
  }
}
