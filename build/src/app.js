'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.app = void 0;
const express_1 = __importDefault(require('express'));
const documentation_1 = require('./modules/documentation');
class Application {
  static instance;
  static Instance() {
    if (!Application.instance) Application.instance = (0, express_1.default)();
    return Application.instance;
  }
  static reloadInstance() {
    Application.instance = (0, express_1.default)();
    return Application.Instance();
  }
  static newUniqueInstance() {
    return (0, express_1.default)();
  }
}
const app = Application.Instance();
exports.app = app;
documentation_1.SwaggerModule.setup({ app });
app.get('/', (req, res) => {
  res.send({ result: 'Hello World!' });
});
