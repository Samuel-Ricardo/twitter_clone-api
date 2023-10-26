import {
  CreateUserDTO,
  UpdateUserDTO,
  IDeleteuserDTO,
  SelectUserByIdDTO,
} from '@User/DTO';
import { IUserDTO } from '@User/DTO/user.dto';

export interface IUserCypher {
  hashPassword(password: string): Promise<string>;
  comparePassword(password: string, hashedPassword: string): Promise<boolean>;

  encryptUser(user: IUserDTO): string;
  decryptUser(user: string): IUserDTO;

  encryptUpdateUserDTO(updateUserDTO: UpdateUserDTO): string;
  decryptUpdateUserDTO(updateUserDTO: string): UpdateUserDTO;

  encryptCreateUserDTO(user: CreateUserDTO): string;
  decryptCreateUserDTO(user: string): CreateUserDTO;

  ecnryptDeleteUserDTO(user: IDeleteuserDTO): string;
  decryptDeleteUserDTO(user: string): IDeleteuserDTO;

  encryptSelectUserByIdDTO(user: SelectUserByIdDTO): string;
  decryptSelectUserByIdDTO(user: string): SelectUserByIdDTO;
}
