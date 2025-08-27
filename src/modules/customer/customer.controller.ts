import createResponse from '../../shared/createResponse';
import { Request, Response } from 'express';
import __customerService from './customer.service'
import z from 'zod';
import { createCustomerSchema } from './customer.validator';
import catchAsync from '../../shared/catchAsync';


const getCustomers = catchAsync(async (_req, res) => {
  const data = await __customerService.getCustomersFromDB();

  new createResponse(200, true, "Customers fetched successfully", data).send(res);
})


const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const payload = await z.parseAsync(createCustomerSchema, req.body)

  const data = await __customerService.createCustomerIntoDB(payload);

  new createResponse(201, true, "Customer created successfully", data).send(res);
})


const getSingleCustomer = catchAsync(async (req, res) => {
  const data = await __customerService.getSingleCustomerFromDB(req.params.id)

  new createResponse(200, true, "Customer fetched successfully", data).send(res);
})


const updateCustomer = catchAsync(async (req, res) => {
  const { id } = req.params

  const payload = req.body

  const data = await __customerService.updateCustomerIntoDB(id, payload)

  new createResponse(200, true, "Customer updated successfully", data).send(res);
})


const deleteCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;

  await __customerService.deleteCustomerFromDB(id);

  res.status(204).json({
    success: true,
    message: "Customer deleted successfully"
  })
})

const __customerController = {
  getCustomers,
  createCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer
}

export default __customerController
