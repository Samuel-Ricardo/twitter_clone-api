import { ISimulatedPrismaNotificationRepository } from '@test/@types/simulate/notification/repository';
import { MockFactory } from '@test/mock';

describe('[REPOSITORY] | PRISMA => [NOTIFICATION]', () => {
  let module: ISimulatedPrismaNotificationRepository;

  beforeEach(async () => {
    jest.clearAllMocks();

    module = MockFactory.REPOSITORY.PRISMA.NOTIFICATION_DEV();

    expect(module).toBeDefined();
    expect(module.repository).toBeDefined();
    expect(module.prisma).toBeDefined();
  });
});
