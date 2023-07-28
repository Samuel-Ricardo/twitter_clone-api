'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.SwaggerModule = void 0;
const swagger_ui_express_1 = __importDefault(require('swagger-ui-express'));
const swagger_json_1 = __importDefault(require('../../../../swagger.json'));
const env_1 = require('../../config/env');
class SwaggerModule {
  static docs_on_prod = false;
  static port;
  static doc_route;
  static server() {
    return swagger_ui_express_1.default.serve;
  }
  static initialize() {
    return swagger_ui_express_1.default.setup(swagger_json_1.default);
  }
  static shouldRun() {
    const env_check =
      env_1.ENV.ENVIRONMENT === 'prod' ? this.docs_on_prod : true;
    return env_check;
  }
  static setup(props) {
    if (props.enable_on_prod) this.docs_on_prod = props.enable_on_prod;
    if (!this.shouldRun()) return;
    const { app, route } = props;
    this.doc_route = !route ? '/docs' : route;
    this.port = !props.port ? env_1.ENV.PORT : props.port;
    app.use(this.doc_route, this.server(), this.initialize());
    app.get(`${this.doc_route}-json`, (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(swagger_json_1.default);
    });
  }
  static logs() {
    if (!this.shouldRun() || !this.doc_route || !this.port) return;
    console.log(
      `[DOCS] | Swagger UI is available at http://localhost:${this.port}${this.doc_route}`,
    );
    console.log(
      `[DOCS] | Documentation schema is available at http://localhost:${this.port}${this.doc_route}-json`,
    );
  }
}
exports.SwaggerModule = SwaggerModule;
