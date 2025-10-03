"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_routes_1 = __importDefault(require("../modules/customer/customer.routes"));
const bike_routes_1 = __importDefault(require("../modules/bike/bike.routes"));
const service_routes_1 = __importDefault(require("../modules/service/service.routes"));
const routes = express_1.default.Router();
routes.use("/customers", customer_routes_1.default);
routes.use('/bikes', bike_routes_1.default);
routes.use("/services", service_routes_1.default);
exports.default = routes;
