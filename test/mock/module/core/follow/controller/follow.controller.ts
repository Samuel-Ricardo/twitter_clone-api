import { FollowController } from '../../../../../../src/modules/@core/follow/controller';
import { FollowService } from '../../../../../../src/modules/@core/follow/service';
import { ISimulateFollowController } from '@test/@types/simulate/follow/controller';
import { MOCK_MODULE } from '@test/mock/module/app.registry';
import { interfaces } from 'inversify';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

export const mockFollowController = () => mockDeep<FollowController>();

export const simulateFollowController = ({
  container,
}: interfaces.Context): ISimulateFollowController => {
  const service = container.get<DeepMockProxy<FollowService>>(
    MOCK_MODULE.FOLLOW.SERVICE,
  );
  const controller = new FollowController(service);

  return { controller, service };
};
