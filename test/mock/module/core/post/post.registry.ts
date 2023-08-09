export const PostMockRegistry = {
  SERVICE: {
    DEFAULT: {
      MOCK: Symbol('POST.SERVICE.MOCK'),
      SIMULATE: Symbol('POST.SERVICE.SIMULATE'),
    },
  },
  CONTROLLER: {
    DEFAULT: Symbol('POST.CONTROLLER.POST'),
  },
  USE_CASE: {
    CREATE: Symbol('POST.USE_CASE.CREATE'),
    UPDATE: Symbol('POST.USE_CASE.UPDATE'),
    DELETE: Symbol('POST.USE_CASE.DELETE'),
    FIND: {
      ALL: Symbol('POST.USE_CASE.FIND.ALL'),
      BY: {
        ID: Symbol('POST.USE_CASE.FIND.BY.ID'),
        AUTHOR: Symbol('POST.USE_CASE.FIND.BY.AUTHOR'),
      },
    },
  },
};
