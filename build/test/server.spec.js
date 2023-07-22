"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("@/app");
const supertest_1 = __importDefault(require("supertest"));
describe('[API] | health check', () => {
    it('should be healthy', async () => {
        const response = await (0, supertest_1.default)(app_1.app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 'Hello World!' });
    });
});
