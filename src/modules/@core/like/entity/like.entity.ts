import { injectable } from 'inversify';

@injectable()
export class Like {
  constructor(
    private readonly _id: string,
    private readonly _userId: string,
    private readonly _likedId: string,
    private readonly _createdAt: Date,
  ) {}

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
