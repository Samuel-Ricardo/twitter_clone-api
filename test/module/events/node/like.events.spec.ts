import { ILikeEvents } from '@Like';
import { MODULES } from '@modules';
import { VALID_POST_LIKE } from '@test/mock/data/like';

describe('[EVENTS] | Node => [LIKE]', () => {
  let events: ILikeEvents;

  beforeEach(() => {
    events = MODULES.EVENTS.NODE.LIKE();

    expect(events).toBeDefined();
  });

  it('[UNIT] | Should: emit event [create] => [LIKE]', (done) => {
    events.subscribeCreateLike({
      execute: (data) => {
        expect(data).toStrictEqual(VALID_POST_LIKE.toStruct());
        done();
      },
    });
    events.emitCreateLike(VALID_POST_LIKE.toStruct());
  });
});
