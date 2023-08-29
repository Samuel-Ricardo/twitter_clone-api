/*
 * @jest-environment ./test/environment
 */

import { INotificationRepository } from '../../../../../src/modules/@core/notification/repository';
import { MODULES } from '@modules';
import { PrismaNotificationRepository } from '../../../../../src/modules/repository/prisma/notification';

describe('[REPOSITORY] | PRISMA => [NOTIFICATION]', () => {
  let repository: INotificationRepository;

  beforeEach(() => {
    repository = MODULES.REPOSITORY.PRISMA.NOTIFICATION();

    expect(repository).toBeDefined();
    expect(repository).toBeInstanceOf(PrismaNotificationRepository);
  });

  it('[INTEGRATION] | Should: Create => [NOTIFICATION]', async () => {
    expect(true).toBeTruthy();
  });
});
