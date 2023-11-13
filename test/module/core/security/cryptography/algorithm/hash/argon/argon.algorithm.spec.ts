import { Argon2 } from '../../../../../../../../src/modules/security/cryptography/algorithm/hash/argon/argon.algorithm';
import { ISimulateArgonAlgorithm } from '@test/@types/simulate/security/cryptography/algorithm/hash/argon';
import { MockFactory } from '@test/mock';

describe('[CRYPTOGRAPHY] | [HASH] | ALGORITHM => [ARGON]', () => {
  let module: ISimulateArgonAlgorithm;

  beforeEach(() => {
    jest.clearAllMocks();

    module =
      MockFactory.SECURITY.CRYPTOGRAPHY.ALGORITHM.SIMULATE.HASH.ARGON[2]();

    expect(module.engine).toBeDefined();
    expect(module.argon).toBeInstanceOf(Argon2);
  });
});
