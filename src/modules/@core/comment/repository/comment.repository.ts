import {
  ICreateCommentDTO,
  IDeleteCommentDTO,
  IGeUserCommentsDTO,
  IGetPostCommentsDTO,
  IUpdateCommentDTO,
} from '../DTO';
import { Comment } from '../entity';

export interface ICommentRepository {
  create(comment: ICreateCommentDTO): Promise<Comment>;
  update(comment: IUpdateCommentDTO): Promise<Comment>;
  delete(comment: IDeleteCommentDTO): Promise<void>;
  getPostComments(post: IGetPostCommentsDTO): Promise<Comment[]>;
  getUserComments(user: IGeUserCommentsDTO): Promise<Comment[]>;
}
