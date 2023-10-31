import { IUserDTO } from '@User/DTO/user.dto';

export interface IUserCypher {
  hashPassword(password: string): Promise<string>;
  comparePassword(password: string, hashedPassword: string): Promise<boolean>;

  encryptUser(user: IUserDTO): string;
  decryptUser(user: string): IUserDTO;

  encryptUsers(users: IUserDTO[]): string;
  decryptUsers(users: string): IUserDTO[];
}
