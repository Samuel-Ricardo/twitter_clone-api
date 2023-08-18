import { CommentService } from '@Core/comment/service/comment.service';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export class CommentController {
  constructor(
    @inject(MODULE.COMMENT.SERVICE)
    private readonly service: CommentService,
  ) {}
}
