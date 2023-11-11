import { IFollowDTO } from '../DTO';

export interface IFollowCypher {
  encryptFollow(follow: IFollowDTO): string;
  encryptFollowers(followers: IFollowDTO[]): string;

  decryptFollow(follow: string): IFollowDTO;
  decryptFollowers(followers: string): IFollowDTO[];
}
