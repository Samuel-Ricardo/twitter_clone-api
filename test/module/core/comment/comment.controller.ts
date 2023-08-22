import { MockFactory } from '@test/mock';
import { CommentController, CommentService } from '../../../../src/modules';
import { ISimulateController } from '@test/@types/simulate/controller';

describe('[CONTROLLER] | COMMENT', () => {
  let module: ISimulateController<CommentService, CommentController>;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.COMMENT.CONTROLLER_DEV();

    expect(module).toBeDefined();
    expect(module.controller).toBeDefined();
    expect(module.service).toBeDefined();
  });
});
