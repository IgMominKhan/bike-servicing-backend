"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleNotFoundRoutes = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `${req.path} not found`
    });
};
exports.default = handleNotFoundRoutes;
