export const LikeRegistry = {
  EVENTS: Symbol.for('LIKE.EVENTS'),
  SERVICE: {
    DEFAULT: Symbol.for('LIKE.SERVICE.DEFAULT'),
  },
  CONTROLLER: {
    DEFAULT: Symbol.for('LIKE.CONTROLLER.DEFAULT'),
  },
  POLICY: {
    SECURITY: {
      ENCRYPT: {
        BEFORE: {
          LIKE: Symbol.for('LIKE.POLICY.SECURITY.ENCRYPT.BEFORE.LIKE'),
          LIKES: Symbol.for('LIKE.POLICY.SECURITY.ENCRYPT.BEFORE.LIKES'),
        },
      },
    },
  },
  USE_CASE: {
    EVENTS: {
      CREATE: Symbol.for('LIKE.USE_CASE.EVENTS.CREATE'),
    },
    CREATE: Symbol.for('LIKE.USE_CASE.CREATE'),
    DELETE: Symbol.for('LIKE.USE_CASE.DELETE'),
    GET: {
      BY: {
        POST: Symbol.for('LIKE.GET.BY.POST'),
        COMMENT: Symbol.for('LIKE.GET.BY.COMMENT'),
        USER: Symbol.for('LIKE.GET.BY.USER'),
      },
    },
  },
};
