import { ISimulateTuring } from '@test/@types/simulate/security/cryptography/turing';
import { MockFactory } from '@test/mock';

describe('[CRYPTOGRAPHY] | CRYPTOGRAPHER => [TURING]', () => {
  let module: ISimulateTuring;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.SECURITY.CRYPTOGRAPHY.SIMULATE.TURING();

    expect(module).toBeDefined();
    expect(module.turing).toBeDefined();
    expect(module.cryptoAlgorithm).toBeDefined();
    expect(module.hashAlgorithm).toBeDefined();
  });
});
