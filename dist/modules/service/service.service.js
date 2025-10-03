"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../shared/prisma"));
const service_constant_1 = require("./service.constant");
const getServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany();
    return result;
});
const getSingleServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findUniqueOrThrow({ where: { serviceId: id } });
    return result;
});
const createServiceIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-expect-error
    payload.status = service_constant_1.requestStatusType[payload.status];
    console.log(payload.bikeId);
    yield prisma_1.default.bike.findUniqueOrThrow({ where: { bikeId: payload.bikeId } });
    const result = yield prisma_1.default.serviceRecord.create({ data: payload });
    if (result.status) {
        // @ts-expect-error
        result.status = service_constant_1.responseStatusType[result.status];
    }
    return result;
});
const updateServiceIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // will throw error if not found, and the error will be handled by global error handler middleware
    yield prisma_1.default.serviceRecord.findUniqueOrThrow({ where: { serviceId: id } });
    // @ts-expect-error
    payload.status = service_constant_1.requestStatusType[payload.status];
    const result = yield prisma_1.default.serviceRecord.update({ where: { serviceId: id }, data: payload });
    if (result.status) {
        // @ts-expect-error
        result.status = service_constant_1.responseStatusType[result.status];
    }
    return result;
});
// INFO: get services those are pending or in-progerss
// and service date is older than seven days
const getServiceStatusFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    // const olderThan7Days = new Date();
    //
    // olderThan7Days.setDate(olderThan7Days.getDate() - 7)
    // const result = await prisma.serviceRecord.findMany({
    //   where: {
    //     AND: [
    //       {
    //         OR: [
    //           { status: STATUS.INPROGRES },
    //           { status: STATUS.PENDING },
    //         ]
    //       },
    //       { serviceDate: { lte: olderThan7Days } }
    //     ]
    //   },
    // })
    // instead of above prisma query, using raw query for better performance
    const result = yield prisma_1.default.$queryRaw `SELECT * FROM "ServiceRecord" WHERE "status" = 'in-progres' OR "status" = 'pending' AND "serviceDate" <= NOW() - INTERVAL '7 days'`;
    return result;
});
const __serviceService = {
    getServicesFromDB,
    getSingleServiceFromDB,
    createServiceIntoDB,
    updateServiceIntoDB,
    getServiceStatusFromDB
};
exports.default = __serviceService;
