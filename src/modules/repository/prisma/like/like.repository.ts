import { ILikeRepository } from '@Core/like/repository/like.repository';
import { MODULE } from '@modules';
import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';

@injectable()
export class PrismaLikeRepository implements ILikeRepository {
  constructor(
    @inject(MODULE.PRISMA)
    private readonly prisma: PrismaClient,
  ) {}
}
