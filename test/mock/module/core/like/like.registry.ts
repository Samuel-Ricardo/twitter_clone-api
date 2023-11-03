export const MockLikeRegistry = {
  SERVICE: Symbol.for('MOCK:LIKE.SERVICE'),
  SERVICE_DEV: Symbol.for('MOCK:LIKE.SERVICE.DEV'),
  CONTROLLER: Symbol.for('MOCK:LIKE.CONTROLLER'),
  CONTROLLER_DEV: Symbol.for('MOCK:LIKE.CONTROLLER.DEV'),
  POLICY: {
    SECURITY: {
      ENCRYPT: {
        BEFORE: {
          LIKE: Symbol.for('MOCK:LIKE.POLICY.SECURITY.ENCRYPT.BEFORE.LIKE'),
          LIKES: Symbol.for('MOCK:LIKE.POLICY.SECURITY.ENCRYPT.BEFORE.LIKES'),
        },
      },
    },
  },
  USE_CASE: {
    EVENTS: {
      CREATE: Symbol.for('MOCK:LIKE.USE_CASE.EVENTS.CREATE'),
    },
    CREATE: Symbol.for('MOCK:LIKE.USE_CASE.CREATE'),
    DELETE: Symbol.for('MOCK:LIKE.USE_CASE.DELETE'),
    GET: {
      BY: {
        POST: Symbol.for('MOCK:LIKE.USE_CASE.GET.LIKE.OF.POST'),
        COMMENT: Symbol.for('MOCK:LIKE.USE_CASE.GET.LIKE.OF.COMMENT'),
        USER: Symbol.for('MOCK:LIKE.USE_CASE.GET.LIKE.OF.USER'),
      },
    },
  },
};
