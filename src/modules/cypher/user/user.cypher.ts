import {
  CreateUserDTO,
  IDeleteuserDTO,
  SelectUserByIdDTO,
  UpdateUserDTO,
} from '@User';
import { IUserDTO } from '@User/DTO/user.dto';
import { IUserCypher } from '@User/cypher/user.cypher';
import { MODULE } from '@modules/app.registry';
import { ICryptographer } from '@modules/security/cryptography/cryptography.contract';
import { inject, injectable } from 'inversify';

@injectable()
export class UserCypher implements IUserCypher {
  constructor(
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.TURING)
    protected readonly cryptographer: ICryptographer,
  ) {}

  encryptUser(user: IUserDTO): string {
    return this.cryptographer.encryptIV(JSON.stringify(user));
  }

  decryptUser(user: string): IUserDTO {
    return JSON.parse(this.cryptographer.decryptIV(user));
  }

  encryptUpdateUserDTO(updateUserDTO: UpdateUserDTO): string {
    throw new Error('Method not implemented.');
  }

  decryptUpdateUserDTO(updateUserDTO: string): UpdateUserDTO {
    throw new Error('Method not implemented.');
  }

  ecnryptDeleteUserDTO(user: IDeleteuserDTO): string {
    throw new Error('Method not implemented.');
  }

  decryptDeleteUserDTO(user: string): IDeleteuserDTO {
    throw new Error('Method not implemented.');
  }

  encryptSelectUserByIdDTO(user: SelectUserByIdDTO): string {
    throw new Error('Method not implemented.');
  }

  decryptSelectUserByIdDTO(user: string): SelectUserByIdDTO {
    throw new Error('Method not implemented.');
  }

  async hashPassword(password: string) {
    return await this.cryptographer.hash(password);
  }

  async comparePassword(password: string, hashedPassword: string) {
    return await this.cryptographer.compareHash(password, hashedPassword);
  }

  encryptCreateUserDTO(user: CreateUserDTO) {
    return this.cryptographer.encryptIV(JSON.stringify(user));
  }

  decryptCreateUserDTO(user: string): CreateUserDTO {
    return JSON.parse(this.cryptographer.decryptIV(user));
  }
}
