import { CommentService } from '../service';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';
import { ICreateCommentDTO, IUpdateCommentDTO } from '../DTO';

@injectable()
export class CommentController {
  constructor(
    @inject(MODULE.COMMENT.SERVICE)
    private readonly service: CommentService,
  ) {}

  async create(data: ICreateCommentDTO) {
    const comment = await this.service.comment(data);
    return { comment };
  }

  async udpate(data: IUpdateCommentDTO) {
    return { comment: await this.service.updateComment(data) };
  }
}
