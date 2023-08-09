import { Post } from '../entity';
import {
  ICreatePostDTO,
  IFindPostByIdDTO,
  IFindPostByAuthorIdDTO,
  IUpdatePostDTO,
  IDeletePostDTO,
} from '../DTO';

export interface IPostRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  findAll(): Promise<Post[]>;
  findById(data: IFindPostByIdDTO): Promise<Post>;
  findByAuhorId(data: IFindPostByAuthorIdDTO): Promise<Post>;
  update(data: IUpdatePostDTO): Promise<Post>;
  delete(post: IDeletePostDTO): Promise<void>;
}
