import { DeepMockProxy } from 'jest-mock-extended';

export interface ISimulateController<S, C> {
  service: DeepMockProxy<S>;
  controller: C;
}
