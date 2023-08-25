import { ICreateLikeEventDTO, ILikeDTO } from '../DTO';

export interface ILikeEvents {
  subscribeCreateLike(job: ICreateLikeEventDTO): void;
  emitCreateLike(data: ILikeDTO): void;
}
