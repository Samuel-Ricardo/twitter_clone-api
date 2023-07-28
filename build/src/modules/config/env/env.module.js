'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ENV = void 0;
const dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
exports.ENV = {
  ...process.env,
  ENVIRONMENT: process.env.ENVIRONMENT || 'dev',
  PORT: process.env.PORT || 3000,
};
