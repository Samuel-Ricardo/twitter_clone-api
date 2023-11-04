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
import { IGetCommentByIdDTO } from '../DTO/get_by_id.dto';

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

  async delete(comment: IDeleteCommentDTO) {
    return await this.service.delete(comment);
  }

  async getById(data: IGetCommentByIdDTO) {
    return { comment: await this.service.getById(data) };
  }

  async getPostComments(post: IGetPostCommentsDTO) {
    // return {
    //   comments: (await this.service.listPostComments(post)).map((c) =>
    //     c.toStruct(),
    //   ),
    // };
    return { comments: await this.service.listPostComments(post) };
  }

  async getUserComments(user: IGetUserCommentsDTO) {
    const comments = await this.service.listUserCommnets(user);
    // return { comments: comments.map((c) => c.toStruct()) };
    return { comments };
  }
}
