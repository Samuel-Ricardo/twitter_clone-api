import {
  ICreatePostDTO,
  IDeletePostDTO,
  IFindPostByAuthorIdDTO,
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
    return { post: (await this.service.create(post)).toStruct() };
  }

  async update(post: IUpdatePostDTO) {
    const result = await this.service.update(post);
    return { post: result.toStruct() };
  }

  async delete(post: IDeletePostDTO) {
    return await this.service.delete(post);
  }

  async listAll() {
    const posts = await this.service.listAll();
    return { posts: posts.map((post) => post.toStruct()) };
  }

  async listUserPosts(author: IFindPostByAuthorIdDTO) {
    return {
      posts: (await this.service.listPostsFromUser(author)).map((post) =>
        post.toStruct(),
      ),
    };
  }

  async details(post: IFindPostByIdDTO) {
    return { post: await this.service.detail(post) };
  }
}
