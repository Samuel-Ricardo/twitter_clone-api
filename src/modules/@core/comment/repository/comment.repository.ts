import {
  ICreateCommentDTO,
  IDeleteCommentDTO,
  IGetUserCommentsDTO,
  IGetPostCommentsDTO,
  IUpdateCommentDTO,
} from '../DTO';
import { IGetCommentByIdDTO } from '../DTO/get_by_id.dto';
import { Comment } from '../entity';

export interface ICommentRepository {
  create(comment: ICreateCommentDTO): Promise<Comment>;
  update(comment: IUpdateCommentDTO): Promise<Comment>;
  delete(comment: IDeleteCommentDTO): Promise<void>;
  getById(comment: IGetCommentByIdDTO): Promise<Comment>;
  getPostComments(post: IGetPostCommentsDTO): Promise<Comment[]>;
  getUserComments(user: IGetUserCommentsDTO): Promise<Comment[]>;
}
