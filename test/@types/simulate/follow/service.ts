import {
  CountFollowersUseCase,
  CountFollowingsUseCase,
  CreateFollowUseCase,
  GetFollowersUseCase,
  GetFollowingsUseCase,
  UnFollowUseCase,
} from '@Core';
import { FollowService } from '@Core/follow/service';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulateFollowService {
  service: FollowService;
  use_case: {
    create: DeepMockProxy<CreateFollowUseCase>;
    unfollow: DeepMockProxy<UnFollowUseCase>;
    count_followers: DeepMockProxy<CountFollowersUseCase>;
    count_following: DeepMockProxy<CountFollowingsUseCase>;
    get_followers: DeepMockProxy<GetFollowersUseCase>;
    get_following: DeepMockProxy<GetFollowingsUseCase>;
  };
}