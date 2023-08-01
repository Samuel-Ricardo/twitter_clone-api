import 'reflect-metadata';
import { MODULE } from './app.registry';

import { AppModule } from './app.module';
import { RepositoryFactory as REPOSITORY } from './repository/repository.factory';
import { PrismaFactory } from './prisma';
import { USER_MODULE as USER } from './@core/user/user.factory';

import { Express } from 'express';

export const MODULES = {
  ...PrismaFactory,
  USER,
  REPOSITORY,
  APP: () => AppModule.get<Express>(MODULE.APP),
};
