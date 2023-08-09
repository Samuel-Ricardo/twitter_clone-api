import { PostController } from '@Post/controller/post.controller';
import { PostService } from '@Post/service/post.service';
import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulatePostController {
  controller: PostController;
  service: DeepMockProxy<PostService>;
}
