import { Request, Response } from 'express';
import __customerService from './customer.service'
import { success } from 'zod';


const getCustomers = async (_req: Request, res: Response) => {
  const data = await __customerService.getCustomersFromDB();

  res.status(200).json({ success: true, message: "Customers fetched successfully", data })
}


const createCustomer = async (req: Request, res: Response) => {
  const data = await __customerService.createCustomerIntoDB(req.body);


  res.status(200).json({
    success: true,
    message: "Customer created successfully",
    data
  })
}


const getSingleCustomer = async (req: Request, res: Response) => {
  const data = await __customerService.getSingleCustomerFromDB(req.params.id)


  res.status(200).json({
    success: true,
    message: "Customer fetched successfully",
    data
  })
}


const updateCustomer = async (req: Request, res: Response) => {
  const { id } = req.params

  const payload = req.body

  const data = await __customerService.updateCustomerIntoDB(id, payload)

  res.status(200).json({
    success: true,
    message: "Customer updated successfully",
    data
  })
}


const deleteCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;

  await __customerService.deleteCustomerFromDB(id);

  res.status(200).json({
    success: true,
    message: "Customer deleted successfully"
  })
}

const __customerController = {
  getCustomers,
  createCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer
}

export default __customerController
