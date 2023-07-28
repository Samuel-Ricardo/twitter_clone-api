"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const _modules_1 = require("@modules");
const _env_1 = require("@env");
const documentation_1 = require("@modules/documentation");
app_1.app.listen(_env_1.ENV.PORT, () => {
    documentation_1.SwaggerModule.logs();
    (0, _modules_1.log)({
        context: 'API',
        message: `listening on: http://localhost:${_env_1.ENV.PORT}`,
    });
});
