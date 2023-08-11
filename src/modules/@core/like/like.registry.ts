export const LikeRegistry = {
  SERVICE: {
    DEFAULT: Symbol('LIKE.SERVICE.DEFAULT'),
  },
  CONTROLLER: {
    DEFAULT: Symbol('LIKE.CONTROLLER.DEFAULT'),
  },
  USE_CASE: {
    CREATE: Symbol('LIKE.USE_CASE.CREATE'),
    DELETE: Symbol('LIKE.USE_CASE.DELETE'),
    GET: {
      BY: {
        POST: Symbol('LIKE.GET.BY.POST'),
        COMMENT: Symbol('LIKE.GET.BY.COMMENT'),
        USER: Symbol('LIKE.GET.BY.USER'),
      },
    },
  },
};
