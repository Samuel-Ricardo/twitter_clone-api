import { mockDeep } from 'jest-mock-extended';
import { Crypto } from '../../../../../../../src/modules/security/cryptography/algorithm/crypto/crypto.algorithm';
import { interfaces } from 'inversify';
import { CRYPTO_REGISTRY_MOCK } from '@test/mock/module/crypto/crypto.registry';
import { ISimulateCryptoAlgorithm } from '@test/@types/simulate/security/cryptography/algorithm/crypto';

export const mockCryptoAlgorithm = () => mockDeep<Crypto>();

export const simulateCryptoAlgorithm = ({
  container,
}: interfaces.Context): ISimulateCryptoAlgorithm => {
  const engine = container.get<any>(CRYPTO_REGISTRY_MOCK.CRYPTO);
  const crypto = new Crypto(engine);

  return { crypto, engine };
};
