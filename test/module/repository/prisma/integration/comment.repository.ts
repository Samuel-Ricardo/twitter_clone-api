import { MODULES } from '../../../../../src/modules/app.factory';
import { ICommentRepository } from '../../../../../src/modules/@core/comment/repository';

describe('[REPOSITORY] | PRISMA => [COMMENT]', () => {
  let repositoy: ICommentRepository;

  beforeAll(() => {
    repositoy = MODULES.REPOSITORY.PRISMA.COMMENT();

    expect(repositoy).toBeDefined();
  });
});
