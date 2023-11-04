export const FollowMockRegistry = {
  SERVICE: Symbol.for('MOCK.FOLLOW.SERVICE'),
  SERVICE_DEV: Symbol.for('MOCK.FOLLOW.SERVICE_DEV'),
  CONTROLLER: Symbol.for('MOCK.FOLLOW.CONTROLLER'),
  CONTROLLER_DEV: Symbol.for('MOCK.FOLLOW.CONTROLLER_DEV'),
  POLICY: {
    SECURITY: {
      ENCRYPT: {
        BEFORE: {
          FOLLOW: Symbol.for(
            'MOCK.FOLLOW.POLICY.SECURITY.ENCRYPT.BEFORE.FOLLOW',
          ),
          FOLLOWERS: Symbol.for(
            'MOCK.FOLLOW.POLICY.SECURITY.ENCRYPT.BEFORE.FOLLOWERS',
          ),
        },
      },
    },
    FOLLOW: Symbol.for('MOCK.FOLLOW.POLICY.FOLLOW'),
  },
  USE_CASE: {
    CREATE: Symbol.for('MOCK.FOLLOW.USE_CASE.CREATE'),
    DELETE: Symbol.for('MOCK.FOLLOW.USE_CASE.DELETE'),
    COUNT: {
      FOLLOWERS: Symbol.for('MOCK.FOLLOW.USE_CASE.COUNT.FOLLOWERS'),
      FOLLOWING: Symbol.for('MOCK.FOLLOW.USE_CASE.COUNT.FOLLOWING'),
    },
    GET: {
      FOLLOWERS: Symbol.for('MOCK.FOLLOW.USE_CASE.GET.FOLLOWERS'),
      FOLLOWING: Symbol.for('MOCK.FOLLOW.USE_CASE.GET.FOLLOWING'),
    },
  },
};
