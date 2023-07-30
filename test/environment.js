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
