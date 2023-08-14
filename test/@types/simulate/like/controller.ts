import {
  LikeController,
  LikeService,
} from '../../../../src/modules/@core/like';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulateLikeController {
  service: DeepMockProxy<LikeService>;
  controller: LikeController;
}
