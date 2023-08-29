import { ILikeDTO } from '../like.dto';

export interface ICreateLikeEventDTO {
  job: (data: ILikeDTO) => void;
}
