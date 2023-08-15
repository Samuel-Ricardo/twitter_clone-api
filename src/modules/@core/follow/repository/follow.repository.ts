import { Follow } from '../entity';
import { ICreateFollowDTO } from '../DTO/create.dto';
import { ICountFollowingsDTO } from '../DTO/count_followings.dto';
import { IDeleteLikeDTO } from '@Like';
import { ICountFollowersDTO } from '../DTO/count_followers.dto';
import { IGetFollowersDTO } from '../DTO/get_followers.dto';
import { IGetFollowingsDTO } from '../DTO/get_followings.dto';

export interface IFollowRepository {
  create(data: ICreateFollowDTO): Promise<Follow>;
  getFollowings(data: IGetFollowingsDTO): Promise<Follow[]>;
  getFollowers(data: IGetFollowersDTO): Promise<Follow[]>;
  countFollowings(data: ICountFollowingsDTO): Promise<number>;
  countFollowers(data: ICountFollowersDTO): Promise<number>;
  delete(data: IDeleteLikeDTO): Promise<void>;
}
