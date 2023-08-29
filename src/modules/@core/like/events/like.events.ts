import { ICreateLikeEventDTO, ILikeDTO } from '../DTO';

export interface ILikeEvents {
  subscribeCreateLike(schedule: ICreateLikeEventDTO): void;
  publishCreateLike(data: ILikeDTO): void;
}
