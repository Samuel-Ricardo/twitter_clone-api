import { ISimulatePrismaLikeRepository } from '@test/@types/simulate/like/repository';
import { MockFactory } from '@test/mock';

describe('[REPOSITORY] | LIKE', () => {
  let module: ISimulatePrismaLikeRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.REPOSITORY.PRISMA.LIKE_DEV();

    expect(module).toBeDefined();
    expect(module.repository).toBeDefined();
    expect(module.prisma).toBeDefined();
  });
});
