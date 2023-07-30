import { injectable } from 'inversify';

export interface UpdateUserDTO {
  id: string;
  name?: string;
  username?: string;
  bio?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  hasNotifications?: boolean;
  emailVerified?: Date;
  image?: string;
  coverImage?: string;
  profileImage?: string;
}
