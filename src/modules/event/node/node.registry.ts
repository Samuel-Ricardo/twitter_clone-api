export const NodeEventsRegistry = {
  INSTANCE: {
    EMITTER: Symbol.for('Insatance.Events.Node.EventEmitter'),
  },
  EMITTER: Symbol.for('Events.Node.EventEmitter'),
  NOTIFICATION: Symbol.for('Events.Node.Notification'),
  LIKE: Symbol.for('Events.Node.Like'),
  APP: Symbol.for('Events.Node.App'),
};
