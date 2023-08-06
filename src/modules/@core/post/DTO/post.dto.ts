export interface IPostDTO {
  id: string;
  body: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  image?: string;
}
