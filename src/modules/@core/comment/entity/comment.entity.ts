import { injectable } from 'inversify';
import { ICommentDTO } from '../DTO/comment.dto';
import { CommentSchema } from '../validator/comment.validator';
import { Comment as PrismaComment } from '@prisma/client';

@injectable()
export class Comment {
  constructor(
    private _id: string,
    private _body: string,
    private _authorId: string,
    private _postId: string,
    private _createdAt: Date,
    private _updatedAt: Date,
  ) {
    Comment.validate({
      id: _id,
      body: _body,
      authorId: _authorId,
      postId: _postId,
      createdAt: _createdAt,
      updatedAt: _updatedAt,
    });
  }

  static validate(comment: ICommentDTO) {
    return CommentSchema.parse(comment);
  }

  static create(comment: ICommentDTO) {
    return new Comment(
      comment.id,
      comment.body,
      comment.authorId,
      comment.postId,
      comment.createdAt,
      comment.updatedAt,
    );
  }

  static fromPrisma(comment: PrismaComment) {
    return Comment.create(comment);
  }

  static fromPrismaArray(comments: PrismaComment[]) {
    return comments.map((comment) => Comment.fromPrisma(comment));
  }

  toStruct(): ICommentDTO {
    return {
      id: this._id,
      body: this._body,
      authorId: this._authorId,
      postId: this._postId,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    };
  }

  get id() {
    return this._id;
  }

  get body() {
    return this._body;
  }

  set body(data: string) {
    this._body = data;
  }

  get authorId() {
    return this._authorId;
  }

  get postId() {
    return this._postId;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }
}
