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
const createResponse_1 = __importDefault(require("../../shared/createResponse"));
const customer_service_1 = __importDefault(require("./customer.service"));
const zod_1 = __importDefault(require("zod"));
const customer_validator_1 = require("./customer.validator");
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const getCustomers = (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield customer_service_1.default.getCustomersFromDB();
    new createResponse_1.default(200, true, "Customers fetched successfully", data).send(res);
}));
const createCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = yield zod_1.default.parseAsync(customer_validator_1.createCustomerSchema, req.body);
    const data = yield customer_service_1.default.createCustomerIntoDB(payload);
    new createResponse_1.default(201, true, "Customer created successfully", data).send(res);
}));
const getSingleCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield customer_service_1.default.getSingleCustomerFromDB(req.params.id);
    new createResponse_1.default(200, true, "Customer fetched successfully", data).send(res);
}));
const updateCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(req.body);
    const payload = yield customer_validator_1.updateCustomerValidationSchema.parseAsync(req.body);
    const data = yield customer_service_1.default.updateCustomerIntoDB(id, payload);
    new createResponse_1.default(200, true, "Customer updated successfully", data).send(res);
}));
const deleteCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield customer_service_1.default.deleteCustomerFromDB(id);
    res.status(200).json({
        success: true,
        message: "Customer deleted successfully"
    });
}));
const __customerController = {
    getCustomers,
    createCustomer,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer
};
exports.default = __customerController;
