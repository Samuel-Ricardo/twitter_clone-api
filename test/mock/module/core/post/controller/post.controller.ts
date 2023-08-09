import { PostController } from '@Post/controller/post.controller';
import { PostService } from '@Post/service/post.service';
import { ISimulatePostController } from '@test/@types/simulate';
import { interfaces } from 'inversify';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PostMockRegistry } from '../post.registry';

export const mockPostController = () => mockDeep<PostController>();

export const simulatePostController = ({
  container,
}: interfaces.Context): ISimulatePostController => {
  const service = container.get<DeepMockProxy<PostService>>(
    PostMockRegistry.SERVICE.DEFAULT.MOCK,
  );
  const controller = new PostController(service);

  return { controller, service };
};
