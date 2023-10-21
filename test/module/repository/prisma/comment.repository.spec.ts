import { ICommentRepository } from '../../../../src/modules/@core/comment/repository';
import { ISimulatePrismaRepository } from '@test/@types/simulate/repository';
import { MockFactory } from '@test/mock';
import {
  CREATE_POST_COMMENT_DATA,
  UPDATE_POST_COMMENT,
  UPDATE_POST_COMMENT_DATA,
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

  it('[UNIT] | Should: update => [COMMENT]', async () => {
    module.prisma.comment.update.mockResolvedValue(UPDATE_POST_COMMENT);

    const result = await module.repository.update(UPDATE_POST_COMMENT_DATA);

    expect(result).toEqual(UPDATE_POST_COMMENT);
    expect(module.prisma.comment.update).toHaveBeenCalledTimes(1);
    expect(module.prisma.comment.update).toHaveBeenCalledWith({
      where: {
        id: UPDATE_POST_COMMENT_DATA.id,
      },
      data: { body: UPDATE_POST_COMMENT_DATA.body },
    });
  });

  it('[UNIT] | Should: delete => [COMMENT]', async () => {
    module.prisma.comment.delete.mockResolvedValue(VALID_POST_COMMENT);

    expect(
      module.repository.delete({ id: VALID_POST_COMMENT.id }),
    ).resolves.not.toThrowError();

    expect(module.prisma.comment.delete).toHaveBeenCalledTimes(1);
    expect(module.prisma.comment.delete).toHaveBeenCalledWith({
      where: {
        id: VALID_POST_COMMENT.id,
      },
    });
  });

  it('[UNIT] | Should: find by post => [COMMENT]', async () => {
    module.prisma.comment.findMany.mockResolvedValue([VALID_POST_COMMENT]);

    const result = await module.repository.getPostComments({
      postId: VALID_POST_COMMENT.postId,
    });

    expect(result).toEqual([VALID_POST_COMMENT]);

    expect(module.prisma.comment.findMany).toHaveBeenCalledTimes(1);
    expect(module.prisma.comment.findMany).toHaveBeenCalledWith({
      orderBy: {
        updatedAt: 'desc',
      },
      where: {
        postId: VALID_POST_COMMENT.postId,
      },
    });
  });

  it('[UNIT] | Should: find by user => [COMMENT]', async () => {
    module.prisma.comment.findMany.mockResolvedValue([VALID_POST_COMMENT]);

    const result = await module.repository.getUserComments({
      authorId: VALID_POST_COMMENT.authorId,
    });

    expect(result).toEqual([VALID_POST_COMMENT]);

    expect(module.prisma.comment.findMany).toHaveBeenCalledTimes(1);
    expect(module.prisma.comment.findMany).toHaveBeenCalledWith({
      where: {
        authorId: VALID_POST_COMMENT.authorId,
      },
    });
  });
});
