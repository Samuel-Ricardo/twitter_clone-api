import { ICreateLikeEventDTO, ILikeDTO } from '../DTO';

export interface ILikeEvents {
  subscribeCreateLike(job: ICreateLikeEventDTO): void;
  publishCreateLike(data: ILikeDTO): void;
}
