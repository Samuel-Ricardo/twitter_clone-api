import { inject, injectable } from 'inversify';
import { IHashAlgorithm } from '../hash.algorithm';
import { MODULE } from '../../../../../app.registry';
import argon2 from 'argon2';
import { ENV } from '@env';
import { randomUUID, randomBytes } from 'node:crypto';

@injectable()
export class Argon2 implements IHashAlgorithm {
  constructor(
    @inject(MODULE.ARGON[2])
    protected readonly argon: typeof argon2,
  ) {}

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

  async compareHash(plain: string | Buffer, hash: string) {
    return await this.argon.verify(this.extractHash(hash), plain, {
      type: this.argon.argon2id,
      salt: this.extractSalt(hash),
    });
  }

  get salt() {
    return Buffer.from(randomUUID() + randomBytes(32).toString('hex'));
  }

  injectSalt(hash: string, salt: Buffer) {
    return this.injectOnHash(hash, salt.toString('hex'), this.saltBreakpoint);
  }

  extractSalt(hash: string) {
    return Buffer.from(
      this.extractHashMetadata(hash, this.saltBreakpoint),
      'hex',
    );
  }

  extractHash(hash: string) {
    return hash.split(this.breakpoint)[0];
  }

  injectOnHash(hash: string, data: string, breakpoint: string) {
    return hash.concat(breakpoint, data, breakpoint);
  }

  extractHashMetadata(hash: string, breakpoint: string) {
    return hash.split(breakpoint)[1];
  }
}
