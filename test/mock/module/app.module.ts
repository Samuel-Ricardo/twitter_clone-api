import { Container } from 'inversify';
import {
  PrismaMockResgistry,
  PrismaMockModule,
  PrismaMockFactory,
} from './prisma';

export const MODULE_MOCK = {
  ...PrismaMockResgistry,
};

export const AppModuleMock = PrismaMockModule;

export const MockFactory = {
  ...PrismaMockFactory,
};
