export const PostRegistry = {
  SERVICE: {
    DEFAULT: Symbol('POST.SERVICE.DEFAULT'),
  },
  USE_CASE: {
    CREATE: Symbol('POST.USE_CASE.CREATE'),
    UPDATE: Symbol('POST.USE_CASE.UPDATE'),
    DELETE: Symbol('POST.USE_CASE.DELETE'),
    FIND: {
      ALL: Symbol('POST.USE_CASE.FIND.ALL'),
      BY: {
        ID: Symbol('POST.USE_CASE.FIND.BY_ID'),
        AUTHOR: Symbol('POST.USE_CASE.FIND.BY_AUTHOR'),
      },
    },
  },
};
