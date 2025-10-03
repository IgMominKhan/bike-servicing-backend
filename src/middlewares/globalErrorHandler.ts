import { type ErrorRequestHandler } from 'express'
import { ZodError } from 'zod'
import createResponse from '../shared/createResponse'
import { PrismaClientKnownRequestError } from '../../generated/prisma/runtime/library'


const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    new createResponse(409, false, JSON.parse(err.message)).send(res, err)
  } else if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === "P2025") {
      new createResponse(404, false, `${err.meta?.modelName} not found`).send(res, err)
    } else if (err.code === "P2002") {
      new createResponse(409, false, `${err.meta?.target} already exists`).send(res, err)
    } else {
      new createResponse(409, false, err.message).send(res, err)
    }
  }
}


export default globalErrorHandler
