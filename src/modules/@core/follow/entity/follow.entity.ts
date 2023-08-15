import { IFollowDTO } from '../DTO/follow.dto';
import { FollowSchema } from '../validator';

export class Follow {
  constructor(
    public id: string,
    public followerId: string,
    public followingId: string,
    public createdAt: Date,
  ) {
    Follow.validate(this);
  }

  static validate(follow: IFollowDTO) {
    return FollowSchema.parse(follow);
  }
}
