import { injectable } from 'inversify';

@injectable()
export class UpdateUserDto {
  constructor(
    public name?: string,
    public username?: string,
    public bio?: string,
    public email?: string,
    public password?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public hasNotification?: boolean,
    public posts?: any[],
    public comments?: any[],
    public likes?: any[],
    public notifications?: any[],
    public emailVerified?: Date,
    public image?: string,
    public coverImage?: string,
    public profileImage?: string,
  ) {}
}
