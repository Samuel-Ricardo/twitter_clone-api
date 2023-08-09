import { ICreatePostDTO } from '@Post/DTO';
import { PostRegistry } from '@Post/post.registry';
import { PostService } from '@Post/service/post.service';
import { inject, injectable } from 'inversify';

@injectable()
export class PostController {
  constructor(
    @inject(PostRegistry.SERVICE.DEFAULT)
    private readonly service: PostService,
  ) {}

  async create(post: ICreatePostDTO) {
    return this.service.create(post);
  }
}
