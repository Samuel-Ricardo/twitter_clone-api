import { injectable } from 'inversify';
import { IPostDTO } from './DTO/post.dto';

@injectable()
export class Post {
  constructor(
    private id: string,
    private body: string,
    private authorId: string,
    private createdAt: Date,
    private updatedAt: Date,
    private image?: string,
  ) {}

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
}
