export interface IUserDTO {
  id: string;

  name: string;
  username: string;
  email: string;
  password: string;

  createdAt: Date;
  updatedAt: Date;
  hasNotifications: boolean;

  sessionToken?: string | null;
  bio?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  coverImage?: string | null;
  profileImage?: string | null;
}
