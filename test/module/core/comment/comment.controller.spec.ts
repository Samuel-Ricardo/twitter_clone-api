import { MockFactory } from '@test/mock';
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
    module.service.comment.mockResolvedValue(VALID_POST_COMMENT);

    const result = await module.controller.create(VALID_POST_COMMENT_DATA);

    expect(result).toStrictEqual({ comment: VALID_POST_COMMENT.toStruct() });

    expect(module.service.comment).toHaveBeenCalledTimes(1);
    expect(module.service.comment).toHaveBeenCalledWith(
      VALID_POST_COMMENT_DATA,
    );
  });

  it('[UNIT] | Should: update => [COMMENT]', async () => {
    module.service.updateComment.mockResolvedValue(UPDATE_POST_COMMENT);

    const result = await module.controller.udpate(UPDATE_POST_COMMENT_DATA);

    expect(result).toStrictEqual({ comment: UPDATE_POST_COMMENT.toStruct() });

    expect(result.comment.id).toEqual(VALID_POST_COMMENT.id);
    expect(result.comment.body).not.toEqual(VALID_POST_COMMENT.body);
    expect(result.comment.body).toEqual(UPDATE_POST_COMMENT_DATA.body);

    expect(module.service.updateComment).toHaveBeenCalledTimes(1);
    expect(module.service.updateComment).toHaveBeenCalledWith(
      UPDATE_POST_COMMENT_DATA,
    );
  });
});
