'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const app_1 = require('./app');
const env_1 = require('./modules/config/env');
const documentation_1 = require('./modules/documentation');
app_1.app.listen(env_1.ENV.PORT, () => {
  documentation_1.SwaggerModule.logs();
  console.log(`[API] | listening on: http://localhost:${env_1.ENV.PORT}`);
});
