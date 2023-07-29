import { injectable } from 'inversify';

@injectable()
export class User {
  constructor(
    public id: string,
    public name: string,
    public username: string,
    public bio: string,
    public email: string,
    public password: string,
    public createdAt: Date,
    public updatedAt: Date,
    public hasNotification: boolean,
    public posts: any[],
    public comments: any[],
    public likes: any[],
    public notifications: any[],
    public emailVerified?: Date,
    public image?: string,
    public coverImage?: string,
    public profileImage?: string,
  ) {}

  validateName() {
    if (this.name.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
  }
}
