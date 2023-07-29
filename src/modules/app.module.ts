import 'reflect-metadata';

import { Container } from 'inversify';
import { PrismaRegistry, PrismaModule } from './prisma/prisma.module';

import express, { Express } from 'express';
import { PrismaClient } from '@prisma/client';

export const MODULE = {
  ...PrismaRegistry,
  APP: Symbol.for('app'),
};

const container = new Container();

container.bind<Express>(MODULE.APP).toConstantValue(express());

export const AppModule = Container.merge(PrismaModule, container);

export const AppFactory = {
  PRISMA: () => PrismaModule.get<PrismaClient>(MODULE.Prisma),
  APP: () => container.get<Express>(MODULE.APP),
};
