import { interfaces } from 'inversify';
import { Argon2 } from '../../../../../../../../src/modules/security/cryptography/algorithm/hash/argon/argon.algorithm';
import { mockDeep } from 'jest-mock-extended';
import { ISimulateArgonAlgorithm } from '@test/@types/simulate/security/cryptography/algorithm/hash/argon';
import { ARGON_REGISTRY_MOCK } from '@test/mock/module/argon/argon.registry';

export const mockArgonAlgorithm = () => mockDeep<Argon2>();

export const simulateArgonAlgorithm = ({
  container,
}: interfaces.Context): ISimulateArgonAlgorithm => {
  const engine = container.get<any>(ARGON_REGISTRY_MOCK[2]);
  const argon = new Argon2(engine);

  return { argon, engine };
};
