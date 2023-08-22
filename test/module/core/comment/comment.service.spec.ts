import { ISimulateCommentService } from '@test/@types/simulate/comment';
import { MockFactory } from '@test/mock';
import {
  UPDATE_POST_COMMENT,
  UPDATE_POST_COMMENT_DATA,
  VALID_POST_COMMENT,
  VALID_POST_COMMENT_DATA,
  VALID_POST,
} from '@test/mock/data/comment';

describe('[SERVICE] | COMMENT', () => {
  let module: ISimulateCommentService;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.COMMENT.SERVICE_DEV();

    expect(module).toBeDefined();
    expect(module.service).toBeDefined();
    expect(module.use_case).toBeDefined();
  });

  it('[UNIT] | Should: create => [COMMENT]', async () => {
    module.use_case.create.execute.mockResolvedValue(VALID_POST_COMMENT);

    const result = await module.service.comment(VALID_POST_COMMENT_DATA);

    expect(result).toStrictEqual(VALID_POST_COMMENT);
    expect(module.use_case.create.execute).toBeCalledTimes(1);
    expect(module.use_case.create.execute).toBeCalledWith(
      VALID_POST_COMMENT_DATA,
    );
  });

  it('[UNIT] | Should: update => [COMMENT]', async () => {
    module.use_case.update.execute.mockResolvedValue(UPDATE_POST_COMMENT);

    const result = await module.service.updateComment(UPDATE_POST_COMMENT_DATA);

    expect(result).toStrictEqual(UPDATE_POST_COMMENT);
    expect(result.id).toEqual(VALID_POST_COMMENT.id);
    expect(result.body).not.toEqual(VALID_POST_COMMENT.body);

    expect(module.use_case.update.execute).toBeCalledTimes(1);
    expect(module.use_case.update.execute).toBeCalledWith(
      UPDATE_POST_COMMENT_DATA,
    );
  });

  it('[UNIT] | Should: delete => [COMMENT]', async () => {
    module.use_case.deleteComment.execute.mockResolvedValue();

    expect(
      module.service.delete({ id: VALID_POST_COMMENT.id }),
    ).resolves.not.toThrow();

    expect(module.use_case.deleteComment.execute).toBeCalledTimes(1);
    expect(module.use_case.deleteComment.execute).toBeCalledWith({
      id: VALID_POST_COMMENT.id,
    });
  });

  it('[UNIT] | Should: get by [POST] => [COMMENT]', async () => {
    module.use_case.get_post_comments.execute.mockResolvedValue([
      VALID_POST_COMMENT,
    ]);

    const result = await module.service.listPostComments({
      postId: VALID_POST.id,
    });

    expect(result).toStrictEqual([VALID_POST_COMMENT]);
    expect(module.use_case.get_post_comments.execute).toBeCalledTimes(1);
    expect(module.use_case.get_post_comments.execute).toBeCalledWith({
      postId: VALID_POST.id,
    });
  });
});
