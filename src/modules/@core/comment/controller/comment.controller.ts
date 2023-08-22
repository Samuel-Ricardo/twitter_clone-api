import { CommentService } from '../service';
import { MODULE } from '@modules/app.registry';
import { inject, injectable } from 'inversify';
import {
  ICreateCommentDTO,
  IDeleteCommentDTO,
  IGetPostCommentsDTO,
  IGetUserCommentsDTO,
  IUpdateCommentDTO,
} from '../DTO';

@injectable()
export class CommentController {
  constructor(
    @inject(MODULE.COMMENT.SERVICE)
    private readonly service: CommentService,
  ) {}

  async create(data: ICreateCommentDTO) {
    const comment = (await this.service.comment(data)).toStruct();
    return { comment };
  }

  async udpate(data: IUpdateCommentDTO) {
    return { comment: (await this.service.updateComment(data)).toStruct() };
  }

  async delete(comment: IDeleteCommentDTO) {
    return await this.service.delete(comment);
  }

  async getPostComments(post: IGetPostCommentsDTO) {
    return {
      comments: (await this.service.listPostComments(post)).map((c) =>
        c.toStruct(),
      ),
    };
  }

  async getUserComments(user: IGetUserCommentsDTO) {
    const comments = await this.service.listUserCommnets(user);
    return { comments: comments.map((c) => c.toStruct()) };
  }
}
