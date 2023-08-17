import {
  CountFollowersUseCase,
  CountFollowingsUseCase,
  CreateFollowUseCase,
  GetFollowersUseCase,
  GetFollowingsUseCase,
  UnFollowUseCase,
} from '../../../../../../src/modules/@core/follow/use-case';
import { FollowService } from '../../../../../../src/modules/@core/follow/service';
import { ISimulateFollowService } from '@test/@types/simulate/follow/service';
import { MOCK_MODULE } from '@test/mock/module/app.registry';
import { interfaces } from 'inversify';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

export const mockFollowService = () => mockDeep<FollowService>();

export const simulateFollowService = ({
  container,
}: interfaces.Context): ISimulateFollowService => {
  const create = container.get<DeepMockProxy<CreateFollowUseCase>>(
    MOCK_MODULE.FOLLOW.USE_CASE.CREATE,
  );
  const unfollow = container.get<DeepMockProxy<UnFollowUseCase>>(
    MOCK_MODULE.FOLLOW.USE_CASE.DELETE,
  );

  const count_followers = container.get<DeepMockProxy<CountFollowersUseCase>>(
    MOCK_MODULE.FOLLOW.USE_CASE.COUNT.FOLLOWERS,
  );
  const count_following = container.get<DeepMockProxy<CountFollowingsUseCase>>(
    MOCK_MODULE.FOLLOW.USE_CASE.COUNT.FOLLOWING,
  );

  const get_followers = container.get<DeepMockProxy<GetFollowersUseCase>>(
    MOCK_MODULE.FOLLOW.USE_CASE.GET.FOLLOWERS,
  );
  const get_following = container.get<DeepMockProxy<GetFollowingsUseCase>>(
    MOCK_MODULE.FOLLOW.USE_CASE.GET.FOLLOWING,
  );

  const service = new FollowService(
    create,
    unfollow,
    get_followers,
    get_following,
    count_following,
    count_followers,
  );

  return {
    service,
    use_case: {
      create,
      unfollow,
      count_followers,
      count_following,
      get_followers,
      get_following,
    },
  };
};
