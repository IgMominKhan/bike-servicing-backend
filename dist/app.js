"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const handleNotFoundRoutes_1 = __importDefault(require("./middlewares/handleNotFoundRoutes"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api', routes_1.default);
// not found error handler
app.use(handleNotFoundRoutes_1.default);
// global error handling
app.use(globalErrorHandler_1.default);
exports.default = app;
