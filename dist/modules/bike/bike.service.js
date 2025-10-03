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
const getBikesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.bike.findMany();
    return result;
});
const createBike = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isValidCustomer = yield prisma_1.default.customer.findUniqueOrThrow({ where: { customerId: payload.customerId } });
    console.log("isValidCustomer", isValidCustomer);
    const result = yield prisma_1.default.bike.create({ data: payload });
    return result;
});
const getSingleBikeFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.bike.findUniqueOrThrow({ where: { bikeId: id } });
    return result;
});
const __bikeService = {
    getBikesFromDB,
    createBike,
    getSingleBikeFromDB
};
exports.default = __bikeService;
