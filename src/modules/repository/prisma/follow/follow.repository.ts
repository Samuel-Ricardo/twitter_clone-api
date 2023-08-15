import { Follow, ICreateFollowDTO, IFollowRepository } from '@Core';
import { MODULE } from '@modules/app.registry';
import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';

@injectable()
export class PrismaFollowRepository implements IFollowRepository {
  constructor(
    @inject(MODULE.PRISMA)
    private readonly prisma: PrismaClient,
  ) {}

  async create(data: ICreateFollowDTO) {
    const follow = await this.prisma.follow.create({
      data,
    });

    return Follow.fromPrisma(follow);
  }
}
