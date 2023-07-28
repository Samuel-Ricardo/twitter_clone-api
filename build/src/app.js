"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const documentation_1 = require("./modules/documentation");
const _modules_1 = require("@modules");
const app = _modules_1.Application.Instance();
exports.app = app;
documentation_1.SwaggerModule.setup({ app });
app.get('/', (req, res) => {
    res.send({ result: 'Hello World!' });
});
