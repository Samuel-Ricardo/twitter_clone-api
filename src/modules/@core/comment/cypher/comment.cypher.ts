import { ICommentDTO } from '../DTO';

export interface ICommentCypher {
  encryptComment(comment: ICommentDTO): string;
  encryptComments(comments: ICommentDTO[]): string;

  decryptComment(comment: string): ICommentDTO;
  decryptComments(comments: string): ICommentDTO[];
}
