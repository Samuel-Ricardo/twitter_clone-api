export const NotificationRegistry = {
  SERVICE: Symbol.for('NOTIFICATION.SERVICE'),
  USE_CASE: {
    EVENTS: {
      CREATE: Symbol.for('USE_CASE.EVENTS.CREATE.NOTIFICATION'),
      VISUALIZE: Symbol.for('USE_CASE.EVENTS.VISUALIZE.NOTIFICATION'),
    },
    CREATE: Symbol.for('USE_CASE.CREATE.NOTIFICATION'),
    DELETE: Symbol.for('USE_CASE.DELETE.NOTIFICATION'),
    VISUALIZE: Symbol.for('USE_CASE.VISUALIZE.NOTIFICATION'),
    GET: {
      BY: {
        USER: Symbol.for('USE_CASE.GET.NOTIFICATION.BY.USER'),
      },
    },
  },
};
