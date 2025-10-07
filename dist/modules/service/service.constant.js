"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestStatusType = exports.responseStatusType = void 0;
const prisma_1 = require("../../../generated/prisma");
exports.responseStatusType = {
    PENDING: "pending",
    INPROGRES: "in-progres",
    DONE: "done"
};
exports.requestStatusType = {
    pending: prisma_1.STATUS.PENDING,
    "in-progres": prisma_1.STATUS.INPROGRES,
    done: prisma_1.STATUS.DONE
};
