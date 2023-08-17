import { ISimulateFollowRepository } from '@test/@types/simulate/follow/repository';
import { MockFactory } from '@test/mock';
import { CREATE_FOLLOW_DATA, VALID_FOLLOW } from '@test/mock/data/follow';

describe('[REPOSITORY] | FOLLOW', () => {
  let module: ISimulateFollowRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.REPOSITORY.PRISMA.FOLLOW_DEV();

    expect(module).toBeDefined();
    expect(module.repository).toBeDefined();
    expect(module.prisma).toBeDefined();
  });

  it('[UNIT] | Should: create => [FOLLOW]', async () => {
    module.prisma.follow.create.mockResolvedValue(VALID_FOLLOW);

    const result = await module.repository.create(CREATE_FOLLOW_DATA);

    expect(result).toStrictEqual(VALID_FOLLOW);
    expect(module.prisma.follow.create).toBeCalledTimes(1);
    expect(module.prisma.follow.create).toBeCalledWith({
      data: CREATE_FOLLOW_DATA,
    });
  });
});
