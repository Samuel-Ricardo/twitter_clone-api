import { EVENTS } from '../reactive/reactive.config';

const EVENT = {
  ...EVENTS,
  START: {
    ...EVENTS.START,
    API: 'event.start.api',
  },
};
