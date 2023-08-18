import { MODULE } from '../../../app.registry';
import { inject, injectable } from 'inversify';
import { PrismaClient } from '@prisma/client';
import { ICommentRepository } from '../../../@core/comment/repository/comment.repository';
import { Comment } from '../../../@core/comment/entity';
import { Comment as PrismaComment } from '@prisma/client';
import {
  ICreateCommentDTO,
  IDeleteCommentDTO,
  IGetPostCommentsDTO,
  IUpdateCommentDTO,
} from '../../../@core/comment/DTO';

@injectable()
export class PrismaCommentRepository implements ICommentRepository {
  constructor(
    @inject(MODULE.PRISMA)
    private readonly prisma: PrismaClient,
  ) {}

  async create(comment: ICreateCommentDTO) {
    const result = await this.prisma.comment.create({
      data: comment,
    });

    return Comment.fromPrisma(result);
  }

  async update(comment: IUpdateCommentDTO) {
    const result = await this.prisma.comment.update({
      where: {
        id: comment.id,
      },
      data: { body: comment.body },
    });

    return Comment.fromPrisma(result);
  }

  async delete(where: IDeleteCommentDTO) {
    await this.prisma.comment.delete({
      where,
    });
  }

  async getPostComments({ postId }: IGetPostCommentsDTO) {
    const result = await this.prisma.comment.findMany({
      where: { postId },
    });

    return Comment.fromPrismaArray(result);
  }
}
