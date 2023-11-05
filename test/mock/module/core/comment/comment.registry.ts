export const CommentMockRegistry = {
  CONTROLLER: Symbol.for('MOCK:>COMMENT.CONTROLLER'),
  CONTROLLER_DEV: Symbol.for('MOCK:>COMMENT.CONTROLLER_DEV'),
  SERVICE: Symbol.for('MOCK:>COMMENT.SERVICE'),
  SERVICE_DEV: Symbol.for('MOCK:>COMMENT.SERVICE_DEV'),
  POLICY: {
    SECURITY: {
      ENCRYPT: {
        BEFORE: {
          COMMENT: Symbol.for('MOCK:>COMMENT.POLICY.ENCRYPT.BEFORE.COMMENT'),
          COMMENTS: Symbol.for('MOCK:>COMMENT.POLICY.ENCRYPT.BEFORE.COMMENTS'),
        },
      },
    },
  },
  USE_CASE: {
    CREATE: Symbol.for('MOCK:>COMMENT.USE_CASE.CREATE'),
    UPDATE: Symbol.for('MOCK:>COMMENT.USE_CASE.UPDATE'),
    DELETE: Symbol.for('MOCK:>COMMENT.USE_CASE.DELETE'),
    GET: {
      BY: {
        POST: Symbol.for('MOCK:>COMMENT.USE_CASE.GET.BY.POST'),
        AUTHOR: Symbol.for('MOCK:>COMMENT.USE_CASE.GET.BY.AUTHOR'),
      },
    },
  },
};
