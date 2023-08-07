import { PrismaPostRepository } from '../../../../src/modules/repository/prisma/post/post.repository';
import { PrismaClient } from '@prisma/client';
import { MockFactory } from '@test/mock';
import {
  CREATE_POST_DATA,
  VALID_POST,
  VALID_POST_DATA,
} from '@test/mock/data/post';
import { Post as PrismaPost } from '@prisma/client';
import { DeepMockProxy } from 'jest-mock-extended';
import { IUpdatePostDTO } from '@Post';

describe('[REPOSITORY] | Post', () => {
  let prisma: DeepMockProxy<PrismaClient>;
  let repository: PrismaPostRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    const mock = MockFactory.REPOSITORY.PRISMA.POST_DEV();

    prisma = mock.prisma;
    repository = mock.repository;

    expect(repository).toBeInstanceOf(PrismaPostRepository);
    expect(prisma.post.create).toHaveProperty('mockResolvedValue');
  });

  it('[UNIT] | Should: Create => [POST]', async () => {
    prisma.post.create.mockResolvedValue(VALID_POST_DATA as PrismaPost);

    const result = await repository.create(CREATE_POST_DATA);

    expect(result).toEqual(VALID_POST);

    expect(prisma.post.create).toHaveBeenCalledTimes(1);
    expect(prisma.post.create).toHaveBeenCalledWith({ data: CREATE_POST_DATA });
  });

  it('[UNIT] | Should: FindAll => [POST]', async () => {
    prisma.post.findMany.mockResolvedValue([VALID_POST_DATA as PrismaPost]);

    const result = await repository.findAll();

    expect(result).toEqual([VALID_POST]);

    expect(prisma.post.findMany).toHaveBeenCalledTimes(1);
    expect(prisma.post.findMany).toHaveBeenCalledWith();
  });

  it('[UNIT] | Should: FindById => [POST]', async () => {
    prisma.post.findUnique.mockResolvedValue(VALID_POST_DATA as PrismaPost);

    const result = await repository.findById({ id: VALID_POST_DATA.id });

    expect(result).toEqual(VALID_POST);

    expect(prisma.post.findUnique).toHaveBeenCalledTimes(1);
    expect(prisma.post.findUnique).toHaveBeenCalledWith({
      where: { id: VALID_POST_DATA.id },
    });
  });

  it('[UNIT] | Should: Update => [POST]', async () => {
    const UPDATED_POST = {
      ...VALID_POST_DATA,
      body: 'Rapaaaaaz!',
    };

    prisma.post.update.mockResolvedValue(UPDATED_POST as PrismaPost);

    const UPDATE_DATA: IUpdatePostDTO = {
      id: VALID_POST.id,
      body: 'Rapaaaaaz!',
    };

    const result = await repository.update(UPDATE_DATA);

    expect(result.id).toEqual(VALID_POST.id);
    expect(result.body).not.toEqual(VALID_POST.body);
    expect(result.body).toEqual(UPDATE_DATA.body);
    expect(result.image).toEqual(VALID_POST.image);

    expect(prisma.post.update).toHaveBeenCalledTimes(1);
    expect(prisma.post.update).toHaveBeenCalledWith({
      where: { id: UPDATE_DATA.id },
      data: { body: UPDATE_DATA.body },
    });
  });

  it('[UNIT] | Should: Delete => [POST]', async () => {
    prisma.post.delete.mockResolvedValue(VALID_POST_DATA as PrismaPost);

    await repository.delete({ id: VALID_POST_DATA.id });

    expect(prisma.post.delete).toHaveBeenCalledTimes(1);
    expect(prisma.post.delete).toHaveBeenCalledWith({
      where: { id: VALID_POST_DATA.id },
    });
  });

  it('[UNIT] | Should: FindByAuthorId => [POST]', async () => {
    prisma.post.findUnique.mockResolvedValue(VALID_POST_DATA as PrismaPost);

    const result = await repository.findByAuhorId({ id: VALID_POST.authorId });

    expect(result).toEqual(VALID_POST);

    expect(prisma.post.findUnique).toHaveBeenCalledTimes(1);
    expect(prisma.post.findUnique).toHaveBeenCalledWith({
      where: { authorId: VALID_POST.authorId },
    });
  });
});
