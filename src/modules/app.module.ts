import 'reflect-metadata';
import { Application } from './manager';

import { Container } from 'inversify';
import { PrismaModule } from './prisma/prisma.module';
import { RepositoryModule } from './repository/repository.module';

import { Express } from 'express';
import { MODULE } from './app.registry';
import { UserModule } from '@User';
import { RoutesModule } from './router/router.module';

const Module = new Container();
Module.bind<Express>(MODULE.APP).toConstantValue(Application.Instance());

export const AppModule = Container.merge(
  Module,
  PrismaModule,
  RepositoryModule,
  UserModule,
  RoutesModule,
);
