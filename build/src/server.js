"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 3000;
app_1.app.listen(port, () => console.log('[API] | listening on: http://localhost:3000'));
