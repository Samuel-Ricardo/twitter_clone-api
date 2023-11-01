import {
  ICreatePostDTO,
  IUpdatePostDTO,
  IDeletePostDTO,
  IFindPostByIdDTO,
  IFindPostByAuthorIdDTO,
} from '@Post/DTO';
import { EncryptPostBeforeSendPolicy } from '@Post/policy/security/encrypt/before/post.policy';
import { EncryptPostListBeforeSendPolicy } from '@Post/policy/security/encrypt/before/posts.policy';
import {
  CreatePostUseCase,
  DeletePostUseCase,
  UpdatePostUseCase,
  ListPostsUseCase,
  DetailPostsUseCase,
  ListUserPostsUseCase,
} from '@Post/use-case';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export class PostService {
  constructor(
    @inject(MODULE.POST.USE_CASE.CREATE)
    private readonly createPost: CreatePostUseCase,
    @inject(MODULE.POST.USE_CASE.UPDATE)
    private readonly updatePost: UpdatePostUseCase,
    @inject(MODULE.POST.USE_CASE.DELETE)
    private readonly deletePost: DeletePostUseCase,
    @inject(MODULE.POST.USE_CASE.FIND.ALL)
    private readonly listPosts: ListPostsUseCase,
    @inject(MODULE.POST.USE_CASE.FIND.BY.ID)
    private readonly detailPosts: DetailPostsUseCase,
    @inject(MODULE.POST.USE_CASE.FIND.BY.AUTHOR)
    private readonly listUserPosts: ListUserPostsUseCase,
    @inject(MODULE.POST.POLICY.SECURITY.ENCRYPT.BEFORE.POST)
    private readonly encrypBeforeSendPolicy: EncryptPostBeforeSendPolicy,
    @inject(MODULE.POST.POLICY.SECURITY.ENCRYPT.BEFORE.POSTS)
    private readonly encryptListBeforeSendPolicy: EncryptPostListBeforeSendPolicy,
  ) {}

  async create(data: ICreatePostDTO) {
    return await this.createPost.execute(data);
  }

  async update(data: IUpdatePostDTO) {
    return await this.updatePost.execute(data);
  }

  async delete(data: IDeletePostDTO) {
    await this.deletePost.execute(data);
  }

  async listAll() {
    return this.encryptListBeforeSendPolicy.execute(
      (await this.listPosts.execute()).map((p) => p.toStruct()),
    );
  }

  async detail(data: IFindPostByIdDTO) {
    return await this.detailPosts.execute(data);
  }

  async listPostsFromUser(data: IFindPostByAuthorIdDTO) {
    return await this.listUserPosts.execute(data);
  }
}
