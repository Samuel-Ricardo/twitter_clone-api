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
    jest.clearAllMocks();

    module = MockFactory.REPOSITORY.PRISMA.COMMENT_DEV();

    expect(module).toBeDefined();
    expect(module.repository).toBeDefined();
    expect(module.prisma).toBeDefined();
  });

  it('[UNIT] | Should: create => [COMMENT] ', async () => {
    module.prisma.comment.create.mockResolvedValue(VALID_POST_COMMENT_DATA);

    const result = await module.repository.create(CREATE_POST_COMMENT_DATA);

    expect(result).toEqual(VALID_POST_COMMENT);
    expect(module.prisma.comment.create).toHaveBeenCalledTimes(1);
    expect(module.prisma.comment.create).toHaveBeenCalledWith({
      data: CREATE_POST_COMMENT_DATA,
    });
  });
});
