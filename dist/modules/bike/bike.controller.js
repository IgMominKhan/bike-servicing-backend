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
const bike_service_1 = __importDefault(require("./bike.service"));
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const createResponse_1 = __importDefault(require("../../shared/createResponse"));
const bike_validations_1 = require("./bike.validations");
const getBikes = (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield bike_service_1.default.getBikesFromDB();
    new createResponse_1.default(200, true, "Bikes fetched successfully", data).send(res);
}));
const createBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = yield bike_validations_1.createBikeValidationSchema.parseAsync(req.body);
    const data = yield bike_service_1.default.createBike(payload);
    new createResponse_1.default(200, true, "Bike created successfully", data).send(res);
}));
const getSingleBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield bike_service_1.default.getSingleBikeFromDB(id);
    new createResponse_1.default(200, true, "Bike fetched successfully", data).send(res);
}));
const __bikeController = {
    getBikes,
    createBike,
    getSingleBike,
};
exports.default = __bikeController;
