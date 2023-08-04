import 'reflect-metadata';

import { injectable } from 'inversify';
import { User as PrismaUser } from '@prisma/client';
import { UpdateUserDTO } from './DTO';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@injectable()
export class User {
  @IsNotEmpty()
  public id: string;

  @MaxLength(255)
  @MinLength(3)
  @IsNotEmpty()
  public name: string;

  @MaxLength(255)
  @MinLength(3)
  @IsNotEmpty()
  public username: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @MinLength(6)
  @IsNotEmpty()
  public password: string;
  public createdAt: Date;
  public updatedAt: Date;
  public hasNotifications: boolean;

  public sessionToken?: string | null;
  public bio?: string | null;
  public emailVerified?: Date | null;
  public image?: string | null;
  public coverImage?: string | null;
  public profileImage?: string | null;

  constructor(
    id: string,
    name: string,
    username: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
    hasNotifications: boolean,
    sessionToken?: string | null,
    bio?: string | null,
    emailVerified?: Date | null,
    image?: string | null,
    coverImage?: string | null,
    profileImage?: string | null,
  ) {
    Object.assign(this, {
      id,
      name,
      username,
      email,
      password,
      createdAt,
      updatedAt,
      hasNotifications,
      sessionToken,
      bio,
      emailVerified,
      image,
      coverImage,
      profileImage,
    });
  }

  static create(user: UpdateUserDTO) {
    return new User(
      user.id,
      user.name!,
      user.username!,
      user.email!,
      user.password!,
      user.createdAt!,
      user.updatedAt!,
      user.hasNotifications!,
      user.sessionToken,
      user.bio,
      user.emailVerified,
      user.image,
      user.coverImage,
      user.profileImage,
    );
  }

  static fromPrisma(user: PrismaUser) {
    return new User(
      user.id,
      user.name,
      user.username,
      user.email,
      user.password,
      user.createdAt,
      user.updatedAt,
      user.hasNotifications,
      user.sessionToken,
      user.bio,
      user.emailVerified,
      user.image,
      user.coverImage,
      user.profileImage,
    );
  }

  static fromPrismaArray(users: PrismaUser[]) {
    return users.map((user) => User.fromPrisma(user));
  }
}
