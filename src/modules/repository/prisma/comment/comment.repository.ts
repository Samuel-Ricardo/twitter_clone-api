import { MODULE } from '../../../app.registry';
import { inject, injectable } from 'inversify';
import { PrismaClient } from '@prisma/client';
import { ICommentRepository } from '../../../@core/comment/repository/comment.repository';
import { Comment } from '../../../@core/comment/entity';
import {
  ICreateCommentDTO,
  IDeleteCommentDTO,
  IGetUserCommentsDTO,
  IGetPostCommentsDTO,
  IUpdateCommentDTO,
  ICommentDTO,
} from '../../../@core/comment/DTO';
import { IGetCommentByIdDTO } from '@Core/comment/DTO/get_by_id.dto';

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
      orderBy: { updatedAt: 'desc' },
    });

    return Comment.fromPrismaArray(result);
  }

  async getUserComments({ authorId }: IGetUserCommentsDTO) {
    const result = await this.prisma.comment.findMany({
      where: { authorId },
    });

    return Comment.fromPrismaArray(result);
  }

  async getById(comment: IGetCommentByIdDTO): Promise<Comment> {
    const result = await this.prisma.comment.findUnique({
      where: { id: comment.id },
    });

    return Comment.fromPrisma(result as ICommentDTO);
  }
}
