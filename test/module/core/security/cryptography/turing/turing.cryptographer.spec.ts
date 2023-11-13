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

  it('[UNIT] | Should: be able to => [ENCRYPT] ', () => {
    module.cryptoAlgorithm.encryptIV.mockReturnValue('ENCRYPTED');

    const result = module.turing.encryptIV('DATA');

    expect(result).toBe('ENCRYPTED');

    expect(module.cryptoAlgorithm.encryptIV).toHaveBeenCalledTimes(1);
    expect(module.cryptoAlgorithm.encryptIV).toHaveBeenCalledWith('DATA');
  });

  it('[UNIT] | Should: be able to => [DECRYPT] ', () => {
    module.cryptoAlgorithm.decryptIV.mockReturnValue('DATA');

    const result = module.turing.decryptIV('ENCRYPTED');

    expect(result).toBe('DATA');

    expect(module.cryptoAlgorithm.decryptIV).toHaveBeenCalledTimes(1);
    expect(module.cryptoAlgorithm.decryptIV).toHaveBeenCalledWith('ENCRYPTED');
  });
});
