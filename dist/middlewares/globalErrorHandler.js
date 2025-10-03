"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createResponse_1 = __importDefault(require("../shared/createResponse"));
const library_1 = require("../../generated/prisma/runtime/library");
const node_util_1 = require("node:util");
const globalErrorHandler = (err, req, res, next) => {
    var _a, _b;
    if (err instanceof zod_1.ZodError) {
        new createResponse_1.default(409, false, JSON.parse(err.message)).send(res, err);
    }
    else if (err instanceof library_1.PrismaClientKnownRequestError) {
        console.log((0, node_util_1.styleText)("redBright", "PRISMA ERROR"), err);
        if (err.code === "P2025") {
            new createResponse_1.default(404, false, `${(_a = err.meta) === null || _a === void 0 ? void 0 : _a.modelName} not found`).send(res, err);
        }
        else if (err.code === "P2002") {
            new createResponse_1.default(409, false, `${(_b = err.meta) === null || _b === void 0 ? void 0 : _b.target} already exists`).send(res, err);
        }
        else {
            new createResponse_1.default(409, false, err.message).send(res, err);
        }
    }
};
exports.default = globalErrorHandler;
