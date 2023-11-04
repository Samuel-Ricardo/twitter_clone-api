import { inject, injectable } from 'inversify';
import {
  CreateCommentUseCase,
  DeleteCommentUseCase,
  GetPostCommentUseCase,
  GetUserCommnetsUseCase,
  UpdateCommentUseCase,
} from '../use-case';
import { MODULE } from '@modules';
import {
  ICreateCommentDTO,
  IDeleteCommentDTO,
  IGetPostCommentsDTO,
  IGetUserCommentsDTO,
  IUpdateCommentDTO,
} from '../DTO';
import { GetCommentByIdUseCase } from '../use-case/get_by_id.use-case';
import { IGetCommentByIdDTO } from '../DTO/get_by_id.dto';
import { EncryptCommentBeforeSendPolicy } from '../policy/security/encrypt/before/comment.policy';
import { EncryptCommentListBeforeSendPolicy } from '../policy/security/encrypt/before/comments.policy';

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
    private readonly getPostComments: GetPostCommentUseCase,
    @inject(MODULE.COMMENT.USE_CASE.GET.BY.AUTHOR)
    private readonly getUserCommnets: GetUserCommnetsUseCase,
    @inject(MODULE.COMMENT.USE_CASE.GET.BY.ID)
    private readonly getCommentById: GetCommentByIdUseCase,
    @inject(MODULE.COMMENT.POLICY.SECURITY.ENCRYPT.BEFORE.COMMENT)
    private readonly encryptBeforeSendPolicy: EncryptCommentBeforeSendPolicy,
    @inject(MODULE.COMMENT.POLICY.SECURITY.ENCRYPT.BEFORE.COMMENTS)
    private readonly encryptListBeforeSendPolicy: EncryptCommentListBeforeSendPolicy,
  ) {}

  async comment(data: ICreateCommentDTO) {
    return this.encryptBeforeSendPolicy.execute(
      await this.create.execute(data),
    );
  }

  async getById(comment: IGetCommentByIdDTO) {
    return this.encryptBeforeSendPolicy.execute(
      await this.getCommentById.execute(comment),
    );
  }

  async updateComment(data: IUpdateCommentDTO) {
    return this.encryptBeforeSendPolicy.execute(
      await this.update.execute(data),
    );
  }

  async delete(comment: IDeleteCommentDTO) {
    return await this.deleteComment.execute(comment);
  }

  async listPostComments(comment: IGetPostCommentsDTO) {
    return this.encryptListBeforeSendPolicy.execute(
      await this.getPostComments.execute(comment),
    );
  }

  async listUserCommnets(comment: IGetUserCommentsDTO) {
    return this.encryptListBeforeSendPolicy.execute(
      await this.getUserCommnets.execute(comment),
    );
  }
}
