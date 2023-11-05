import { ENCRYPTED_DATA, MockFactory } from '@test/mock';
import { CommentController, CommentService } from '../../../../src/modules';
import { ISimulateController } from '@test/@types/simulate/controller';
import {
  UPDATE_POST_COMMENT,
  UPDATE_POST_COMMENT_DATA,
  VALID_POST_COMMENT,
  VALID_POST_COMMENT_DATA,
} from '@test/mock/data/comment';

describe('[CONTROLLER] | COMMENT', () => {
  let module: ISimulateController<CommentService, CommentController>;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.COMMENT.CONTROLLER_DEV();

    expect(module).toBeDefined();
    expect(module.controller).toBeDefined();
    expect(module.service).toBeDefined();
  });

  it('[UNIT] | Should: create => [COMMENT]', async () => {
    module.service.comment.mockResolvedValue(ENCRYPTED_DATA);

    const result = await module.controller.create(VALID_POST_COMMENT_DATA);

    expect(result).toStrictEqual({ comment: ENCRYPTED_DATA });

    expect(module.service.comment).toHaveBeenCalledTimes(1);
    expect(module.service.comment).toHaveBeenCalledWith(
      VALID_POST_COMMENT_DATA,
    );
  });

  it('[UNIT] | Should: update => [COMMENT]', async () => {
    module.service.updateComment.mockResolvedValue(ENCRYPTED_DATA);

    const result = await module.controller.udpate(UPDATE_POST_COMMENT_DATA);

    expect(result).toStrictEqual({ comment: ENCRYPTED_DATA });

    // expect(result.comment.id).toEqual(VALID_POST_COMMENT.id);
    // expect(result.comment.body).not.toEqual(VALID_POST_COMMENT.body);
    // expect(result.comment.body).toEqual(UPDATE_POST_COMMENT_DATA.body);

    expect(module.service.updateComment).toHaveBeenCalledTimes(1);
    expect(module.service.updateComment).toHaveBeenCalledWith(
      UPDATE_POST_COMMENT_DATA,
    );
  });

  it('[UNIT] | Should: delete => [COMMENT]', async () => {
    module.service.delete.mockResolvedValue();

    expect(
      module.controller.delete({ id: VALID_POST_COMMENT.id }),
    ).resolves.not.toThrow();

    expect(module.service.delete).toHaveBeenCalledTimes(1);
    expect(module.service.delete).toHaveBeenCalledWith({
      id: VALID_POST_COMMENT.id,
    });
  });

  it('[UNIT] | Should: get by [POST] => [COMMENT]', async () => {
    module.service.listPostComments.mockResolvedValue(ENCRYPTED_DATA);

    const result = await module.controller.getPostComments({
      postId: VALID_POST_COMMENT.postId,
    });

    //    expect(result).toStrictEqual({comments: [VALID_POST_COMMENT.toStruct()]});

    expect(result).toStrictEqual({ comments: ENCRYPTED_DATA });

    expect(module.service.listPostComments).toHaveBeenCalledTimes(1);
    expect(module.service.listPostComments).toHaveBeenCalledWith({
      postId: VALID_POST_COMMENT.postId,
    });
  });

  it('[UNIT] | Should: get by [USER] => [COMMENT]', async () => {
    module.service.listUserCommnets.mockResolvedValue([VALID_POST_COMMENT]);

    const result = await module.controller.getUserComments({
      authorId: VALID_POST_COMMENT.authorId,
    });

    expect(result).toStrictEqual({ comments: [VALID_POST_COMMENT.toStruct()] });
    expect(module.service.listUserCommnets).toHaveBeenCalledTimes(1);
    expect(module.service.listUserCommnets).toHaveBeenCalledWith({
      authorId: VALID_POST_COMMENT.authorId,
    });
  });
});
