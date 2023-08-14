import {
  LikeController,
  LikeService,
} from '../../../../../../src/modules/@core/like';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { interfaces } from 'inversify';
import { MockLikeRegistry } from '../like.registry';
import { ISimulateLikeController } from '@test/@types/simulate/like/controller';

export const mockLikeController = () => mockDeep<LikeController>();

export const simulateLikeController = ({
  container,
}: interfaces.Context): ISimulateLikeController => {
  const service = container.get<DeepMockProxy<LikeService>>(
    MockLikeRegistry.SERVICE,
  );
  const controller = new LikeController(service);

  return { controller, service };
};
