import {
  ICreatePostDTO,
  IDeletePostDTO,
  IFindPostByAuthorIdDTO,
  IFindPostByIdDTO,
  IPostRepository,
  IUpdatePostDTO,
  Post,
} from '@Post';
import { MODULE } from '@modules/app.registry';
import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';

@injectable()
export class PrismaPostRepository implements IPostRepository {
  constructor(
    @inject(MODULE.PRISMA)
    private readonly prisma: PrismaClient,
  ) {}

  async create(data: ICreatePostDTO) {
    const result = await this.prisma.post.create({ data });
    return Post.fromPrisma(result);
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
