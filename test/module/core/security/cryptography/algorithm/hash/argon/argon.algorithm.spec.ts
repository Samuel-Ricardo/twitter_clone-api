import { Argon2 } from '../../../../../../../../src/modules/security/cryptography/algorithm/hash/argon/argon.algorithm';
import { ISimulateArgonAlgorithm } from '@test/@types/simulate/security/cryptography/algorithm/hash/argon';
import { MockFactory } from '@test/mock';
import { HASH_BREAKPOINT, SALT_BREAKPOINT } from '@test/mock/data/cypher/argon';

describe('[CRYPTOGRAPHY] | [HASH] | ALGORITHM => [ARGON]', () => {
  let module: ISimulateArgonAlgorithm;

  beforeEach(() => {
    jest.clearAllMocks();

    module =
      MockFactory.SECURITY.CRYPTOGRAPHY.ALGORITHM.SIMULATE.HASH.ARGON[2]();

    expect(module.engine).toBeDefined();
    expect(module.argon).toBeInstanceOf(Argon2);
  });

  it('[UNIT] | Should: be able to => [HASH]', async () => {
    module.engine.hash.mockResolvedValue('hash');

    const result = await module.argon.hash('data');

    expect(result).toMatch(
      new RegExp(
        `hash${HASH_BREAKPOINT}${SALT_BREAKPOINT}\\w+.*${SALT_BREAKPOINT}`,
      ),
    );
  });
});
