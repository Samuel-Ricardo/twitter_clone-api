import { injectable } from 'inversify';
import { IPostDTO, IPostSchema } from './DTO/post.dto';
import { Post as PrismaPost } from '@prisma/client';

@injectable()
export class Post {
  constructor(
    private id: string,
    private body: string,
    private authorId: string,
    private createdAt: Date,
    private updatedAt: Date,
    private image?: string | null,
  ) {
    Post.validate({
      id,
      body,
      authorId,
      createdAt,
      updatedAt,
      image,
    });
  }

  public static create(data: IPostDTO): Post {
    return new Post(
      data.id,
      data.body,
      data.authorId,
      data.createdAt,
      data.updatedAt,
      data.image,
    );
  }

  static fromPrisma(data: PrismaPost) {
    return Post.create({
      id: data.id,
      body: data.body,
      authorId: data.authorId,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      image: data.image,
    });
  }

  static fromPrismaArray(data: PrismaPost[]) {
    return data.map((item) => Post.fromPrisma(item));
  }

  public static validate(data: IPostDTO) {
    return IPostSchema.parse(data);
  }
}
