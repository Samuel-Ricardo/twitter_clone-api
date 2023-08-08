import { PrismaPostRepository } from './post';
import { PrismaRepositoryModule } from './prisma-repository.module';
import { PrismaRepositoryRegistry } from './prisma-repository.registry';
import { PrismaUserRepository } from './user/user.repository';

export const PrismaRepositoryFactory = {
  USER: () =>
    PrismaRepositoryModule.get<PrismaUserRepository>(
      PrismaRepositoryRegistry.USER,
    ),
  POST: () =>
    PrismaRepositoryModule.get<PrismaPostRepository>(
      PrismaRepositoryRegistry.POST,
    ),
};
