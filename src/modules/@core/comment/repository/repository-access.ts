import { inject, injectable } from 'inversify';
import { ICommentRepository } from './comment.repository';
// import { MODULE } from "../../../app.registry";

@injectable()
export abstract class CommentRepositoryAccess {
  constructor(
    // @inject(MODULE.REPOSITORY.PRISMA.COMMENT)
    protected readonly repository: ICommentRepository,
  ) {}
}
