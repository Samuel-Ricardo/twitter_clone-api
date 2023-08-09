import { PostService } from '@Post/service/post.service';
import { mockDeep } from 'jest-mock-extended';

export const mockPostService = () => mockDeep<PostService>();
