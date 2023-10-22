import { IEncriptedIV } from '@Type/security/cryptography/iv/encrypted';
import { CreateUserDTO } from '@User';
import { IUserCypher } from '@User/cypher/user.cypher';
import { MODULE } from '@modules/app.registry';
import { ICryptographer } from '@modules/security/cryptography/cryptography.contract';
import { inject, injectable } from 'inversify';

@injectable()
export class TuringUserCypher implements IUserCypher {
  constructor(
    @inject(MODULE.SECURITY.CRYPTOGRAPHY.TURING)
    protected readonly cryptographer: ICryptographer,
  ) {}

  async hashPassword(password: string) {
    return await this.cryptographer.hash(password);
  }

  async comparePassword(password: string, hashedPassword: string) {
    return await this.cryptographer.compareHash(password, hashedPassword);
  }

  encryptCreateUserDTO(user: CreateUserDTO) {
    return this.cryptographer.encryptIV(JSON.stringify(user));
  }

  decryptCreateUserDTO(user: IEncriptedIV): CreateUserDTO {
    return JSON.parse(this.cryptographer.decryptIV(user));
  }
}
