import { Prisma } from "../../../generated/prisma";
import prisma from "../../shared/prisma"

const getCustomersFromDB = async () => {
  const result = await prisma.customer.findMany();

  return result
}


const createCustomerIntoDB = async (payload: any) => {
  const result = await prisma.customer.create({ data: payload }).catch(err => { throw err })

  return result
}


const getSingleCustomerFromDB = async (customerId: any) => {
  const result = await prisma.customer.findUnique({ where: { customerId } })

  return result
}


const updateCustomerIntoDB = async (customerId: string, payload: any) => {
  const result = await prisma.customer.update({ where: { customerId }, data: payload })

  return result
}


const deleteCustomerFromDB = async (customerId: any) => {
  const result = await prisma.customer.delete({ where: { customerId: customerId } })

  return result
}


const __customerService = {
  getCustomersFromDB,
  createCustomerIntoDB,
  getSingleCustomerFromDB,
  updateCustomerIntoDB,
  deleteCustomerFromDB
}

export default __customerService
