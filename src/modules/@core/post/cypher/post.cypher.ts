import { IPostDTO } from '@Post/DTO';

export interface IPostCypher {
  encryptPost(post: IPostDTO): string;
  decryptPost(post: string): IPostDTO;

  encryptPosts(posts: IPostDTO[]): string;
  decryptPosts(posts: string): IPostDTO[];
}
