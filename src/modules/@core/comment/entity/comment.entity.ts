import { injectable } from 'inversify';

@injectable()
export class Comment {
  constructor(
    private _id: string,
    private _body: string,
    private _authorId: string,
    private _postId: string,
    private _createdAt: Date,
    private _updatedAt: Date,
  ) {}
}
