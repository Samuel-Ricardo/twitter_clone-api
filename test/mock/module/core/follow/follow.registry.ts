export const FollowMockRegistry = {
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
