import {
  ICreatePostDTO,
  IDeletePostDTO,
  IFindPostByAuthorIdDTO,
  IFindPostByIdDTO,
  IUpdatePostDTO,
} from '../../../@core/post/DTO';
import { Post } from '../../../@core/post/entity';
import { IPostRepository } from '../../../@core/post/repository';
import { Post as PrismaPost, PrismaClient } from '@prisma/client';
import { MODULE } from '@modules';
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
      data: {
        body: data.body,
        image: data.image,
      },
    });
    return Post.fromPrisma(oldPost);
  }

  async delete(post: IDeletePostDTO) {
    await this.prisma.post.delete({
      where: { id: post.id },
    });
  }
}
