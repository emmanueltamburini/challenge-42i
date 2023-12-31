"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_constant_1 = require("../constants/routes.constant");
const challenge_routes_1 = __importDefault(require("../routes/challenge.routes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../docs/swagger.json"));
class Server {
    constructor() {
        var _a;
        this.apiPaths = {
            challenge: routes_constant_1.CHALLENGE_PATH
        };
        this.app = (0, express_1.default)();
        this.port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : '8000';
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static(routes_constant_1.LOCAL_PUBLIC_FOLDER_PATH));
        this.app.use(routes_constant_1.DOCS_PATH, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    routes() {
        this.app.use(this.apiPaths.challenge, challenge_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server is running in :', `http://localhost:${this.port}`);
            console.log('You can find all documentation in :', `http://localhost:${this.port}/api-docs`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map