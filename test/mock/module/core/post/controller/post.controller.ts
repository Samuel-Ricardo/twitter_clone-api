import { PostController } from '@Post/controller/post.controller';
import { mockDeep } from 'jest-mock-extended';

export const mockPostController = () => mockDeep<PostController>();
