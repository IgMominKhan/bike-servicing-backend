"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_controller_1 = __importDefault(require("./service.controller"));
const serviceRoutes = express_1.default.Router();
serviceRoutes.get("/", service_controller_1.default.getServices);
serviceRoutes.get("/status", service_controller_1.default.getServiceStatus);
serviceRoutes.get("/:id", service_controller_1.default.getSingleService);
serviceRoutes.post("/", service_controller_1.default.createService);
serviceRoutes.put("/:id", service_controller_1.default.updateService);
exports.default = serviceRoutes;
