import {
  Follow,
  ICountFollowersDTO,
  ICountFollowingsDTO,
  ICreateFollowDTO,
  IDeleteFollowDTO,
  IFollowRepository,
} from '@Core';
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

  async delete(data: IDeleteFollowDTO) {
    await this.prisma.follow.delete({
      where: { id: data.id },
    });
  }

  async countFollowings(data: ICountFollowingsDTO) {
    const result = await this.prisma.follow.count({
      where: { followerId: data.followerId },
    });

    return result;
  }

  async countFollowers(data: ICountFollowersDTO) {
    return await this.prisma.follow.count({
      where: { followingId: data.followingId },
    });
  }
}
