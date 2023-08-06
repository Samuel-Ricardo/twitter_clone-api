import {
  ICreatePostDTO,
  IDeletePostDTO,
  IFindPostByAuthorIdDTO,
  IFindPostByIdDTO,
  IPostRepository,
  IUpdatePostDTO,
  Post,
} from '@Post';
import { Post as PrismaPost } from '@prisma/client';
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

  async findAll() {
    return Post.fromPrismaArray(await this.prisma.post.findMany());
  }

  async findById(data: IFindPostByIdDTO) {
    const result = await this.prisma.post.findUnique({
      where: { id: data.id },
    });
    return Post.fromPrisma(result as PrismaPost);
  }

  async findByAuhorId(data: IFindPostByAuthorIdDTO) {
    const result = await this.prisma.post.findUnique({
      where: { authorId: data.id },
    });
    return Post.fromPrisma(result as PrismaPost);
  }

  async update(data: IUpdatePostDTO) {
    const oldPost = await this.prisma.post.update({
      where: { id: data.id },
      data,
    });
    return Post.fromPrisma(oldPost);
  }
  delete(post: IDeletePostDTO): Promise<Post> {
    throw new Error('Method not implemented.');
  }
}
