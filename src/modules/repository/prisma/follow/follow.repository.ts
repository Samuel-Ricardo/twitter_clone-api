import { Follow } from '../../../@core/follow/entity/follow.entity';
import { IFollowRepository } from '../../../@core/follow/repository/follow.repository';
import { ICreateFollowDTO } from '../../../@core/follow/DTO/create.dto';
import { IDeleteFollowDTO } from '../../../@core/follow/DTO/delete.dto';
import { IGetFollowersDTO } from '../../../@core/follow/DTO/get_followers.dto';
import { ICountFollowersDTO } from '../../../@core/follow/DTO/count_followers.dto';
import { ICountFollowingsDTO } from '../../../@core/follow/DTO/count_followings.dto';
import { IGetFollowingsDTO } from '../../../@core/follow/DTO/get_followings.dto';
import { MODULE } from '@modules';
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

  async getFollowings(data: IGetFollowingsDTO) {
    const result = await this.prisma.follow.findMany({
      where: { followerId: data.followerId },
    });

    return Follow.fromPrismaArray(result);
  }

  async getFollowers(data: IGetFollowersDTO) {
    const result = await this.prisma.follow.findMany({
      where: { followingId: data.followingId },
    });

    return Follow.fromPrismaArray(result);
  }
}
