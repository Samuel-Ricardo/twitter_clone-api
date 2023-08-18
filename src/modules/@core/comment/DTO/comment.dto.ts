export interface ICommentDTO {
  id: string;
  body: string;

  authorId: string;
  postId: string;

  createdAt: Date;
  updatedAt: Date;
}
