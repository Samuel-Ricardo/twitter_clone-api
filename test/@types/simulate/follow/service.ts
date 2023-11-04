import {
  CountFollowersUseCase,
  CountFollowingsUseCase,
  CreateFollowUseCase,
  GetFollowersUseCase,
  GetFollowingsUseCase,
  UnFollowUseCase,
} from '../../../../src/modules/@core/follow/use-case';
import { FollowService } from '../../../../src/modules/@core/follow/service';
import { DeepMockProxy } from 'jest-mock-extended';
import { FollowPolicy } from '../../../../src/modules/@core/follow/policy/follow.policy';
import { EncryptFollowBeforeSendPolicy } from '../../../../src/modules/@core/follow/policy/security/encrypt/before/follow.policy';
import { EncryptFollowListBeforeSendPolicy } from '../../../../src/modules/@core/follow/policy/security/encrypt/before/followers.policy';

export interface ISimulateFollowService {
  service: FollowService;
  policy: {
    follow: DeepMockProxy<FollowPolicy>;
    security: {
      encrypt: {
        before: {
          follow: DeepMockProxy<EncryptFollowBeforeSendPolicy>;
          followers: DeepMockProxy<EncryptFollowListBeforeSendPolicy>;
        };
      };
    };
  };
  use_case: {
    create: DeepMockProxy<CreateFollowUseCase>;
    unfollow: DeepMockProxy<UnFollowUseCase>;
    count_followers: DeepMockProxy<CountFollowersUseCase>;
    count_following: DeepMockProxy<CountFollowingsUseCase>;
    get_followers: DeepMockProxy<GetFollowersUseCase>;
    get_following: DeepMockProxy<GetFollowingsUseCase>;
  };
}
