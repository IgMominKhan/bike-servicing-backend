"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../generated/prisma");
const extension_accelerate_1 = require("@prisma/extension-accelerate");
const prisma = new prisma_1.PrismaClient().$extends((0, extension_accelerate_1.withAccelerate)());
exports.default = prisma;
