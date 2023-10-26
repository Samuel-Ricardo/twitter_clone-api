import { injectable } from 'inversify';
import { IHashAlgorithm } from '../hash.algorithm';
import { injectArgon } from '../../../../../argon/argon.module';
import { MODULE } from '../../../../../app.registry';
import argon2 from 'argon2';
import { ENV } from '@env';
import { randomUUID, randomBytes } from 'node:crypto';

@injectable()
export class Argon2 implements IHashAlgorithm {
  @injectArgon(MODULE.ARGON[2])
  protected readonly argon: typeof argon2;

  protected readonly breakpoint = ENV.SECURITY.CRYPTOGRAPHY.HASH.BREAKPOINT;
  protected readonly saltBreakpoint =
    ENV.SECURITY.CRYPTOGRAPHY.HASH.SALT.BREAKPOINT;

  async hash(plain: string) {
    const salt = this.salt;

    const hashString = await this.argon.hash(plain, {
      type: this.argon.argon2id,
      salt,
    });

    return this.injectSalt(hashString.concat(this.breakpoint), salt);
  }
}
