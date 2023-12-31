export const FollowRegistry = {
  SERVICE: Symbol.for('CORE.FOLLOW.SERVICE.DEFAULT'),
  CONTROLLER: Symbol.for('CORE.FOLLOW.CONTROLLER.DEFAULT'),
  POLICY: {
    SECURITY: {
      ENCRYPT: {
        BEFORE: {
          FOLLOW: Symbol.for(
            'CORE.FOLLOW.POLICY.SECURITY.ENCRYPT.BEFORE.FOLLOW',
          ),
          FOLLOWERS: Symbol.for(
            'CORE.FOLLOW.POLICY.SECURITY.ENCRYPT.BEFORE.FOLLOWERS',
          ),
        },
      },
    },
  },
  USE_CASE: {
    CREATE: Symbol.for('CORE.FOLLOW.USE-CASE.CREATE'),
    DELETE: Symbol.for('CORE.FOLLOW.USE-CASE.DELETE'),
    COUNT: {
      FOLLOWERS: Symbol.for('CORE.FOLLOW.USE-CASE.COUNT.FOLLOWERS'),
      FOLLOWINGS: Symbol.for('CORE.FOLLOW.USE-CASE.COUNT.FOLLOWINGS'),
    },
    GET: {
      FOLLOWERS: Symbol.for('CORE.FOLLOW.USE-CASE.GET.FOLLOWERS'),
      FOLLOWINGS: Symbol.for('CORE.FOLLOW.USE-CASE.GET.FOLLOWINGS'),
    },
  },
};
