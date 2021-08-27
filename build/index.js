"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = __importDefault(require("fastify"));
var app = fastify_1.default({
    logger: false,
});
app.get("/", function (req, reply) {
    reply.send({ hello: "world" });
});
app.listen(3000);
//# sourceMappingURL=index.js.map