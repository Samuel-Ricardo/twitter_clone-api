/*
 *@jest-environment ./test/environment.js
 */

import { MODULES } from '@modules';
import { PrismaPostRepository } from '../../../../../src/modules/repository/prisma/post/post.repository';
import { CREATE_POST_DATA, VALID_POST } from '@test/mock/data/post';
import { IUpdatePostDTO } from '@Post';

describe('[REPOSITORY] | Post', () => {
  let repository: PrismaPostRepository;

  beforeEach(async () => {
    repository = MODULES.REPOSITORY.PRISMA.POST();
    expect(repository).toBeInstanceOf(PrismaPostRepository);
  });

  it('[INTEGRATION] | Should: Create => [POST]', async () => {
    const result = await repository.create(CREATE_POST_DATA);

    expect(result).toHaveProperty('id');
    expect(result.authorId).toEqual(CREATE_POST_DATA.authorId);
    expect(result.body).toEqual(CREATE_POST_DATA.body);
    expect(result.image).toEqual(CREATE_POST_DATA.image);
  });

  it('[INTEGRATION] | Should: FindAll => [POST]', async () => {
    const result = await repository.findAll();

    expect(result).toHaveLength(1);
    expect(result[0]).toHaveProperty('id');
    expect(result[0].authorId).toEqual(CREATE_POST_DATA.authorId);
  });

  it('[INTEGRATION] | Should: FindByAuthorId & FindById => [POST]', async () => {
    const byAuthor = await repository.findByAuhorId({
      id: CREATE_POST_DATA.authorId,
    });

    expect(byAuthor).toHaveProperty('id');
    expect(byAuthor.authorId).toEqual(CREATE_POST_DATA.authorId);
    expect(byAuthor.body).toEqual(CREATE_POST_DATA.body);

    const result = await repository.findById({ id: byAuthor.id });

    expect(result).toHaveProperty('id');
    expect(result.id).toEqual(byAuthor.id);
    expect(result.authorId).toEqual(byAuthor.authorId);
    expect(result.body).toEqual(byAuthor.body);
  });

  it('[INTEGRATION] | Should: Update => [POST]', async () => {
    const byAuthor = await repository.findByAuhorId({
      id: CREATE_POST_DATA.authorId,
    });

    expect(byAuthor).toHaveProperty('id');
    expect(byAuthor.authorId).toEqual(CREATE_POST_DATA.authorId);
    expect(byAuthor.body).toEqual(CREATE_POST_DATA.body);

    const data: IUpdatePostDTO = {
      id: byAuthor.id,
      body: 'Tomi!',
    };

    const result = await repository.update({
      ...data,
    });

    expect(result).toHaveProperty('id');
    expect(result.id).toEqual(byAuthor.id);
  });

  it('[INTEGRATION] | Should: Delete => [POST]', async () => {
    try {
      const byAuthor = await repository.findByAuhorId({
        id: CREATE_POST_DATA.authorId,
      });
      expect(
        repository.delete({
          id: byAuthor.id,
        }),
      ).resolves.not.toThrow();
    } catch (e) {
      expect(e).toBeUndefined();
    }
  });
});
