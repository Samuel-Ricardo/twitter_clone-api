import { FollowController } from '@Core/follow/controller';
import { FollowService } from '@Core/follow/service';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulateFollowController {
  controller: FollowController;
  service: DeepMockProxy<FollowService>;
}
