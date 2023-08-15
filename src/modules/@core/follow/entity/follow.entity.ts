import { IFollowDTO } from '../DTO/follow.dto';
import { FollowSchema } from '../validator';

export class Follow {
  constructor(
    private _id: string,
    private _followerId: string,
    private _followingId: string,
    private _createdAt: Date,
  ) {
    Follow.validate({
      id: this._id,
      followerId: this._followerId,
      followingId: this._followingId,
      createdAt: this._createdAt,
    });
  }

  static validate(follow: IFollowDTO) {
    return FollowSchema.parse(follow);
  }

  static create(data: IFollowDTO) {
    return new Follow(
      data.id,
      data.followerId,
      data.followingId,
      data.createdAt,
    );
  }
}
