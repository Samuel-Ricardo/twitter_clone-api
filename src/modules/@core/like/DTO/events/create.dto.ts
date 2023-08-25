import { ILikeDTO } from '../like.dto';

export interface ICreateLikeEventDTO {
  execute: (data: ILikeDTO) => void;
}
