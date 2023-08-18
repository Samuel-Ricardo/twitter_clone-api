import { injectable } from 'inversify';
import { ICommentDTO } from '../DTO/comment.dto';
import { CommentSchema } from '../validator/comment.validator';

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
}
