import { MODULE } from '../../../app.registry';
import { inject, injectable } from 'inversify';
import { PrismaClient } from '@prisma/client';
import { ICommentRepository } from '../../../@core/comment/repository/comment.repository';
import { Comment } from '../../../@core/comment/entity';
import { Comment as PrismaComment } from '@prisma/client';
import { ICreateCommentDTO } from '../../../@core/comment/DTO';

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
}
