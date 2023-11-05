import { ISimulateCommentService } from '@test/@types/simulate/comment';
import { ENCRYPTED_DATA, MockFactory } from '@test/mock';
import {
  UPDATE_POST_COMMENT,
  UPDATE_POST_COMMENT_DATA,
  VALID_POST_COMMENT,
  VALID_POST_COMMENT_DATA,
  VALID_POST,
  VALID_USER,
} from '@test/mock/data/comment';

describe('[SERVICE] | COMMENT', () => {
  let module: ISimulateCommentService;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.COMMENT.SERVICE_DEV();

    expect(module).toBeDefined();
    expect(module.service).toBeDefined();
    expect(module.use_case).toBeDefined();
    expect(module.policy).toBeDefined();
  });

  it('[UNIT] | Should: create => [COMMENT]', async () => {
    module.use_case.create.execute.mockResolvedValue(VALID_POST_COMMENT);
    module.policy.security.encrypt.before.comment.execute.mockReturnValue(
      ENCRYPTED_DATA,
    );

    const result = await module.service.comment(VALID_POST_COMMENT_DATA);

    expect(result).toStrictEqual(ENCRYPTED_DATA);

    expect(module.use_case.create.execute).toBeCalledTimes(1);
    expect(module.use_case.create.execute).toBeCalledWith(
      VALID_POST_COMMENT_DATA,
    );

    expect(
      module.policy.security.encrypt.before.comment.execute,
    ).toBeCalledTimes(1);
    expect(
      module.policy.security.encrypt.before.comment.execute,
    ).toBeCalledWith(VALID_POST_COMMENT);
  });

  it('[UNIT] | Should: update => [COMMENT]', async () => {
    module.use_case.update.execute.mockResolvedValue(UPDATE_POST_COMMENT);
    module.policy.security.encrypt.before.comment.execute.mockReturnValue(
      ENCRYPTED_DATA,
    );

    const result = await module.service.updateComment(UPDATE_POST_COMMENT_DATA);

    expect(result).toStrictEqual(ENCRYPTED_DATA);

    // expect(result.id).toEqual(VALID_POST_COMMENT.id);
    // expect(result.body).not.toEqual(VALID_POST_COMMENT.body);

    expect(module.use_case.update.execute).toBeCalledTimes(1);
    expect(module.use_case.update.execute).toBeCalledWith(
      UPDATE_POST_COMMENT_DATA,
    );

    expect(
      module.policy.security.encrypt.before.comment.execute,
    ).toBeCalledTimes(1);
    expect(
      module.policy.security.encrypt.before.comment.execute,
    ).not.toBeCalledWith(VALID_POST_COMMENT);

    expect(
      module.policy.security.encrypt.before.comment.execute,
    ).toBeCalledWith(UPDATE_POST_COMMENT);
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
    module.policy.security.encrypt.before.comments.execute.mockReturnValue(
      ENCRYPTED_DATA,
    );

    const result = await module.service.listPostComments({
      postId: VALID_POST.id,
    });

    expect(result).toStrictEqual(ENCRYPTED_DATA);

    expect(module.use_case.get_post_comments.execute).toBeCalledTimes(1);
    expect(module.use_case.get_post_comments.execute).toBeCalledWith({
      postId: VALID_POST.id,
    });

    expect(
      module.policy.security.encrypt.before.comments.execute,
    ).toBeCalledTimes(1);
    expect(
      module.policy.security.encrypt.before.comments.execute,
    ).toBeCalledWith([VALID_POST_COMMENT]);
  });

  it('[UNIT] | Should: get by [USER] => [COMMENT]', async () => {
    module.use_case.get_user_comments.execute.mockResolvedValue([
      VALID_POST_COMMENT,
    ]);
    module.policy.security.encrypt.before.comments.execute.mockReturnValue(
      ENCRYPTED_DATA,
    );

    const result = await module.service.listUserCommnets({
      authorId: VALID_USER.id,
    });

    expect(result).toStrictEqual(ENCRYPTED_DATA);

    expect(module.use_case.get_user_comments.execute).toBeCalledTimes(1);
    expect(module.use_case.get_user_comments.execute).toBeCalledWith({
      authorId: VALID_USER.id,
    });

    expect(
      module.policy.security.encrypt.before.comments.execute,
    ).toBeCalledTimes(1);
    expect(
      module.policy.security.encrypt.before.comments.execute,
    ).toBeCalledWith([VALID_POST_COMMENT]);
  });
});
