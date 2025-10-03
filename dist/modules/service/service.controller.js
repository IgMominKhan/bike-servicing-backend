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
const service_service_1 = __importDefault(require("./service.service"));
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const createResponse_1 = __importDefault(require("../../shared/createResponse"));
const service_validators_1 = require("./service.validators");
const getServices = (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield service_service_1.default.getServicesFromDB();
    new createResponse_1.default(200, true, "Service records fetched successfully", data).send(res);
}));
const getSingleService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield service_service_1.default.getSingleServiceFromDB(id);
    new createResponse_1.default(200, true, "Service record fetched successfully", data).send(res);
}));
const createService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = yield service_validators_1.createServiceValidationSchema.parseAsync(req.body);
    const data = yield service_service_1.default.createServiceIntoDB(payload);
    if (!data)
        return res.status(403).json({ success: false, status: 403, message: "No Bike Found" });
    new createResponse_1.default(201, true, "Service record created successfully", data).send(res);
}));
// NOTE: SORRY SIR, I have modified the update service a bit
// INFO: instead of just marking the service as completed, we can update other fields as well
const updateService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const payload = yield service_validators_1.updateServiceValidationSchema.parseAsync(req.body);
    const data = yield service_service_1.default.updateServiceIntoDB((_a = req.params) === null || _a === void 0 ? void 0 : _a.id, payload);
    new createResponse_1.default(200, true, "Service updated successfully", data).send(res);
}));
const getServiceStatus = (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield service_service_1.default.getServiceStatusFromDB();
    new createResponse_1.default(200, true, "Overdue or pending services fetched successfully", data).send(res);
}));
const __serviceController = {
    getServices,
    getSingleService,
    createService,
    updateService,
    getServiceStatus
};
exports.default = __serviceController;
