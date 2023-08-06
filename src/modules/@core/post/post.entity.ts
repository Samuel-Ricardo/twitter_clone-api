import { injectable } from 'inversify';
import { IPostDTO, IPostSchema } from './DTO/post.dto';

@injectable()
export class Post {
  constructor(
    private id: string,
    private body: string,
    private authorId: string,
    private createdAt: Date,
    private updatedAt: Date,
    private image?: string,
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

  public static validate(data: IPostDTO) {
    return IPostSchema.parse(data);
  }
}
