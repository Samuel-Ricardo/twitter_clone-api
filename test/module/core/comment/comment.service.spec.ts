import { ISimulateCommentService } from '@test/@types/simulate/comment';
import { MockFactory } from '@test/mock';
import {
  VALID_POST_COMMENT,
  VALID_POST_COMMENT_DATA,
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

  it('[UNIT] | Should: create => Comment', async () => {
    module.use_case.create.execute.mockResolvedValue(VALID_POST_COMMENT);

    const result = await module.service.comment(VALID_POST_COMMENT_DATA);

    expect(result).toStrictEqual(VALID_POST_COMMENT);
    expect(module.use_case.create.execute).toBeCalledTimes(1);
    expect(module.use_case.create.execute).toBeCalledWith(
      VALID_POST_COMMENT_DATA,
    );
  });
});
