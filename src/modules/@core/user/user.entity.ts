import { injectable } from 'inversify';
import { User as PrismaUser } from '@prisma/client';

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
    public hasNotifications: boolean,
    public posts: any[],
    public comments: any[],
    public likes: any[],
    public notifications: any[],
    public emailVerified?: Date | null,
    public image?: string | null,
    public coverImage?: string | null,
    public profileImage?: string | null,
  ) {
    this.validateName();
  }

  private validateName() {
    if (this.name.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
  }

  static fromPrisma(user: PrismaUser) {
    return new User(
      user.id,
      user.name,
      user.username,
      user.bio,
      user.email,
      user.password,
      user.createdAt,
      user.updatedAt,
      user.hasNotifications,
      [],
      [],
      [],
      [],
      user.emailVerified,
      user.image,
      user.coverImage,
      user.profileImage,
    );
  }
}
