export const PrismaRepositoryMockRegistry = {
  USER: Symbol.for('UserPrismaRepositoryMock'),
  USER_DEV: Symbol.for('UserPrismaDevRepositoryMock'),
  POST: Symbol.for('PostPrismaRepositoryMock'),
  POST_DEV: Symbol.for('PostPrismaDevRepositoryMock'),
  LIKE: Symbol.for('PRISMA>LIKE>REPOSITORY'),
  LIKE_DEV: Symbol.for('PRISMA.LIKE.REPOSITORY.DEV'),
  FOLLOW: Symbol.for('PRISMA.FOLLOW>REPOSITORY'),
  FOLLOW_DEV: Symbol.for('PRISMA.FOLLOW.REPOSITORY.DEV'),
  COMMENT: Symbol.for('PRISMA.COMMENT>REPOSITORY'),
  COMMENT_DEV: Symbol.for('PRISMA.COMMENT.REPOSITORY.DEV'),
};
