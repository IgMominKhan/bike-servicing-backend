"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateServiceValidationSchema = exports.createServiceValidationSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createServiceValidationSchema = zod_1.default.object({
    bikeId: zod_1.default.uuid(),
    serviceDate: zod_1.default.iso.datetime(),
    status: zod_1.default.enum(['pending', 'in-progres', 'done']),
    description: zod_1.default.string()
});
exports.updateServiceValidationSchema = exports.createServiceValidationSchema.partial();
