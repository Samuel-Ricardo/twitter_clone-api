import 'reflect-metadata';
import { Application } from './manager';

import { Container } from 'inversify';
import { PrismaModule } from './prisma/prisma.module';
import { RepositoryModule } from './repository/repository.module';

import { Express } from 'express';
import { MODULE } from './app.registry';

const container = new Container();
container.bind<Express>(MODULE.APP).toConstantValue(Application.Instance());

export const AppModule = Container.merge(
  container,
  PrismaModule,
  RepositoryModule,
);
