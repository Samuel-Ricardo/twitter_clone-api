import { injectable } from 'inversify';

@injectable()
export class Post {
  constructor(
    private id: string,
    private body: string,
    private authorId: string,
    private createdAt: Date,
    private updatedAt: Date,
    private image?: string,
  ) {}
}
