import { interfaces } from 'inversify';
import { Turing } from '../../../../../../src/modules/security/cryptography/turing/turing.cryptographer';
import { mockDeep } from 'jest-mock-extended';
import { ALGORITHM_REGISTRY_MOCK } from '../algorithm/algorithm.registry';
import { ISimulateTuring } from '@test/@types/simulate/security/cryptography/turing';

export const mockTuring = () => mockDeep<Turing>();

export const simulateTuring = ({
  container,
}: interfaces.Context): ISimulateTuring => {
  const cryptoAlgorithm = container.get<any>(ALGORITHM_REGISTRY_MOCK.IV.CRYPTO);
  const hashAlgorithm = container.get<any>(
    ALGORITHM_REGISTRY_MOCK.HASH.ARGON[2],
  );

  const turing = new Turing(cryptoAlgorithm, hashAlgorithm);

  return { turing, cryptoAlgorithm, hashAlgorithm };
};
