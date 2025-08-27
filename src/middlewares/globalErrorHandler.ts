import { type ErrorRequestHandler } from 'express'
import { ZodError } from 'zod'
import createResponse from '../shared/createResponse'


const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {

  if (err instanceof ZodError) {
    console.log('-------------------- zod error handler -------------------')
    res.status(409).json({
      success: false,
      message: err.message,
      stack: process.env.NODE_ENV == 'development' ? err.stack : "Optional stack strace only on development"
    })
  }
}


export default globalErrorHandler
