import { IEncriptedIV } from '@Type/security/cryptography/iv/encrypted';
import {
  CreateUserDTO,
  UpdateUserDTO,
  IDeleteuserDTO,
  SelectUserByIdDTO,
} from '@User/DTO';
import { User } from '@prisma/client';

export interface IUserCypher {
  hashPassword(password: string): Promise<string>;
  comparePassword(password: string, hashedPassword: string): Promise<boolean>;

  encryptUser(user: User): IEncriptedIV;
  decryptUser(user: IEncriptedIV): User;

  encryptUpdateUserDTO(updateUserDTO: UpdateUserDTO): IEncriptedIV;
  decryptUpdateUserDTO(updateUserDTO: IEncriptedIV): UpdateUserDTO;

  encryptCreateUserDTO(user: CreateUserDTO): IEncriptedIV;
  decryptCreateUserDTO(user: IEncriptedIV): CreateUserDTO;

  ecnryptDeleteUserDTO(user: IDeleteuserDTO): IEncriptedIV;
  decryptDeleteUserDTO(user: IEncriptedIV): IDeleteuserDTO;

  encryptSelectUserByIdDTO(user: SelectUserByIdDTO): IEncriptedIV;
  decryptSelectUserByIdDTO(user: IEncriptedIV): SelectUserByIdDTO;
}
