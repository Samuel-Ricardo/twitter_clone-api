import { inject, injectable } from 'inversify';
import { PrismaClient } from '@prisma/client';
import { ICommentRepository } from '../../../@core/comment/repository/comment.repository';
import { MODULE } from '../../../app.registry';

@injectable()
export class PrismaCommentRepository implements ICommentRepository {
  constructor(
    @inject(MODULE.PRISMA)
    private readonly prisma: PrismaClient,
  ) {}
}
