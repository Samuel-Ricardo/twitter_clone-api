import { ICreateLikeDTO } from '../DTO/create.dto';
import { IDeleteLikeDTO } from '../DTO/delete.dto';
import { IGetLikesOfCommentDTO } from '../DTO/get_by_comment.dto';
import { IGetLikesOfPostDTO } from '../DTO/get_by_post.dto';
import { IGetLikesOfUserDTO } from '../DTO/get_by_user.dto';
import { Like } from '../entity/like.entity';

export interface ILikeRepository {
  create(data: ICreateLikeDTO): Promise<Like>;
  delete(data: IDeleteLikeDTO): Promise<void>;
  getLikesOfPost(data: IGetLikesOfPostDTO): Promise<Like[]>;
  getLikesOfUser(data: IGetLikesOfUserDTO): Promise<Like[]>;
  getLikesOfComment(data: IGetLikesOfCommentDTO): Promise<Like[]>;
}
