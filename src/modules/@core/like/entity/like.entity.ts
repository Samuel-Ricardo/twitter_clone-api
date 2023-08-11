import { injectable } from 'inversify';
import { ILikeDTO } from '../DTO/like.dto';

@injectable()
export class Like {
  constructor(
    private readonly _id: string,
    private readonly _userId: string,
    private readonly _likedId: string,
    private readonly _createdAt: Date,
  ) {}

  public static Create(data: ILikeDTO) {
    new Like(data.id, data.userId, data.likedId, data.createdAt);
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
