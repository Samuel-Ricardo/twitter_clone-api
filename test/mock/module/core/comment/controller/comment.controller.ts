import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { CommentController } from '../../../../../../src/modules/@core/comment/controller/comment.controller';
import { interfaces } from 'inversify';
import { ISimulateController } from '@test/@types/simulate/controller';
import { CommentService } from '../../../../../../src/modules/@core/comment/service';
import { MOCK_MODULE } from '@test/mock/module/app.registry';

export const mockCommentController = () => mockDeep<CommentController>();

export const simulateCommentController = ({
  container,
}: interfaces.Context): ISimulateController<
  CommentService,
  CommentController
> => {
  const service = container.get<DeepMockProxy<CommentService>>(
    MOCK_MODULE.COMMENT.SERVICE,
  );
  const controller = new CommentController(service);

  return { service, controller };
};
