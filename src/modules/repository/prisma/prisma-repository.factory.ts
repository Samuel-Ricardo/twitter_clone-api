import {
  PrismaRepositoryModule,
  PrismaRepositoryRegistry,
} from './prisma-repository.module';
import { PrismaUserRepository } from './user.repository';

export const PrismaRepositoryFactory = {
  USER_REPOSITORY: () =>
    PrismaRepositoryModule.get<PrismaUserRepository>(
      PrismaRepositoryRegistry.USER_REPOSITORY,
    ),
};
