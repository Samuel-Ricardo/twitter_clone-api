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
  ) {}
}
