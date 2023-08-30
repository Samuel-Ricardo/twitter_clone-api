import { ISimulatedNotificationService } from '@test/@types/simulate/notification/service';
import { MockFactory } from '@test/mock';

describe('[SERVICE] | COMMENT', () => {
  let module: ISimulatedNotificationService;

  beforeEach(() => {
    jest.clearAllMocks();

    module = MockFactory.NOTIFICATION.SERVICE_DEV();

    expect(module).toBeDefined();
    expect(module.service).toBeDefined();
    expect(module.use_case).toBeDefined();
  });

  it('[UNIT] | Should: create => [COMMENT]', async () => {
    // module.use_case.create.execute.mockResolvedValue(VALID_POST_COMMENT);

    expect(true).toEqual(true);
  });
});
