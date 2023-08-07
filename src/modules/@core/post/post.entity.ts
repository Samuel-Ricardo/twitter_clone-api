import { injectable } from 'inversify';
import { IPostDTO, IPostSchema } from './DTO/post.dto';
import { Post as PrismaPost } from '@prisma/client';

@injectable()
export class Post {
  constructor(
    private _id: string,
    private _body: string,
    private _authorId: string,
    private _createdAt: Date,
    private _updatedAt: Date,
    private _image?: string | null,
  ) {
    Post.validate({
      id: _id,
      body: _body,
      authorId: _authorId,
      createdAt: _createdAt,
      updatedAt: _updatedAt,
      image: _image,
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

  public get id(): string {
    return this._id;
  }

  public get body(): string {
    return this._body;
  }

  public get authorId(): string {
    return this._authorId;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public get image(): string | null | undefined {
    return this._image;
  }
}
