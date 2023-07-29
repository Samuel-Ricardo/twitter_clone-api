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
    public emailVerified?: Date,
    public image?: string,
    public coverImage?: string,
    public profileImage?: string,
  ) {}
}
