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

  async hashPassword(password: string) {
    return await this.cryptographer.hash(password);
  }

  async comparePassword(password: string, hashedPassword: string) {
    return await this.cryptographer.compareHash(password, hashedPassword);
  }

  encryptUsers(users: IUserDTO[]): string {
    return this.cryptographer.encryptIV(JSON.stringify(users));
  }

  decryptUsers(users: string): IUserDTO[] {
    return JSON.parse(this.cryptographer.decryptIV(users));
  }
}
