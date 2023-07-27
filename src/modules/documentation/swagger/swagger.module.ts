import { Express } from 'express';
import Swagger from 'swagger-ui-express';
import SwaggerConfig from '../../../../swagger.json';
import { ENV } from '@/modules/config/env';

export class SwaggerModule {
  private static docs_on_prod: boolean = false;
  private static port: number | string;
  private static doc_route: string;

  private static server() {
    return Swagger.serve;
  }

  private static initialize() {
    return Swagger.setup(SwaggerConfig);
  }

  private static shouldRun() {
    const env_check = ENV.ENVIRONMENT === 'prod' ? this.docs_on_prod : true;
    return env_check;
  }

  static setup(props: {
    app: Express;
    port?: number | string;
    route?: string;
    enable_on_prod?: boolean;
  }) {
    if (props.enable_on_prod) this.docs_on_prod = props.enable_on_prod;
    if (!this.shouldRun()) return;

    const { app, route } = props;
    this.doc_route = !route ? '/docs' : route;
    this.port = !props.port ? ENV.PORT : props.port;

    app.use(this.doc_route, this.server(), this.initialize());

    app.get(`${this.doc_route}-json`, (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(SwaggerConfig);
    });
  }

  static logs() {
    if (!this.shouldRun() && !this.doc_route) return;

    console.log(
      `[DOCS] | Swagger UI is available at http://localhost:${this.port}${this.doc_route}`,
    );
    console.log(
      `[DOCS] | Documentation schema is available at http://localhost:${this.port}${this.doc_route}-json`,
    );
  }
}
