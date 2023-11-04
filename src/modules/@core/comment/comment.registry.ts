export const CommentRegistry = {
  SERVICE: Symbol.for('COMMENT.SERVICE'),
  CONTROLLER: Symbol.for('COMMENT.CONTROLLER'),
  POLICY: {
    SECURITY: {
      ENCRYPT: {
        BEFORE: {
          COMMENT: Symbol.for('COMMENT.POLICY.SECURITY.ENCRYPT.BEFORE.COMMENT'),
          COMMENTS: Symbol.for(
            'COMMENT.POLICY.SECURITY.ENCRYPT.BEFORE.COMMENTS',
          ),
        },
      },
    },
  },
  USE_CASE: {
    CREATE: Symbol.for('COMMENT.USE_CASE.CREATE'),
    UPDATE: Symbol.for('COMMENT.USE_CASE.UPDATE'),
    DELETE: Symbol.for('COMMENT.USE_CASE.DELETE'),
    GET: {
      BY: {
        ID: Symbol.for('COMMENT.USE_CASE.GET.BY.ID'),
        POST: Symbol.for('COMMENT.USE_CASE.GET.BY.POST'),
        AUTHOR: Symbol.for('COMMENT.USE_CASE.GET.BY.AUTHOR'),
      },
    },
  },
};
