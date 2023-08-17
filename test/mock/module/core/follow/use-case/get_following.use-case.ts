import { GetFollowingsUseCase } from '../../../../../../src/modules/@core/follow/use-case';
import { mockDeep } from 'jest-mock-extended';

export const mockGetFollowingUseCase = () => mockDeep<GetFollowingsUseCase>();
