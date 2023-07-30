import dotenv from 'dotenv';
import { resolve } from 'path';
import TestEnvironment from 'jest-environment-jsdom';
import { randomUUID } from 'crypto';
import { execSync } from 'child_process';
import { MongoClient } from 'mongodb';

dotenv.config({ path: resolve(__dirname, '..', '.env.test') });

const DB_SYNC = 'npm run db:sync';

const BASE = {
  _URL: null,
  getURL: () => {
    if (!BASE._URL) {
      // Outside Container
      BASE._URL = process.env.DATABASE_URL;

      // inside Container
      //BASE._URL = process.env.DOCKER_DATABASE_URL
    }

    return BASE._URL;
  },
};

class CustomEnvironment extends TestEnvironment {
  counter = 0;
  connectionString = [];
  database = [];

  constructor(config, context) {
    super(config, context);

    this.database[this.counter] = `test_db_${randomUUID()}`;

    console.log({ DATABASE: this.database });

    this.connectionString[this.counter] = BASE.getURL().replace(
      '[database]',
      this.database[this.counter],
    );

    this.counter++;
  }

  setup() {
    process.env.DATABASE_URL = this.connectionString[this.counter - 1];
    this.global.process.env.DATABASE_URL =
      this.connectionString[this.counter - 1];

    process.env.NODE_ENV = 'test';

    console.log({ CONNECTION_STRING: process.env.DATABASE_URL });

    execSync(DB_SYNC);
  }

  teardown() {
    console.log('[TEARDOWN] | START');

    this.connectionString.map(async (url, index) => {
      const con = await MongoClient.connect(url);
      await con.db().dropDatabase();
      await con.close();

      console.log({ DROP_DB: this.database[index] });
    });

    console.log('[TEARDOWN] | DONE');
  }
}

module.exports = CustomEnvironment;
