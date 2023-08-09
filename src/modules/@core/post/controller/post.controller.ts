import {
  ICreatePostDTO,
  IDeletePostDTO,
  IFindPostByIdDTO,
  IUpdatePostDTO,
} from '@Post/DTO';
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

  async update(post: IUpdatePostDTO) {
    return this.service.update(post);
  }

  async delete(post: IDeletePostDTO) {
    return this.service.delete(post);
  }

  async listAll() {
    return this.service.listAll();
  }

  async details(post: IFindPostByIdDTO) {
    return this.service.detail(post);
  }
}
