import { inject, injectable } from 'inversify';
import {
  CreateCommentUseCase,
  DeleteCommentUseCase,
  GetPostCommentUseCase,
  GetUserCommnetsUseCase,
  UpdateCommentUseCase,
} from '../use-case';
import { MODULE } from '@modules/app.registry';
import { ICreateCommentDTO } from '../DTO';

@injectable()
export class CommentService {
  constructor(
    @inject(MODULE.COMMENT.USE_CASE.CREATE)
    private readonly create: CreateCommentUseCase,
    @inject(MODULE.COMMENT.USE_CASE.UPDATE)
    private readonly update: UpdateCommentUseCase,
    @inject(MODULE.COMMENT.USE_CASE.DELETE)
    private readonly deleteComment: DeleteCommentUseCase,
    @inject(MODULE.COMMENT.USE_CASE.GET.BY.POST)
    private readonly getPostComment: GetPostCommentUseCase,
    @inject(MODULE.COMMENT.USE_CASE.GET.BY.AUTHOR)
    private readonly getUserCommnets: GetUserCommnetsUseCase,
  ) {}

  async comment(data: ICreateCommentDTO) {
    return await this.create.execute(data);
  }
}
