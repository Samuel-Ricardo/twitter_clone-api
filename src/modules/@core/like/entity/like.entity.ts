import { injectable } from 'inversify';
import { ILikeDTO, LikeSchema } from '../DTO/like.dto';
import { Like as PrismaLike } from '@prisma/client';

@injectable()
export class Like {
  constructor(
    private readonly _id: string,
    private readonly _userId: string,
    private readonly _likedId: string,
    private readonly _createdAt: Date,
  ) {
    Like.validate({
      id: this._id,
      userId: this._userId,
      likedId: this._likedId,
      createdAt: this._createdAt,
    });
  }

  static validate(data: ILikeDTO) {
    return LikeSchema.parse(data);
  }

  static Create(data: ILikeDTO) {
    return new Like(data.id, data.userId, data.likedId, data.createdAt);
  }

  static fromPrisma(data: PrismaLike) {
    return new Like(data.id, data.userId, data.likedId, data.createdAt);
  }

  static fromPrismaArray(data: PrismaLike[]) {
    return data.map((item) => Like.fromPrisma(item));
  }

  toStruct(): ILikeDTO {
    return {
      id: this._id,
      userId: this._userId,
      likedId: this._likedId,
      createdAt: this._createdAt,
    };
  }

  toString() {
    return JSON.stringify(this.toStruct());
  }

  get id(): string {
    return this._id;
  }

  get userId(): string {
    return this._userId;
  }

  get likedId(): string {
    return this._likedId;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
}
