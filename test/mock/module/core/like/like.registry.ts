export const MockLikeRegistry = {
  USE_CASE: {
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
