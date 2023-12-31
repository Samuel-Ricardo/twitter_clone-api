import { ICreateLikeDTO } from '../../../@core/like/DTO/create.dto';
import { IDeleteLikeDTO } from '../../../@core/like/DTO/delete.dto';
import { IGetLikesOfCommentDTO } from '../../../@core/like/DTO/get_by_comment.dto';
import { IGetLikesOfPostDTO } from '../../../@core/like/DTO/get_by_post.dto';
import { IGetLikesOfUserDTO } from '../../../@core/like/DTO/get_by_user.dto';
import { Like } from '../../../@core/like/entity/like.entity';
import { ILikeRepository } from '../../../@core/like/repository/like.repository';
import { MODULE } from '@modules';
import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';

@injectable()
export class PrismaLikeRepository implements ILikeRepository {
  constructor(
    @inject(MODULE.PRISMA)
    private readonly prisma: PrismaClient,
  ) {}

  async create(data: ICreateLikeDTO) {
    return Like.fromPrisma(await this.prisma.like.create({ data }));
  }

  async delete(data: IDeleteLikeDTO) {
    await this.prisma.like.delete({ where: data });
  }

  async getLikesOfPost(data: IGetLikesOfPostDTO) {
    const result = await this.prisma.like.findMany({ where: data });
    return Like.fromPrismaArray(result);
  }

  async getLikesOfComment(data: IGetLikesOfCommentDTO) {
    return Like.fromPrismaArray(
      await this.prisma.like.findMany({ where: data }),
    );
  }

  async getLikesOfUser(data: IGetLikesOfUserDTO) {
    return Like.fromPrismaArray(
      await this.prisma.like.findMany({ where: data }),
    );
  }
}
