import { ICommentRepository } from '../../../../src/modules/@core/comment/repository';
import { ISimulatePrismaRepository } from '@test/@types/simulate/repository';
import { MockFactory } from '@test/mock';
import {
  CREATE_POST_COMMENT_DATA,
  VALID_POST_COMMENT,
  VALID_POST_COMMENT_DATA,
} from '@test/mock/data/comment';

describe('[REPOSITORY] | PRISMA => [COMMENT]', () => {
  let module: ISimulatePrismaRepository<ICommentRepository>;

  beforeEach(async () => {
    module = MockFactory.REPOSITORY.PRISMA.COMMENT_DEV();
  });
});
