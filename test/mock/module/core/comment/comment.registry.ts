export const CommentMockRegistry = {
  SERVICE: Symbol.for('MOCK:>COMMENT.SERVICE'),
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
