"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_controller_1 = __importDefault(require("./customer.controller"));
const customerRoutes = express_1.default.Router();
customerRoutes.get('/', customer_controller_1.default.getCustomers);
customerRoutes.post('/', customer_controller_1.default.createCustomer);
customerRoutes.get('/:id', customer_controller_1.default.getSingleCustomer);
customerRoutes.put('/:id', customer_controller_1.default.updateCustomer);
customerRoutes.delete('/:id', customer_controller_1.default.deleteCustomer);
exports.default = customerRoutes;
