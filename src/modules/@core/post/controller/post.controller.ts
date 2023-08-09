import {
  ICreatePostDTO,
  IDeletePostDTO,
  IFindPostByAuthorIdDTO,
  IFindPostByIdDTO,
  IUpdatePostDTO,
} from '@Post/DTO';
import { PostRegistry } from '@Post/post.registry';
import { PostService } from '@Post/service/post.service';
import { Console } from 'console';
import { inject, injectable } from 'inversify';

@injectable()
export class PostController {
  constructor(
    @inject(PostRegistry.SERVICE.DEFAULT)
    private readonly service: PostService,
  ) {}

  async create(post: ICreatePostDTO) {
    return await this.service.create(post);
  }

  async update(post: IUpdatePostDTO) {
    return await this.service.update(post);
  }

  async delete(post: IDeletePostDTO) {
    return await this.service.delete(post);
  }

  async listAll() {
    const posts = await this.service.listAll();
    return { posts };
  }

  async listUserPosts(author: IFindPostByAuthorIdDTO) {
    return await this.service.listPostsFromUser(author);
  }

  async details(post: IFindPostByIdDTO) {
    return await this.service.detail(post);
  }
}
