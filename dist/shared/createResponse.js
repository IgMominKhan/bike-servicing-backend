"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class createResponse {
    constructor(code, success, message, data) {
        this.code = code;
        this.success = success;
        this.message = message;
        this.data = data;
    }
    send(res, err) {
        if (err) {
            res.status(this.code).json({
                success: this.success,
                status: this.code,
                message: this.message,
                stack: (process.env.NODE_ENV === 'development') ? err.stack : "Optional stack trace shown only in development"
            });
        }
        else {
            res.status(this.code).json({
                success: this.success,
                message: this.message,
                data: this.data
            });
        }
    }
}
exports.default = createResponse;
