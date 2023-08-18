export const CommentRegistry = {
  USE_CASE: {
    CREATE: Symbol.for('COMMENT.USE_CASE.CREATE'),
    UPDATE: Symbol.for('COMMENT.USE_CASE.UPDATE'),
    DELETE: Symbol.for('COMMENT.USE_CASE.DELETE'),
    GET: {
      BY: {
        POST: Symbol.for('COMMENT.USE_CASE.GET.BY.POST'),
        AUTHOR: Symbol.for('COMMENT.USE_CASE.GET.BY.AUTHOR'),
      },
    },
  },
};
