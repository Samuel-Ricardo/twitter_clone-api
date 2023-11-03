import { ILikeDTO } from '@Like/DTO';

export interface ILikeCypher {
  encryptLike(like: ILikeDTO): string;
  decryptLike(like: string): ILikeDTO;

  encryptLikes(likes: ILikeDTO[]): string;
  decryptLikes(likes: string): ILikeDTO[];
}
