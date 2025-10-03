import { Response } from "express";


class createResponse {
  constructor(public code: number, public success: boolean, public message: string, public data?: any) {
  }

  send(res: Response, err?: Error) {
    if (err) {
      res.status(this.code).json({
        success: this.success,
        status: this.code,
        message: this.message,
        stack: (process.env.NODE_ENV === 'development') ? err.stack : "Optional stack trace shown only in development"
      })
    } else {
      res.status(this.code).json({
        success: this.success,
        message: this.message,
        data: this.data
      })
    }
  }
}


export default createResponse;
