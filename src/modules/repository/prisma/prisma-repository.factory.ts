import { PrismaRepositoryModule } from './prisma-repository.module';
import { PrismaRepositoryRegistry } from './prisma-repository.registry';
import { PrismaUserRepository } from './user.repository';

export const PrismaRepositoryFactory = {
  USER: () =>
    PrismaRepositoryModule.get<PrismaUserRepository>(
      PrismaRepositoryRegistry.USER,
    ),
};
