import { EVENTS } from '../reactive/reactive.config';

export const EVENT = {
  ...EVENTS,
  START: {
    ...EVENTS.START,
    API: 'event.start.api',
  },
  LIKE: {
    CREATE: 'event.like.create',
  },
};
