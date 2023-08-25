import { ILikeEvents } from '@Like';
import { MODULES } from '@modules';
import { VALID_POST_LIKE } from '@test/mock/data/like';

describe('[EVENTS] | Node => [LIKE]', () => {
  let events: ILikeEvents;

  beforeEach(() => {
    events = MODULES.EVENTS.NODE.LIKE();

    expect(events).toBeDefined();
  });
});
