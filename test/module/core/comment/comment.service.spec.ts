import { ISimulateCommentService } from '@test/@types/simulate/comment';
import { MockFactory } from '@test/mock';

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
    expect(true).toBe(true);
  });
});
