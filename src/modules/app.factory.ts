import { MODULE } from './app.registry';

import { AppModule } from './app.module';
import { RepositoryFactory } from './repository/repository.factory';
import { PrismaFactory } from './prisma';

import { Express } from 'express';

export const MODULES = {
  ...PrismaFactory,
  REPOSITORY: { ...RepositoryFactory },
  APP: () => AppModule.get<Express>(MODULE.APP),
};
