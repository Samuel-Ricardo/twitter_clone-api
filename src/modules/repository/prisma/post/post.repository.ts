import {
  ICreatePostDTO,
  IDeletePostDTO,
  IFindPostByAuthorIdDTO,
  IFindPostByIdDTO,
  IPostRepository,
  IUpdatePostDTO,
  Post,
} from '@Post';

export class PrismaPostRepository implements IPostRepository {
  create(data: ICreatePostDTO): Promise<Post> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Post[]> {
    throw new Error('Method not implemented.');
  }
  findById(data: IFindPostByIdDTO): Promise<Post> {
    throw new Error('Method not implemented.');
  }
  findByAuhorId(data: IFindPostByAuthorIdDTO): Promise<Post> {
    throw new Error('Method not implemented.');
  }
  update(data: IUpdatePostDTO): Promise<Post> {
    throw new Error('Method not implemented.');
  }
  delete(post: IDeletePostDTO): Promise<Post> {
    throw new Error('Method not implemented.');
  }
}
