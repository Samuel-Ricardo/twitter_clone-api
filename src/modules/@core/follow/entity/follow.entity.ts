import { IFollowDTO } from '../DTO/follow.dto';
import { FollowPolicy } from '../policy/follow.policy';
import { FollowSchema } from '../validator';
import { Follow as PrismaFollow } from '@prisma/client';

export class Follow {
  constructor(
    private _id: string,
    private _followerId: string,
    private _followingId: string,
    private _createdAt: Date,
  ) {
    Follow.validate({
      id: _id,
      followerId: _followerId,
      followingId: _followingId,
      createdAt: _createdAt,
    });
  }

  static validate(follow: IFollowDTO) {
    const result = FollowSchema.parse(follow);
    FollowPolicy.isAllowed(result);
  }

  static create(data: IFollowDTO) {
    return new Follow(
      data.id,
      data.followerId,
      data.followingId,
      data.createdAt,
    );
  }

  static fromPrisma(data: PrismaFollow) {
    return Follow.create({
      id: data.id,
      followerId: data.followerId,
      followingId: data.followingId,
      createdAt: data.createdAt,
    });
  }

  static fromPrismaArray(data: PrismaFollow[]) {
    return data.map((item) => Follow.fromPrisma(item));
  }

  toStruct(): IFollowDTO {
    return {
      id: this._id,
      followerId: this._followerId,
      followingId: this._followingId,
      createdAt: this._createdAt,
    };
  }

  get id() {
    return this._id;
  }

  get followerId() {
    return this._followerId;
  }

  get followingId() {
    return this._followingId;
  }

  get createdAt() {
    return this._createdAt;
  }
}
