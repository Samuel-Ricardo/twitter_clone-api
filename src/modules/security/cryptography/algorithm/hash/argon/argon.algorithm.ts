import { injectable } from 'inversify';
import { IHashAlgorithm } from '../hash.algorithm';
import { injectArgon } from '@modules/argon/argon.module';
import { MODULE } from '@modules/app.registry';
import argon2 from 'argon2';

@injectable()
export class Argon2 implements IHashAlgorithm {
  @injectArgon(MODULE.ARGON[2])
  protected readonly argon: typeof argon2;

  async hash(word: string) {
    return await this.argon.hash(word, { type: this.argon.argon2id });
  }
  async compareHash(word: string | Buffer, hash: string) {
    return await this.argon.verify(hash, word, { type: this.argon.argon2id });
  }
}
