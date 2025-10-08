"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bike_controller_1 = __importDefault(require("./bike.controller"));
const bikeRoutes = express_1.default.Router();
bikeRoutes.get("/", bike_controller_1.default.getBikes);
bikeRoutes.post("/", bike_controller_1.default.createBike);
bikeRoutes.get("/:id", bike_controller_1.default.getSingleBike);
exports.default = bikeRoutes;
